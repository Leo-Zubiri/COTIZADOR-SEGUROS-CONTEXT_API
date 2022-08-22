Links

1. SET UP tailwind
2. tailwind css
npm i tailwindcss postcss autoprefixer
npx tailwindcss init -p
  content: ['index.html','./src/**/*.jsx'],

![](documentation/1.png)

# Date.getFullYear
Retorna el año actual
```const YEARMAX = new Date().getFullYear();```

# Array.from
Hace un arreglo de 20 elementos
```export const YEARS = Array.from(new Array(20), (valor,index) => YEARMAX-index)```

# Context
Dentro del directorio context crear un CotizadorProvider.jsx:

```JS
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
```

**Desde App.jsx importar el provider**
El provider rodea la aplicación a la cual provee el contexto

```js
import AppSeguro	 from "./components/AppSeguro"

import {CotizadorProvider} from './context/CotizadorProvider'

function App() {

  return (
    <CotizadorProvider>
    <AppSeguro />
    </CotizadorProvider>
  )
}

export default App

```

![](documentation/2.png)