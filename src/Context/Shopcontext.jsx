import { createContext } from "react";
import products from '../assets/assets.js' 

export const shopcontext = createContext();
 
const shopcontextprovider = (props)=>{
    const currency = `$`;
    const delivery_fee = 10;
    const value = {
        products, currency, delivery_fee
    };
    return (
        <shopcontext.Provider value={value}>
            {props.children}
        </shopcontext.Provider>
    )
}

export default shopcontextprovider ;