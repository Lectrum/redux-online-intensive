export * from './validators';

export const sum = (operand1, operand2) => {
    if (typeof operand1 !== 'number') {
        throw new Error('Operant 1 should be a number');
    } else if (typeof operand2 !== 'number') {
        throw new Error('Operant 2 should be a number');
    }

    return operand1 + operand2;
};

export const delay = (duration = 1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};
