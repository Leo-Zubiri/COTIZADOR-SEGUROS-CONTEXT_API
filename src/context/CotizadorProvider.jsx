import { createContext } from "react";

const CotizadorContext = createContext();


// Provider - la fuente de los datos
const CotizadorProvider = ({children}) => { 


    return (
        <CotizadorContext.Provider value={{}}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext;