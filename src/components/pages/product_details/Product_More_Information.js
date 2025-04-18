import React from 'react'

const Product_More_Information = (product_details_list) => {
    const product_more_information_data = product_details_list?.data?.product;
    console.log("product_more_information_data",product_more_information_data)
    return (
        <div id="gi-spt-nav-info" className="tab-single-pane">
            <div className="gi-single-pro-tab-moreinfo">
                <p
                    className="font-Poppins text-[#777] text-[14px] font-normal leading-[28px] mb-[16px]">{product_more_information_data?.description}</p>
                <ul className="pl-[24px]">
                    {/* <li
                        className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                        <span
                            className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Model</span>
                      {product_more_information_data?.sku}
                    </li> */}
                    {/* <li
                        className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                        <span
                            className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Color</span>
                        {product_more_information_data?.color?.name}
                    </li> */}
                    {/* <li
                        className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                        <span
                            className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Size</span>
                        {product_more_information_data?.size?.name}
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Product_More_Information