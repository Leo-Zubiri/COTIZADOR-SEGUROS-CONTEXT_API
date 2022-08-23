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

---

# **Context API**

## 1. Crear context y provider

El provider es un componente que puede proporcionar funciones, variables y state a los componentes hijos. El context es lo que identifica a distintas porciones unas de otras.

```js

import {createContext,useState} from 'react'

const MiContext = createContext();

const MiProvider = ({children}) => {

  const numero = 10;
  const miFn = () => {}
  const [state,setState] = useState({datos:[],headers:{}});

  return (
        <CotizadorContext.Provider value={{
          numero,miFn,state,setState
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}
```

## 2. Envolver a los componentes con el provider

Se importa el provider y entre estas etiquetas se colocan los componentes que tendrán acceso al contexto.

```js
import App	 from "./components/App"

import {MiProvider} from './context/MiProvider'

function App() {

  return (
    <MiProvider>
      <App  />
    </MiProvider>
  )
}

export default App
```

![](documentation/2.png)

## 3. Importar el contexto
Desde los componentes envueltos por el provider para acceder al context.
Para usar determinado context se utiliza el hook ```useContext();```

```js
import MiContext from '../context/MiContext'

// Se obtienen las partes que se necesiten
const {numero,miFn,state,setState} = useContext(MiContext);
```
