import useSEO from "@/hooks/useSEO";
import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";

const UnluckyDate = () => {
  useSEO(
    "Unlucky Dates Calculator ⚠️ | अशुभ तिथियाँ | Avoid Inauspicious Days",
    "Discover which dates might not favor your energy. Avoid inauspicious timings and plan your activities wisely."
  );

  return (
    <>
      <main className="min-h-[80vh]">
        <SingleCalculatorTemplate
          title="Unlucky Dates Calculator ⚠️"
          prompt="Discover which dates might not favor your energy. Avoid inauspicious timings and plan your activities wisely."
        />
      </main>
    </>
  );
};

export default UnluckyDate;
