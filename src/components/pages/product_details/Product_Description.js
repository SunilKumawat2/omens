import React from 'react'

const Product_Description = (product_details_list) => {
    const product_description_data = product_details_list?.data?.product
    console.log("Product_Description", product_details_list?.data?.
        product)
    return (
        <div id="gi-spt-nav-details" className="tab-single-pane">
            <div className="gi-single-pro-tab-desc py-5">
                <h2 className="text-2xl font-bold">Product Details</h2>
                {/* <p
                    className="mb-[15px] text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal">
                    Natural Emerald weighing 5.81 carat In Octagonal shape.</p> */}
                <table>
                    <ul className="detailsinfo grid grid-cols-2">
                        {
                            product_description_data?.category?.title && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Gemstone</span>
                                    {product_description_data?.category?.title}
                                </li>
                            )
                        }
                        {
                            product_description_data?.certificate?.name && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Certification</span>
                                    {product_description_data?.certificate?.name}
                                </li>
                            )
                        }
                        {
                            product_description_data?.composition != null && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Composition</span>
                                    {product_description_data?.composition}
                                </li>
                            )
                        }
                        {
                            product_description_data?.return_policy != null && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Return
                                        Policy</span>
                                    {product_description_data?.return_policy}
                                </li>
                            )
                        }
                        {
                            product_description_data?.treatment?.name && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Treatment</span>
                                    {product_description_data?.treatment?.name}
                                </li>
                            )
                        }
                        {
                            product_description_data?.shape?.name && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Shape</span>
                                    {product_description_data?.shape?.name}
                                </li>
                            )
                        }
                        {
                            product_description_data?.origin?.name && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Origin</span>
                                    {product_description_data?.origin?.name}
                                </li>
                            )
                        }
                        {
                            product_description_data?.cut && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Cut</span>
                                    {product_description_data?.cut}
                                </li>
                            )
                        }
                        {
                            product_description_data?.color?.name && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Colour</span>
                                    {product_description_data?.color?.name}
                                </li>
                            )
                        }

                        {/* <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Shape</span>
                            {product_description_data?.shape?.name}
                        </li> */}
                        {
                            product_description_data?.sku && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">SKU</span>
                                    {product_description_data?.sku}
                                </li>
                            )
                        }

                        {
                            product_description_data?.size?.name && (
                                <li
                                    className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                                    <span
                                        className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Size</span>
                                    {product_description_data?.size?.name}
                                </li>
                            )
                        }

                        {/* <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Weight
                                (ratti)</span>
                            5.66
                        </li> */}
                        {/* <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Dimension
                                Type
                            </span>
                            Not Calibrated

                        </li> */}
                        {/* <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Weight
                                (carat)
                            </span>
                            5.81

                        </li> */}
                        {/* <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Exact
                                Dimensions
                            </span>
                            13.46x9.34x5.30 mm

                        </li> */}
                        {/* <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Refractive
                                Index
                            </span>
                            1.580 - 1.590

                        </li> */}
                    </ul>
                </table>
            </div>
            {/*  */}
            {/* <div id="gi-spt-nav-info" className="tab-single-pane">
                <div className="gi-single-pro-tab-moreinfo">
                    <p
                        className="font-Poppins text-[#777] text-[14px] font-normal leading-[28px] mb-[16px]" dangerouslySetInnerHTML={{ __html: product_description_data?.description }} />
                     <ul className="pl-[24px]">
                        <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Model</span>
                            {product_description_data?.sku}
                        </li>
                        <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Color</span>
                            {product_description_data?.color?.name}
                        </li>
                        <li
                            className="list-disc text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6]">
                            <span
                                className="mr-[25px] min-w-[150px] text-[15px] text-[#0F1726] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">Size</span>
                            {product_description_data?.size?.name}
                        </li>
                    </ul> 
                </div>
            </div> */}
        </div>
    )
}

export default Product_Description