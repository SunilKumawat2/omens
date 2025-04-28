import React, { useEffect, useState } from 'react'
import { get_return_policy } from '../../../api/category_product/Category_Product'

const Product_Details_Policy = () => {
    const [return_policy, set_Return_Policy] = useState({})

    useEffect(() => {
        const handle_get_return_policy = async () => {
            try {
                const response = await get_return_policy()
                set_Return_Policy(response?.data?.data)
            }
            catch (error) {
                console.log("error", error)
            }
        }
        handle_get_return_policy();
    }, [])
    return (
        <div>
            <p
                className="font-Poppins text-[#777] text-[14px] font-normal leading-[28px] mb-[16px]" dangerouslySetInnerHTML={{ __html: product_details_list?.product?.description }} />
        </div>
    )
}

export default Product_Details_Policy
