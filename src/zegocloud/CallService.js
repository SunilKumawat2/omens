import { zim } from "./ZegoService";

// 📞 Send Call Invitation
export const sendCallInvitation = async (receiverID) => {
    try {
        const invitees = [receiverID];
        const config = { timeout: 60 }; // Call expires in 60 seconds

        const { callID } = await zim.callInvite(invitees, config);
        console.log("📞 Call invitation sent:", callID);
    } catch (error) {
        console.error("❌ Call invitation failed:", error);
    }
};

// ✅ Accept Call Invitation
export const acceptCall = async (callID) => {
    try {
        await zim.callAccept(callID);
        console.log("✅ Call accepted:", callID);
    } catch (error) {
        console.error("❌ Call acceptance failed:", error);
    }
};

// ❌ Reject Call Invitation
export const rejectCall = async (callID) => {
    try {
        await zim.callReject(callID);
        console.log("❌ Call rejected:", callID);
    } catch (error) {
        console.error("❌ Call rejection failed:", error);
    }
};

// ❌ Cancel Call Invitation
export const cancelCall = async (callID, receiverID) => {
    try {
        await zim.callCancel([receiverID], callID);
        console.log("🚫 Call cancelled:", callID);
    } catch (error) {
        console.error("❌ Call cancellation failed:", error);
    }
};
