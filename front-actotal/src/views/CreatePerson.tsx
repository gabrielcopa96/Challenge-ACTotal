import { ChangeEvent, useContext } from "react"
import Button from "../components/Button"
import { PersonContext } from "../context/PersonContext"
import { validateNumber, validationEmail } from "../services/persons.service";
import AlertError from "../components/Alert";

const CreatePerson = () => {

    const { formValues, setFormValues, createPerson, errors, setErrors } = useContext(PersonContext);

    /* ------------ HANDLE -------------- */
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setErrors({ ...errors, create: false })
        handleErrors({ key: event.target.name, value: event.target.value });
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleErrors = ({ key, value }: { key: string, value: string }) => {
        if (key === 'name') {
            setErrors({ ...errors, name: !value })
        } else if (key === 'email') {
            setErrors({ ...errors, email: !validationEmail(value) })
        } else if (key === 'phone') {
            setErrors({ ...errors, phone: !validateNumber(value) })
        }
    }

    const handleSubmit = async (event: MouseEvent) => {
        event.preventDefault();
        if (formValues.name && formValues.email && formValues.phone) {
            formValues.phone = Number(formValues.phone);
            await createPerson(formValues);
        }
    }

    return (
        <div className="container-form">
            <h1 className="title">Ingreso de Datos</h1>
            <form className="form">

                <div className="field">
                    <label htmlFor="name">Nombre: </label>
                    <input
                        name="name"
                        type="text"
                        className={`input ${errors.name ? 'error' : ''}`}
                        onChange={handleChangeInput}
                        value={formValues.name}
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">Email: </label>
                    <input
                        name="email"
                        type="email"
                        className={`input ${errors.email ? 'error' : ''}`}
                        onChange={handleChangeInput}
                        value={formValues.email}
                    />
                </div>

                <div className="field">
                    <label htmlFor="phone">Teléfono: </label>
                    <input
                        name="phone"
                        type="text"
                        className={`input ${errors.phone ? 'error' : ''}`}
                        onChange={handleChangeInput}
                        value={formValues.phone}
                    />
                </div>

                {
                    errors.create && <AlertError message="There was an error in creating" />
                }

                <Button
                    onClick={handleSubmit}
                    disabled={
                        (!formValues.name || !formValues.email || !formValues.phone) ||
                        (errors.phone || errors.name || errors.email)
                    }
                >
                    Agregar
                </Button>
            </form>


        </div>
    )
}

export default CreatePerson