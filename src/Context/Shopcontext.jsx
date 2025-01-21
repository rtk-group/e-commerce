import { createContext ,useState } from "react";
import products from '../assets/assets.js' 

export const shopcontext = createContext();
 
const shopcontextprovider = (props)=>{
    const currency = `$`;
    const delivery_fee = 10;
    const [search, setsearch] = useState('');
    const [showsearch, setshowsearch] = useState(false)

    const value = {
        products, currency, delivery_fee,
        search, setsearch,showsearch, setshowsearch
    };

    return (
        <shopcontext.Provider value={value}>
            {props.children}
        </shopcontext.Provider>
    )
}

export default shopcontextprovider 
 
