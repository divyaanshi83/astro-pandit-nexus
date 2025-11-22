import useSEO from "@/hooks/useSEO";
import LuckyCalculatorTemplate from "./templates/LuckyCalculatorTemplate";


export default function LuckyNumber() {
  useSEO(
    "Lucky Number 🔢 | भाग्यशाली नंबर | Numerology Number Checker",
    "Discover your lucky number based on your name and birth details. जानें आपका भाग्यशाली नंबर और Numerology insights।"
  );

  return (
    <>
      <main className="min-h-[80vh]">
        <LuckyCalculatorTemplate type="lucky-number" />
      </main>
    </>
  );
}
