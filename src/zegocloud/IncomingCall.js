import { useEffect, useState } from "react";
import { zim } from "./ZegoService";
import { acceptCall, rejectCall } from "./CallService";

const IncomingCall = () => {
    const [callInfo, setCallInfo] = useState(null);

    useEffect(() => {
        zim.on('callInvitationReceived', (zim, { callID, inviter }) => {
            console.log("📞 Incoming call from:", inviter);
            setCallInfo({ callID, inviter });
        });

        return () => {
            zim.off('callInvitationReceived');
        };
    }, []);

    return (
        callInfo && (
            <div>
                <h3>📞 Incoming Call from {callInfo.inviter}</h3>
                <button onClick={() => acceptCall(callInfo.callID)}>✅ Accept</button>
                <button onClick={() => rejectCall(callInfo.callID)}>❌ Reject</button>
            </div>
        )
    );
};

export default IncomingCall;
