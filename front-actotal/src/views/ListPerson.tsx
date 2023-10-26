import { useContext } from "react";
import Person from "../components/Person";
import { PersonContext } from "../context/PersonContext";

const ListPerson = () => {

  const { persons } = useContext(PersonContext);

  return (
    <div className="container-list">
      <h1 className="title">Listado de Datos</h1>
      <div className="list-person">
        {
          persons.map((person) => (
            <Person key={person.id} person={person}/>
          ))
        }
      </div>
    </div>
  )
}

export default ListPerson;