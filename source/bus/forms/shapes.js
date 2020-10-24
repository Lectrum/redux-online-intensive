// Core
import { object, string, boolean } from 'yup'; // Валидатор: небольшой и с хорошим интерейсом.

// Instruments
import { invite } from "../../REST/config";

export const login = {
    shape: {
        email:    'elon.musk@spaceX.com',
        password: '12345',
        remember: false,
    },
    schema: object().shape({
        email: string()
            .email()
            .required(),
        password: string()
            .min(5)
            .required(),
        remember: boolean(),
    }),
};

export const signup = {
    shape: { // Изначальное состояние (модель) формы.
        firstName: 'Elon',
        lastName:  'Musk',
        email:     'elon.musk@spaceX.com',
        password:  '12345',
        invite,
    },
    schema: object().shape({ // Правила валидации формы.
        firstName: string().required(),
        lastName:  string().required(),
        email:     string()
            .required()
            .email(),
        password: string()
            .required()
            .min(5),
        invite: string()
            .required()
            .min(11)
            .max(11),
    }),
};

export const newPassword = {
    shape: {
        oldPassword: '',
        newPassword: '',
    },
    schema: object().shape({
        oldPassword: string()
            .required()
            .min(5),
        newPassword: string()
            .required()
            .min(5),
    }),
};

export const composer = {
    shape: {
        comment: '',
    },
    schema: object().shape({
        comment: string()
            .required()
            .min(1),
    }),
};
