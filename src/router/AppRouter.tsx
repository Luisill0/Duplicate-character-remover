import { Routes, Route, Navigate,  } from "react-router-dom"
import { useContext } from "react"
import { ReactNotifications } from "react-notifications-component";
import { UserContext } from "../context/UserContext"
import { UserProvider } from "../context/UserProvider";
import { NotificationsProvider } from "../context/NotificationProvider";
import { InputPage, CardsPage } from "../components";

const PrivateRouter = ({children}: any) => {
    const { text }: any = useContext(UserContext);
    
    if(text.length === 0) {
        return <Navigate to="/" />
    } else {
        return children
    }
}

export const AppRouter = () => {
    return (
        <NotificationsProvider>
            <UserProvider>
                <ReactNotifications/>
                <Routes>
                    <Route path="/*" element={<Navigate to="/duplicate-character-remover" />} />
                    <Route path="/duplicate-character-remover" element={<InputPage />} />
                    <Route path="/duplicate-character-remover/cards" element={<PrivateRouter> <CardsPage /> </PrivateRouter>} />
                </Routes>
            </UserProvider>
        </NotificationsProvider>
    )
}