import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ✅ Dynamic SEO component
const SEO = () => {
  const location = useLocation();
  const url = `https://astroashupandit.com${location.pathname}`;

  // Dynamic title map
  const titleMap: Record<string, string> = {
    "/": "Pandit Ashu Bahuguna | India’s Best Astrologer | Top Jyotish in North India",
    "/horoscope": "Daily Horoscope 2025 | Rashifal by Pandit Ashu Bahuguna",
    "/kundli-milan": "Kundli Milan & Matchmaking | Expert Astrologer Muzaffarnagar",
    "/store": "Buy Original Yantras, Rudraksha & Malas | Astro Store India",
    "/about": "About Pandit Ashu Bahuguna | 35+ Years Experienced Jyotish",
    "/contact": "Contact India’s Top Astrologer | Pandit Ashu Bahuguna",
    // Calculators
    "/calculator/love-compatibility": "Love Compatibility Calculator 💞 | Astro Pandit Nexus",
    "/calculator/flame-compatibility": "Flame Compatibility Calculator 🔥 | Relationship Analysis",
    "/calculator/match-making": "Match Making Calculator | Kundli & Zodiac Compatibility",
    "/calculator/lucky-number": "Lucky Number Calculator 🔢 | Find Your Auspicious Numbers",
    "/calculator/lucky-date": "Lucky Date Calculator 💫 | Best Days for Events & Auspicious Moments",
    "/calculator/lucky-color": "Lucky Color Calculator 🎨 | Discover Your Auspicious Colors",
    "/calculator/mangal-dosh": "Mangal Dosh Calculator | Remedies & Analysis",
    // Add more calculator pages as needed
  };

  // Dynamic descriptions
  const descriptionMap: Record<string, string> = {
    "/": "Get authentic astrology guidance from India’s best astrologer — Pandit Ashu Bahuguna. Kundli, Horoscope, Puja, Yantra & more. 35+ years experience.",
    "/horoscope": "Read your daily Rashifal / Horoscope by Pandit Ashu Bahuguna. Accurate predictions for all zodiac signs with expert insights.",
    "/kundli-milan": "Expert Kundli Milan & Matchmaking service by Pandit Ashu Bahuguna. Find your perfect match with astrology-based analysis.",
    "/store": "Shop authentic Yantras, Rudraksha, Malas and spiritual tools online from Astro Pandit Nexus. Trusted by thousands across India.",
    "/about": "Know about Pandit Ashu Bahuguna, India’s top astrologer with 35+ years experience in Vedic astrology, numerology, and puja services.",
    "/contact": "Get in touch with Pandit Ashu Bahuguna, India’s renowned astrologer. Consult for Horoscope, Kundli, and spiritual guidance.",
    // Calculators
    "/calculator/love-compatibility": "Check your love compatibility with our accurate Love Compatibility Calculator by Pandit Ashu Bahuguna.",
    "/calculator/flame-compatibility": "Analyze your relationship and flame compatibility with expert astrology insights.",
    "/calculator/match-making": "Perform accurate Match Making with astrology-based Kundli & zodiac analysis.",
    "/calculator/lucky-number": "Discover your Lucky Number based on your birth details with our precise astrology calculator.",
    "/calculator/lucky-date": "Find auspicious days for marriage, business, travel or puja with our Lucky Date Calculator.",
    "/calculator/lucky-color": "Reveal your Lucky Color using Vedic astrology and improve harmony in life.",
    "/calculator/mangal-dosh": "Calculate Mangal Dosh and find remedies to minimize negative effects in life.",
    // Add more descriptions as needed
  };

  // Dynamic keywords
  const keywordsMap: Record<string, string> = {
    "/": "astrology, astrologer, jyotish, kundli, horoscope, yantra, puja, pandit, India’s best astrologer, North India astrologer, Muzaffarnagar astrologer",
    "/horoscope": "daily horoscope, rashifal 2025, zodiac predictions, astrology, pandit ashu bahuguna",
    "/kundli-milan": "kundli milan, match making, astrology matchmaking, horoscope compatibility, pandit ashu bahuguna",
    "/store": "yantra, rudraksha, malas, spiritual tools, buy yantra online, pandit ashu bahuguna store",
    "/about": "about astrologer, pandit ashu bahuguna, top jyotish, North India astrologer, astrology expert",
    "/contact": "contact astrologer, astrology consultation, pandit ashu bahuguna, horoscope help",
    // Calculators
    "/calculator/love-compatibility": "love compatibility calculator, relationship astrology, zodiac love match, kundli love, pandit ashu bahuguna",
    "/calculator/flame-compatibility": "flame compatibility, relationship astrology, zodiac analysis, kundli flame match",
    "/calculator/match-making": "match making calculator, kundli matching, horoscope compatibility, pandit ashu bahuguna",
    "/calculator/lucky-number": "lucky number, numerology, astrology calculator, auspicious numbers, kundli numerology",
    "/calculator/lucky-date": "lucky date, auspicious day, muhurat, astrology date, pandit ashu bahuguna",
    "/calculator/lucky-color": "lucky color, auspicious colors, astrology color analysis, pandit ashu bahuguna",
    "/calculator/mangal-dosh": "mangal dosh, astrology remedies, kundli mangal dosh, pandit ashu bahuguna",
    // Add more keywords per page
  };

  const title = titleMap[location.pathname] || "Pandit Ashu Bahuguna - Expert Astrologer in India";
  const description = descriptionMap[location.pathname] || "Get accurate astrology guidance from Pandit Ashu Bahuguna – India’s top astrologer for Horoscope, Kundli, Puja, and spiritual services.";
  const keywords = keywordsMap[location.pathname] || "astrology, astrologer, jyotish, kundli, horoscope, yantra, puja, pandit";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
