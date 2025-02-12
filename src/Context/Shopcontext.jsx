import { createContext ,useEffect,useState } from "react";
import products from '../assets/assets.js' 
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

export const shopcontext = createContext();
 
const shopcontextprovider = (props)=>{
    const currency = `$`;
    const delivery_fee = 10;
    const [search, setsearch] = useState('');
    const [showsearch, setshowsearch] = useState(false);
    const [cartitem, setcartitem] = useState({});
    const navigate = useNavigate();

    const addtocart = async (itemid, size)=>{
        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let cartdata = structuredClone(cartitem);
        if(cartdata[itemid]){
            if(cartdata[itemid][size]){
                cartdata[itemid][size] +=1;
            }else{
                cartdata[itemid][size] = 1
            }

        }else{
            cartdata[itemid] = {};
            cartdata[itemid][size] = 1;
        }
        setcartitem(cartdata);
    }

    const getcartcount = ()=>{
        let totalcount = 0;
        for(const items in cartitem){
            for(const item in cartitem[items]){
                try{
                    if(cartitem[items][item]>0){
                        totalcount += cartitem[items][item] 
                    }
                }catch(err){

                }
            }
        }
        return totalcount;
    };

    const updatequantity = async (itemid, size, quantity)=>{
        let cartdata = structuredClone(cartitem);
        cartdata[itemid][size] = quantity; 
        setcartitem(cartdata);
    };

    const getcartamount = ()=>{
        let totalamount = 0;
        for(const items in cartitem){
            let iteminfo = products.find((product)=>product._id === items);
            for(const item in cartitem[items]){
                try{
                    if(cartitem[items][item] > 0){
                        totalamount += iteminfo.price*cartitem[items][item]; 
                    }
                }catch(error){

                }
            }
        }
        return totalamount;
    }


    const value = {
        products, currency, delivery_fee,
        search, setsearch,showsearch, setshowsearch,
        cartitem,addtocart, getcartcount,updatequantity,
        getcartamount, navigate
    };

    return (
        <shopcontext.Provider value={value}>
            {props.children}
        </shopcontext.Provider>
    )
}

export default shopcontextprovider 
 





