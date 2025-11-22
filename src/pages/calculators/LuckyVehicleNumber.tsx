import LuckyCalculatorTemplate from "./templates/LuckyCalculatorTemplate";

import useSEO from "@/hooks/useSEO";

const LuckyVehicleNumber = () => {
  useSEO(
    "Lucky Vehicle Number 🚗 | भाग्यशाली वाहन नंबर | Vehicle Numerology Checker",
    "Check if your vehicle number is lucky. जानें आपका वाहन नंबर शुभ है या नहीं। Discover vehicle numerology insights."
  );

  return (
    <div className="min-h-screen bg-background">
     
      <LuckyCalculatorTemplate type="lucky-vehicle-number" />
  
    </div>
  );
};

export default LuckyVehicleNumber;
