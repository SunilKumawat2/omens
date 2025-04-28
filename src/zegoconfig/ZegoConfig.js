import { ZegoExpressEngine } from "zego-express-engine-webrtc"; // Correct Import

const appID = parseInt(process.env.REACT_APP_ZEGO_APP_ID, 10);
const tempToken = process.env.REACT_APP_ZEGO_TEMP_TOKEN;

if (!appID || !tempToken) {
  console.error("ZegoCloud Error: Missing App ID or Token in .env");
}

// ✅ Create an instance correctly
const zego = new ZegoExpressEngine(appID, "");  

export const getZegoToken = () => tempToken; // Return the Temporary Token

export default zego;
