import { createContext, useContext } from "react";

const CotizadorContext = createContext();

import { useState } from "react";

// Provider - la fuente de los datos
const CotizadorProvider = ({children}) => { 

    const [modal, setModal] = useState(false);

    const cambiarState = () => {
        setModal(!modal);
    }
    return (
        <CotizadorContext.Provider value={{
            cambiarState,modal
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext;