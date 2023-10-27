/* ------------ VALIDATIONS -------------- */
export const validationEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email) return false;
    return emailRegex.test(email);
}

export const validateNumber = (phone: string) => {
    const regexNumber = /^\d{1,9}$/
    if (!phone) return false;
    return regexNumber.test(phone)
}