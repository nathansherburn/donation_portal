let valid = require('card-validator');
export const required = value => (value ? undefined : 'The field is required');
export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength100 = maxLength(100);
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const minLength3 = minLength(3);
const minValue = min => value =>
    value && value < min ? `Please enter a value greater than or equal to ${min}` : undefined;
export const minValue1cent = minValue(0.01);
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i.test(value)
        ? 'Invalid email address'
        : undefined;
export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined;
export const expirationDate = value =>
    value && !valid.expirationDate(value).isValid
        ? 'Invalid expiration date'
        : undefined;
export const cvv = value =>
    value && !valid.cvv(value, 3).isValid
        ? 'Invalid CVV'
        : undefined;
export function cardNumber(value) {
    let validated = valid.number(value);
    return value && !validated.isValid
        ? 'Invalid credit card number'
        : undefined;
}