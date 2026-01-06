import axios from "axios";

const botToke = "8562855826:AAE-o0ePHaVt3CNxJwMxTCb6bbIExUGR10g";
const CHAT_ID = "-1003186532618";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${botToke}/sendMessage`;

export const sendDataBot = async (message: string) => {
  try {
    await axios.post(TELEGRAM_API_URL, {
      chat_id: CHAT_ID,
      text: `<pre>${message}</pre>`,
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  } finally {
    return null;
  }
};
