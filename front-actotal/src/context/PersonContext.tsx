import { createContext, useEffect, useState } from "react";

// import types and interfaces
import type { ContextProps, FormValuesType, PersonType, ValueContextType } from "./type";

// context
export const PersonContext = createContext({} as ValueContextType);

// provider
export const PersonContextProvider = ({ children }: ContextProps) => {

    /* ----------- STATES -------------- */
    const [formValues, setFormValues] = useState<FormValuesType>({
        name: '',
        phone: '',
        email: '',
    });

    const [limit, setLimit] = useState<number>(8);

    const [persons, setPersons] = useState<PersonType | any>([]);


    /* ------------ SERVICE FETCH -------------- */
    const getPersons = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/person?limit=${limit}`, { cache: 'no-store' });
        const { data } = await response.json();
        setPersons(data);
    }


    const createPerson = async (person: any) => {

        try {
            // convert number phone
            person.phone = Number(person.phone);
            await fetch(`${import.meta.env.VITE_API_URL}/person`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            });
            await getPersons();
        } catch (error) {
            console.log("Error: ", error);
        }
    }


    /* ------------ EFFECT FETCH -------------- */
    useEffect(() => {
        getPersons();
    }, [])

    /* ----------- RETURN -------------- */
    return <PersonContext.Provider value={{
        formValues,
        setFormValues,
        persons,
        setPersons,
        setLimit,
        createPerson
    }}>{children}</PersonContext.Provider>
}