import React,{useState} from 'react'
import { Coupan_Code } from '../../../api/category_product/Category_Product';
import { User_Authentication } from '../../../user_authentication/User_Authentication';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Apply_Coupan_Code = ({ onCoupanApply }) => {
    const [is_loading, set_Is_Loading] = useState(false)
    const [apply_coupan_code, set_Apply_Coupan_Code] = useState("");
    // <---------- Apply Coupan code -------------->
    const Handle_Coupan_Code = async (e) => {
        e.preventDefault();
        const data = {
            coupan_code: apply_coupan_code
        }
        try {
            const token = User_Authentication();
            if (!token) {
                set_Is_Loading(false);
                throw new Error("User token not found");
            }
            const response = await Coupan_Code(data, { Authorization: `Bearer ${token}` })
            if (response?.data?.status == "200") {
                console.log("response", response)
                onCoupanApply(response?.data?.data);
                set_Apply_Coupan_Code("")
            }
            else if (response?.response?.data?.status == false) {
                toast(response?.response?.data?.message)
            }
        }
        catch (error) {
            console.log("error", error)
        }
    }
    return (
        <div className="gi-sidebar-wrap p-[15px] shadow-xl mb-[20px]">
                  {/* <-------- ToastContainer ------------> */}
                  <ToastContainer style={{ marginTop: "120px" }} />
            <div className="flex justify-between items-center">
                <span className="text-left text-[#A6A6A6] text-[15px] leading-[24px] tracking-[0]">Offer Code</span>
                <span className="text-right text-[#9F2225] text-[14px] leading-[24px] font-medium"><a className="gi-cart-coupan">Apply Coupan</a></span>
            </div>
            <div className="gi-cart-coupan-content mt-3">
                <form className="gi-cart-coupan-form flex gap-4" name="gi-cart-coupan-form" method="post" action="#" onSubmit={Handle_Coupan_Code}>
                    <input className="gi-coupan inline-block align-top leading-[35px] h-[40px] text-[#777] text-[14px] w-[80%] border-[1px] border-solid border-[#eee] bg-transparent text-left px-[10px] tracking-[0.5px] outline-[0] rounded-[0px]" type="text" required="" placeholder="Enter Your Coupan Code"
                        name="coupan_code" value={apply_coupan_code} onChange={(e) => set_Apply_Coupan_Code(e.target.value)} />
                    <button type="submit" className="gi-btn-2 transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative py-[10px] max-[767px]:py-[6px] px-[15px] max-[767px]:px-[10px] bg-[#9F2225] text-[#fff]  text-[14px] max-[767px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#4b5966] hover:text-[#fff]" name="subscribe" value="">Apply</button>
                </form>
            </div>
        </div>
    )
}

export default Apply_Coupan_Code