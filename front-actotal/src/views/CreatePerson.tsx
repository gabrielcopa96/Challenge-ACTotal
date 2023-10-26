
const CreatePerson = () => {
  return (
    <div className="container-form">
        <h1 className="title">Ingreso de Datos</h1>
        <form className="form">
            <div className="field">
                <label htmlFor="">Nombre: </label>
                <input type="text" />
            </div>

            <div className="field">
                <label htmlFor="">Email: </label>
                <input type="text" />
            </div>

            <div className="field">
                <label htmlFor="">Teléfono: </label>
                <input type="text" />
            </div>

            <button>Guardar</button>
        </form>
    </div>
  )
}

export default CreatePerson