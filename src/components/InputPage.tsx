import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../theme/InputPage.css"

const InputPage = () => {
    const { setText }: any = useContext(UserContext);
    const [inputText, setInputText] = useState<string>('');
    const navigate = useNavigate();
    
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if(inputText.length > 0){
            setText(inputText);
            navigate('/cards');
        }
        else {
            alert('Provide a non-empty value');
        }
    }

    return(
        <div className="inputPage">
            <div className="title disable-select">
                <span><strong>String Duplicate Character Remover</strong></span>
            </div>
            <div className="stingInput">
                <form onSubmit={handleSubmit}>
                    <input className="textInput"
                            value={inputText}
                            onChange={e => setInputText(e.target.value.replace(/\s/g,''))}
                        />
                    <input className="textInputSubmit" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default InputPage;