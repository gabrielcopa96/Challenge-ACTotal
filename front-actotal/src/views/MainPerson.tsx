import { PersonContextProvider } from "../context/PersonContext";
import CreatePerson from "./CreatePerson";
import ListPerson from "./ListPerson";

const MainPerson = () => {
  return (
    <PersonContextProvider>
      <section className="content-container">
        <CreatePerson />
        <span className="separator"></span>
        <ListPerson />
      </section>
    </PersonContextProvider>
  )
}

export default MainPerson;