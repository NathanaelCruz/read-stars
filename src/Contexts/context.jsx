import { createContext } from "react"

export const ContextReadStars = createContext()

const ProviderReadStars = ({children}) => {
    return (<ContextReadStars.Provider value={{}}>
        {children}
    </ContextReadStars.Provider>)
}

export default ProviderReadStars