import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface ContextProps {
    children: ReactNode;
}

export type PersonType = {
    id: number,
    name: string,
    phone: number,
    email: string,
    createdAt: Date,
    updatedAt: Date
}

export type FormValuesType = {
    name: string,
    phone: string | number,
    email: string
}

export type ErrorType = {
    [key: string]: boolean
}

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
}