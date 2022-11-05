
import PropertiesProvider from "./Properties";


const RootContext=({children})=>{
    return(<div>
        <PropertiesProvider>
        {children}
        </PropertiesProvider>
        </div>
)}

export default RootContext; 