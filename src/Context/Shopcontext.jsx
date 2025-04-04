import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import axios, { formToJSON } from 'axios'

export const shopcontext = createContext();

const shopcontextprovider = (props) => {
    const currency = `$`;
    const delivery_fee = 10;
    const backendurl = import.meta.env.VITE_API_URL;
    // console.log(backendurl)

    
    const [search, setsearch] = useState('');
    const [showsearch, setshowsearch] = useState(false);
    const [cartitem, setcartitem] = useState({});
    const [products, setproducts] = useState([]);
    const [token, settoken] = useState('')
    const navigate = useNavigate();

    const addtocart = async (itemid, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
        let cartdata = structuredClone(cartitem);
        if (cartdata[itemid]) {
            if (cartdata[itemid][size]) {
                cartdata[itemid][size] += 1;
            } else {
                cartdata[itemid][size] = 1
            }

        } else {
            cartdata[itemid] = {};
            cartdata[itemid][size] = 1;
        }
        setcartitem(cartdata);

        if (token) {
            try {
                await axios.post(backendurl + '/api/cart/add', { itemid, size }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getcartcount = () => {
        let totalcount = 0;
        for (const items in cartitem) {
            for (const item in cartitem[items]) {
                try {
                    if (cartitem[items][item] > 0) {
                        totalcount += cartitem[items][item]
                    }
                } catch (err) {
                    toast.error(error.message);
                }
            }
        }
        return totalcount;
    };

    const updatequantity = async (itemid, size, quantity) => {
        let cartdata = structuredClone(cartitem);
        cartdata[itemid][size] = quantity;
        setcartitem(cartdata);
        if (token) {
            try {
                await axios.post(backendurl + '/api/cart/update', { itemid, size, quantity }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.message);
            }
        }
    };

    const getusercart = async (token) => {
        try {
            const response = await axios.post(backendurl + '/api/cart/get', {}, { headers: { token } })
            if (response.data.success) {
                setcartitem(response.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    const getcartamount = () => {
        let totalamount = 0;
        for (const items in cartitem) {
            let iteminfo = products.find((product) => product._id === items);
            for (const item in cartitem[items]) {
                try {
                    if (cartitem[items][item] > 0) {
                        totalamount += iteminfo.price * cartitem[items][item];
                    }
                } catch (error) {
                    toast.error(error.message);
                }
            }
        }
        return totalamount;
    }

    const getproductdata = async () => {
        try {
            const response = await axios.get(backendurl + '/api/product/list');
            if (response.data.success) {
                setproducts(response.data.products)
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getproductdata();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            settoken(localStorage.getItem('token'))
            getusercart(localStorage.getItem('token'))
        }
    })

    const value = {
        products, currency, delivery_fee,
        search, setsearch, showsearch, setshowsearch,
        cartitem, setcartitem, addtocart, getcartcount, updatequantity,
        getcartamount, navigate,
        backendurl, settoken, token
    };

    return (
        <shopcontext.Provider value={value}>
            {props.children}
        </shopcontext.Provider>
    )
}

export default shopcontextprovider






