

// <-------- get the Active User's token here -------------->
export const User_Authentication = () => {
    return localStorage.getItem("user_token") || null;
}
