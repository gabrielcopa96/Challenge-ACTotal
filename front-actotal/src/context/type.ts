import type { Dispatch, ReactNode, SetStateAction } from "react";

// interface for ContextProvider
export interface ContextProps {
    children: ReactNode;
}

// type for Person
export type PersonType = {
    id: number,
    name: string,
    phone: number,
    email: string,
    createdAt: Date,
    updatedAt: Date
}

// type for FormValues
export type FormValuesType = {
    name: string,
    phone: string | number,
    email: string
}

// type for Errors
export type ErrorType = {
    [key: string]: boolean
}

// type for Context Value
export type ValueContextType = {
    formValues: FormValuesType,
    setFormValues: Dispatch<SetStateAction<FormValuesType>>,
    persons: PersonType[],
    setPersons: Dispatch<SetStateAction<PersonType[]>>,
    createPerson: (person: any) => Promise<void>;
    errors: ErrorType
    setErrors: Dispatch<SetStateAction<ErrorType>>,
    setPage: Dispatch<SetStateAction<number>>,
    page: number,
    totalPages: number | null,
    isLoading: boolean,
}