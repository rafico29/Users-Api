import { NextFunction, Request, Response } from 'express';
import {findUser, findUserById, findUsers} from "../services/user.service";
import {GetUserInput, UpdateUserInput, updateUserSchema} from "../schemas/user.schema";
import AppError from "../utils/appError";

export const getMeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    res.status(200).status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getUserHandler = async (
    req: Request<GetUserInput>,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log("id  ",req.params.userId)
        const user = await findUserById(req.params.userId);

        if (!user) {
            return next(new AppError(404, 'User with that ID not found'));
        }

        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err: any) {
        next(err);
    }
};

export const getUsersHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
        const users = await findUsers(req);

        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users,
            },
        });
    } catch (err: any) {
        next(err);
    }
};

export const updateUserHandler = async (
    req: Request<UpdateUserInput['params'], {}, UpdateUserInput['body']>,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await findUserById(req.params.userId);

        if (!user) {
            return next(new AppError(404, 'NOT UPDATE user with that ID not found'));
        }

        Object.assign(user, req.body);

        const updatedPost = await user.save();

        res.status(200).json({
            status: 'success',
            data: {
                post: updatedPost,
            },
        });
    } catch (err: any) {
        next(err);
    }
};

export const deleteUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await findUserById(req.params.userId);

        if (!user) {
            return next(new AppError(404, 'User with that ID not found'));
        }



        res.status(204).json({
            status: 'remove success',
            data: {...user},
        });
        await user.remove();

    } catch (err: any) {
        next(err);
    }
};


