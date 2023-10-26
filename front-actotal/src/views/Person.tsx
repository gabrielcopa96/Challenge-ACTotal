import CreatePerson from "./CreatePerson";
import ListPerson from "./ListPerson";

const Person = () => {
  return (
    <section className="content-container">
        <CreatePerson/>
        <span className="separator"></span>
        <ListPerson/>
    </section>
  )
}

export default Person;