import React, { useEffect, useState } from 'react'
import Freedelivery from "../../../assets/img/app/transport.png"
import Returnorder from "../../../assets/img/app/return-box.png"
import Cardpayment from '../../../assets/img/app/card.png'
import Support from '../../../assets/img/app/24-hours-support.png'
import { get_return_policy } from '../../../api/category_product/Category_Product'
const Product_Return_Policy = () => {
    const [get_return_policy_list, set_Return_Policy_List] = useState();

    useEffect(() => {
        const handle_get_return_policy = async () => {
            try {
                const response = await get_return_policy();
                set_Return_Policy_List(response?.data?.data);
            }
            catch (error) {
                console.log("error", error)
            }
        }
        handle_get_return_policy();
    }, [])
    return (
        <div>
            {/* <div class="w-[50%] mt-[25px] mb-[-12px]">
                <div
                    className="grid md:grid-cols-1 mb-5 gap-3 border p-4 bg-gray-100 rounded space-y-3"
                    dangerouslySetInnerHTML={{ __html: get_return_policy_list?.description }}
                />
            </div> */}
            <section className="gi-deal-section py-[40px] max-[767px]:py-[30px]">
                <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                        <div className="gi-deal-section w-full">
                            <div
                                className="grid md:grid-cols-1 mb-5 gap-3 border p-4 bg-gray-100 rounded space-y-3"
                                dangerouslySetInnerHTML={{ __html: get_return_policy_list?.description }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Product_Return_Policy
