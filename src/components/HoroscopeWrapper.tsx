import { useParams } from "react-router-dom";
import HoroscopeTemplate from "./HoroscopeTemplate";

export default function HoroscopeWrapper() {
  const { signDay } = useParams<{ signDay: string }>();

  let sign = "aries";
  let day = "today";

  if (signDay) {
    // Split the param by hyphen
    const parts = signDay.split("-");
    sign = parts[0] || "aries";
    const daySuffix = parts.slice(1).join("-"); // handles "daily-prediction" or "yesterday"
    
    // Map known suffixes to day
    const dayMap: Record<string, string> = {
      "daily-prediction": "today",
      "yesterday": "yesterday",
      "tomorrow": "tomorrow",
    };
    day = dayMap[daySuffix] || "today";
  }

  return <HoroscopeTemplate sign={sign} initialDay={day} />;
}
