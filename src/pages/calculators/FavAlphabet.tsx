import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import useSEO from "@/hooks/useSEO";

const FavAlphabet = () => {
  useSEO(
    "Lucky Alphabet Finder 🔠 | भाग्यशाली अक्षर कैलकुलेटर | Name Letter Astrology",
    "Find your lucky alphabet based on numerology. भाग्यशाली अक्षर से जानें कौन से नाम आपके लिए शुभ हैं।"
  );

  return (
    <div className="min-h-screen bg-background">
    
      <SingleCalculatorTemplate
        title="Lucky Color Calculator 🎨"
        prompt="Discover your favourite or favourable alphabet based on astrological influences to enhance positivity, luck, and success in your life."
      />
    </div>
  );
};

export default FavAlphabet;
