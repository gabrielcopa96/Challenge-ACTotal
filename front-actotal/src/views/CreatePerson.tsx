import { ChangeEvent, useContext } from "react"
import Button from "../components/Button"
import { PersonContext } from "../context/PersonContext"

const CreatePerson = () => {

    const { formValues, setFormValues } = useContext(PersonContext);

    /* ------------ HANDLE -------------- */
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: MouseEvent) => {
        event.preventDefault();
        console.log("realmente estoy haciendo click")
    }

    return (
        <div className="container-form">
            <h1 className="title">Ingreso de Datos</h1>
            <form className="form">

                <div className="field">
                    <label htmlFor="">Nombre: </label>
                    <input type="text" className="input" onChange={handleChangeInput} />
                </div>

                <div className="field">
                    <label htmlFor="">Email: </label>
                    <input type="text" className="input" onChange={handleChangeInput} />
                </div>

                <div className="field">
                    <label htmlFor="">Teléfono: </label>
                    <input type="text" className="input" onChange={handleChangeInput} />
                </div>

                <Button onClick={handleSubmit}>Agregar</Button>
            </form>
        </div>
    )
}

export default CreatePerson