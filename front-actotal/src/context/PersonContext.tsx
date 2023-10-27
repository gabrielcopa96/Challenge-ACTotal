import { createContext, useEffect, useState } from "react";

// import types and interfaces
import type { ContextProps, ErrorType, FormValuesType, PersonType, ValueContextType } from "./type";

// context
export const PersonContext = createContext({} as ValueContextType);

// provider
export const PersonContextProvider = ({ children }: ContextProps) => {

    /* ----------- STATES -------------- */
    // form value status
    const [formValues, setFormValues] = useState<FormValuesType>({
        name: '',
        phone: '',
        email: '',
    });
    // error states
    const [errors, setErrors] = useState<ErrorType>({
        name: false,
        phone: false,
        email: false,
        create: false
    });

    // state pagination
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState(null);
    const [limit] = useState<number>(8);

    // state loading
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // state list person or data
    const [persons, setPersons] = useState<PersonType | any>([]);


    /* ------------ SERVICE FETCH -------------- */
    //function to obtain all data or persons
    const getPersons = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/person?limit=${limit}&page=${page}`, { cache: 'no-store' });
        const { data, total_pages } = await response.json();
        setTotalPages(total_pages);
        setPersons(data);
    }

    // function to create a new data
    const createPerson = async (person: any) => {

        try {
            // set isLoading = true
            setIsLoading(true);
            // convert number phone
            const response = await fetch(`${import.meta.env.VITE_API_URL}/person/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            });
            // if the status of the response is 201 - created, 
            // I make a request to get all the data again so 
            // I get the new data and set the inputs to empty and the errors all to false
            if (response.status === 201) {
                await getPersons();
                setIsLoading(false);
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
            // if the status of the response is 400, 
            // I change the error from create to true to display the error message
            else if (response.status === 400 && (formValues.email && formValues.name && formValues.phone)) {
                setIsLoading(false);
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
        setIsLoading(true);
        (async () => {
            await getPersons();
            setIsLoading(false);
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
        totalPages,
        isLoading
    }}>{children}</PersonContext.Provider>
}