import { Request, Response } from 'express';
import { Person } from '../models/Persons';
import { serviceValidations } from '../services/persons.service';
import { isErrorSequelize } from '../utils/validators';

const getPersons = async (req: Request, res: Response) => {

    try {

        const { page, limit } = req.query;

        const offset = (Number(page) - 1) * Number(limit);
        

        const person = await Person.findAll({
            order: [['createdAt', 'DESC']],
            limit: Number(limit),
            offset: offset
        });

        const total_count = await Person.count();
        const total_pages = Math.ceil(total_count / Number(limit));

        res.status(200).json({
            data: person,
            total_count,
            total_pages,
        });

    } catch (error) {

        res.status(400).json({
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

        res.status(201).json({
            data: "created succesfuly"
        })

    } catch (error: any) {

        res.status(400).json({
            message: "error when creating the person",
            error: isErrorSequelize(error) ? error.errors[0].message : error.message
        });
    }
}

export { getPersons, createPerson }