import { NotificationContext } from "./NotificationContext";
import { Store } from 'react-notifications-component'
import "react-notifications-component/dist/theme.css";
import "animate.css";

export const NotificationsProvider = ({children}: any) => {
    const showSuccessMessage = ():void => {
        Store.addNotification({
            title: "Success",
            message: "All duplicates are removed",
            type: "success",
            insert: "top",
            container: "top-full",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

    return (
        <NotificationContext.Provider value={{ showSuccessMessage }}>
            {children}
        </NotificationContext.Provider>
    )
}