import { Router } from "express";
import { getPersons, createPerson } from "../controllers/persons.controller";

const router = Router();

// get all persons
router.get("/person", getPersons);
// create person
router.post("/person/create", createPerson);

export { router }