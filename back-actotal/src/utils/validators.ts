// email validation function
export const isEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
}

// phone validation function
export const isPhone = (value: any): boolean => {
    if (typeof value !== 'number') {
        return false; // No es un número
    }

    const strValue = value.toString(); // Convertir a cadena para contar caracteres
    return /^\d{1,9}$/.test(strValue);
}

export const isErrorSequelize = (value: any) => {

    if (value.name === 'SequelizeValidationError') {
        return true;
    }

    if(value.name === 'SequelizeUniqueConstraintError') {
        return true
    }

    return false;

}