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
    phone: string,
    email: string
}

export type ValueContextType = {
    formValues: FormValuesType,
    setFormValues: Dispatch<SetStateAction<FormValuesType>>,
    persons: PersonType[],
    setPersons: Dispatch<SetStateAction<PersonType[]>>,
    setLimit: Dispatch<SetStateAction<number>>,
    createPerson: (person: any) => Promise<void>;
}