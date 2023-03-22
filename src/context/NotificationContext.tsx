import { createContext } from "react";

export interface NotisContext {
    showSuccessMessage: () => void;
}

export const NotificationContext = createContext<NotisContext | null>(null);