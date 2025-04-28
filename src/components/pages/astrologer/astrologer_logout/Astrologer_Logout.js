import React, { useState } from "react";
import { User_Authentication } from "../../../../user_authentication/User_Authentication";
import { logout } from "../../../../api/auth_api/Auth_Api";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../../../loader/Loader";

const Astrologer_Logout = () => {
  const [is_loading, setis_loading] = useState(false);
  const navigate = useNavigate();

  // <------ Handle logout functionliy here ---------->
  const handle_logout = async () => {
    try {
      const token = User_Authentication();
      if (!token) {
        setis_loading(false);
        toast("token not found's");
        throw new Error("User token not found");
      }
      const response = await logout({ Authorization: `Bearer ${token}` });
      if (response?.data?.status == "200") {
        localStorage.clear();
        navigate("/astrologer-login")
      }
      console.log("response", response);
    } catch (error) {
      navigate("/astrologer-login")
      console.log("error", error);
    }
  };

  return;

            <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm text-red-700 hover:bg-gray-100"
            role="menuitem"
            onClick={handle_logout}
          >
            Sign out
          </button>
       
};

export default Astrologer_Logout;
