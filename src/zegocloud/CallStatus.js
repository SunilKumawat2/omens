import { useEffect } from "react";
import { zim } from "./ZegoService";

const CallStatus = () => {
    useEffect(() => {
        zim.on("callUserStateChanged", (zim, info) => {
            console.log("Call state changed:", info);

            info.callUserList.forEach(({ userID, state }) => {
                if (state === 1) {
                    console.log(`${userID} accepted the call.`);
                } else if (state === 2) {
                    console.log(`${userID} rejected the call.`);
                } else if (state === 6) {
                    console.log(`Call invitation to ${userID} timed out.`);
                }
            });
        });

        return () => {
            zim.off("callUserStateChanged");
        };
    }, []);

    return null;
};

export default CallStatus;
