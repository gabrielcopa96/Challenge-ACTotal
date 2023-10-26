import { isEmail, isPhone } from "../utils/validators"

export const serviceValidations = ({ email, phone }: InputDataValidation) => {

    if(isEmail(email) === false) {
        throw new Error("Invalid email")
    }

    if(isPhone(phone) === false) {
        throw new Error("Invalid phone")
    }

}