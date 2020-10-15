import { combineForms } from 'react-redux-form';

export const formReducer = combineForms({
    user: {
        profile: {
            firstName: '',
            lastName:  '',
            avatar:    [],
        },
    },
}, 'forms');
