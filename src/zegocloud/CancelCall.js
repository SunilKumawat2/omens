export const cancelCall = async (callID, receiverID) => {
    try {
        await zim.callCancel([receiverID], callID);
        console.log("Call Cancelled:", callID);
    } catch (error) {
        console.error("Call Cancel Failed:", error);
    }
};
