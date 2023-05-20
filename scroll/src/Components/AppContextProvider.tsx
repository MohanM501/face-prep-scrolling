
import React,{createContext,useState} from 'react';


type ContextType={
    auth:boolean,
    changeAuth:()=>void,
    
}

export const AppContext= createContext<ContextType|null>(null);



const AppContextProvider: React.FC =({children}:React.PropsWithChildren<{}>) => {
    
    const [auth,setAuth]=useState<boolean>(false);
    const changeAuth=()=>{
        setAuth(!auth);
    }
    return(
        <AppContext.Provider value={{auth,changeAuth}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
