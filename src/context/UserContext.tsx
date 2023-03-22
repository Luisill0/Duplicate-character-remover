import { createContext } from "react"

export interface AppContext {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<AppContext | null>(null);