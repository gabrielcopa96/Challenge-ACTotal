import { Request, Response } from 'express';
import { Person } from '../models/Persons';
import { serviceValidations } from '../services/persons.service';
import { isErrorSequelize } from '../utils/validators';

const getPersons = async (req: Request, res: Response) => {

    try {

        const person = await Person.findAll();

        res.json({
            data: person
        });

    } catch (error) {

        res.json({
            message: "error when getting the persons",
            error: error
        });

    }

}

const createPerson = async (req: Request, res: Response) => {
    try {

        const { name, phone, email } = req.body;

        serviceValidations({ email, phone });

        await Person.create({ name, phone, email });

        res.json({
            data: "created succesfuly"
        })

    } catch (error: any) {

        res.json({
            message: "error when creating the person",
            error: isErrorSequelize(error) ? error.errors[0].message : error.message
        });
    }
}

export { getPersons, createPerson }