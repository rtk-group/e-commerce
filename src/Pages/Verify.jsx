import React, { useContext, useEffect } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {

    const { navigate, token, setcartitem, backendurl } = useContext(shopcontext);
    const [searchparams, setsearchparams] = useSearchParams()

    const success = searchparams.get('success')
    const orderid = searchparams.get('orderid')

    const verifypayment = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(backendurl + '/api/order/verifystripe', { success, orderid }, { headers: { token } })

            if (response.data.success) {
                setcartitem({})
                navigate('/orders')
            } else {
                navigate('/cart')
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifypayment()
    }, [token])

    return (
        <div>
            verify
        </div>
    )
}

export default Verify