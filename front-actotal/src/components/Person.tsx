
const Person = ({ person }: any) => {

    function formatISODateToDDMMYYYY(isoDate: string) {
        const date = new Date(isoDate);
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
    }

    return (
        <div className="content-person">
            <div className="item-person">
                Nombre: <span className="item-value">{person.name}</span>
            </div>

            <div className="item-person">
                Email: <span className="item-value">{person.email}</span>
            </div>

            <div className="item-person">
                Telefono: <span className="item-value">{person.phone}</span>
            </div>

            <div className="item-person">
                Ingresado: <span className="item-value">{formatISODateToDDMMYYYY(person.createdAt)}</span>
            </div>
        </div>
    )
}

export default Person;