import { createContext, useEffect, useState } from "react";

// import types and interfaces
import type { ContextProps, ErrorType, FormValuesType, PersonType, ValueContextType } from "./type";

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

    const [errors, setErrors] = useState<ErrorType>({
        name: false,
        phone: false,
        email: false,
        create: false
    });

    const [page, setPage] = useState<number>(1);

    const [totalPages, setTotalPages] = useState(null);

    const [limit, setLimit] = useState<number>(8);

    const [persons, setPersons] = useState<PersonType | any>([]);


    /* ------------ SERVICE FETCH -------------- */
    const getPersons = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/person?limit=${limit}&page=${page}`, { cache: 'no-store' });
        const { data, total_pages } = await response.json();
        setTotalPages(total_pages);
        setPersons(data);
    }


    const createPerson = async (person: any) => {

        try {
            // convert number phone
            const response = await fetch(`${import.meta.env.VITE_API_URL}/person/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            });
            if (response.status === 201) {
                await getPersons();
                setFormValues({
                    name: '',
                    phone: '',
                    email: '',
                });
                setErrors({
                    ...errors,
                    create: false
                })
            }
            else if (response.status === 400 && (formValues.email && formValues.name && formValues.phone)) {
                setErrors({
                    ...errors,
                    create: true,
                })
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }


    /* ------------ EFFECT FETCH -------------- */
    useEffect(() => {
        (async () => {
            await getPersons();
        })()
    }, [page])

    /* ----------- RETURN -------------- */
    return <PersonContext.Provider value={{
        formValues,
        setFormValues,
        persons,
        setPersons,
        createPerson,
        errors,
        setErrors,
        setPage,
        page,
        totalPages
    }}>{children}</PersonContext.Provider>
}