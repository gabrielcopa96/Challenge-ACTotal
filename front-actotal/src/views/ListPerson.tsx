import { useContext } from "react";
import Person from "../components/Person";
import { PersonContext } from "../context/PersonContext";
import Button from "../components/Button";
import Icon from "../components/Icon";

const ListPerson = () => {

  const { persons, setPage, page, totalPages } = useContext(PersonContext);

  return (
    <div className="container-list">
      <h1 className="title">Listado de Datos</h1>
      <div className="list-person">
        {
          persons.map((person) => (
            <Person key={person.id} person={person} />
          ))
        }
      </div>
      <div className="btn-container">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <Icon name="arrow-left" />
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={totalPages === page}>
          <Icon name="arrow-right" />
        </Button>
      </div>
    </div>
  )
}

export default ListPerson;