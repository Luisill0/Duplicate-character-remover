import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({children}:any) => {
    const [text, setText] = useState<string>('');

    const provider = {
        text,
        setText
    }

    return (
        <UserContext.Provider value={provider}>
            {children}
        </UserContext.Provider>
    )
}