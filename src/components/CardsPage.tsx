import { FC, useContext, useEffect, useState } from "react";
import { UserContext, AppContext } from "../context/UserContext";
import { RiDeleteBinFill } from "react-icons/ri"
import { ColorPalette, getPalette } from "../colors/Colors";
import { useNavigate } from "react-router-dom";
import { NotificationContext, NotisContext } from "../context/NotificationContext";
import "../theme/CardsPage.css";

const getNUnique = (array: string[]): Number => {
    return (new Set(array)).size;
}

const CardsPage = () => {
    const { text } = useContext(UserContext) as AppContext;
    const { showSuccessMessage } = useContext(NotificationContext) as NotisContext;
    const [characters, updateChars] = useState<string[]>(text.split(''))
    const [ palette ] = useState<ColorPalette>(() => getPalette(characters));
    const [success, setSuccess] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(characters.length === getNUnique(characters)){
            setSuccess(true);
            showSuccessMessage();
        }
    },[characters, showSuccessMessage]);

    const removeChars = (key: string) => {
        const parseKey = (key:string): [string, number] => {
            let fullKey = key.split("-");
            const char = fullKey[0];
            const index = Number(fullKey[1]);

            return [char, index];
        }
        const [char, index] = parseKey(key);
        let newArr: string[] = []
        for(let i = 0; i < characters.length; i++) {
            if(characters[i] !== char || i === index){
                newArr.push(characters[i]);
            }
        }
        updateChars(newArr);
    }
    
    const goBack = () => {
        navigate('/');
    }
    
    return(
        palette &&
        <div className="pageContainer disable-select">
            <div className="header">
                <div className="back" onClick={goBack}>
                    <span>{'<- Go Back'}</span>
                </div>
                <ResultantString showSuccess={success} originalString={text} resultantString={characters.join('')}/>
            </div>
            <div className="cardsContainer">
                {characters.map((char, index) => 
                    <div 
                        className="card" id={index.toString()} key={`${char}-${index}`}
                        style={{backgroundColor: `#${palette[char]}`}}
                    >
                        <div className="delete" onClick={() => removeChars(`${char}-${index}`)}> 
                            <RiDeleteBinFill/>
                        </div>
                        <span>{char}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

type ResultantStringComponent = { 
    showSuccess: boolean;
    originalString: string;
    resultantString: string;
};
const ResultantString: FC<ResultantStringComponent> = ({ showSuccess, originalString, resultantString }) => {
    if(showSuccess){
        return (
            <div className="strings">
                <div>
                    <span className="stringOG">
                        Original String: {originalString}
                    </span>
                </div>
                <div>
                    <span className="stringRes">
                        Resultant String: {resultantString}
                    </span>
                </div>
            </div>
        )
    }else {
        return <div style={{width: '100px', height: '20px' }}></div>
    }
}

export default CardsPage;