import { object, string, TypeOf, z } from 'zod';
import { RoleEnumType } from '../entities/user.entity';


export const createUserSchema = object({
  body: object({
    first_name: string({
      required_error: 'FirstName is required',
    })
        .min(3, 'FirstName must be more than 3 characters')
        .max(32, 'FirstName must be less than 32 characters'),

    last_name: string({
      required_error: 'Lastname is required',
    })
        .min(3, 'LastName must be more than 3 characters')
        .max(32, 'LastName must be less than 32 characters'),

    date_birth: string({
        required_error: 'Date of birth is required',
    })
        .min(3, 'Date of birth must be more than 3 characters'),

    address: string({
      required_error: 'addresse is required',
    }).nonempty('address is required'),

    mobile_phone: string({
      required_error: 'mobile phone is required',
    }).nonempty('mobile phone is required'),

    email: string({
      required_error: 'Email address is required',
    }).email('Invalid email address'),
    password: string({
      required_error: 'Password is required',
    })
      .min(8, 'Password must be more than 8 characters and less than 120 characters')
      .max(120, 'Password must be less than 120 characters'),
    passwordConfirm: string({
      required_error: 'Please confirm your password',
    }),
    role: z.optional(z.nativeEnum(RoleEnumType)),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match',
  }),
});

export const loginUserSchema = object({
  body: object({
    mobile_phone: string({
      required_error: 'Mobile is required',
    }).min(10, 'Invalid phone number '),
    password: string({
      required_error: 'Password is required',
    }).min(8, 'Invalid phone number or password'),
  }),
});

const params = {
  params: object({
    userId: string(),
  }),
};
export const getUserSchema = object({
  ...params,
});

export const updateUserSchema = object({
  ...params,
  body: object({
    first_name: string()
        .min(3, 'FirstName must be more than 3 characters')
        .max(32, 'FirstName must be less than 32 characters'),

    last_name: string()
        .min(3, 'LastName must be more than 3 characters')
        .max(32, 'LastName must be less than 32 characters'),

    date_birth: string()
        .min(3, 'Date of birth must be more than 3 characters'),

    address: string().nonempty('address is required'),

    mobile_phone: string().nonempty('mobile phone is required'),

    email: string().email('Invalid email address'),
  }).partial(),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>['body'],
  'passwordConfirm'
>;

export type LoginUserInput = TypeOf<typeof loginUserSchema>['body'];
export type GetUserInput = TypeOf<typeof getUserSchema>['params'];
export type UpdateUserInput = TypeOf<typeof updateUserSchema>;
