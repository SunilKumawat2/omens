export const sendCallInvitation = async (callerID, receiverID) => {
    try {
        const invitees = [receiverID];
        const config = { timeout: 60 }; // Call invitation timeout (seconds)

        const { callID } = await zim.callInvite(invitees, config);

        console.log("Call Invitation Sent:", callID);
    } catch (error) {
        console.error("Call Invitation Failed:", error);
    }
};
