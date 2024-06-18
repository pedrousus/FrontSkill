import { useState } from "react";

export default function FormInput(props){
    const [focused, setFocused] = useState(false);
    const {label,id, errorMessage, onChange, ...inputProps} = props;

    const handleFocus = (e) =>{
        setFocused(true);
    };

    return(
        <>
            <label>{label}</label>
            <input 
                {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocus} 
                onFocus={()=>
                    inputProps.name==="confirmarcontra" && setFocused(true)
                }
                focus={focused.toString()}
            />
            <span focus={focused.toString()}>{errorMessage}</span>
        </>
    )
} 