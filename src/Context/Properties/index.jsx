import { createContext, useReducer } from "react";
import { reducer } from "./reducer";


const PropertiesContext = createContext();


const PropertiesProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer, [] );
    return<PropertiesContext value={[state,dispatch]}>
        {children}
        </PropertiesContext>
}

export default PropertiesProvider; 