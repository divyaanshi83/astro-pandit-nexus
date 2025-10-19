import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";

// ✅ All images now come from src/assets/
import diwaliImage from "@/assets/diwali.jpg";
import dhanterasImage from "@/assets/dhanteras.jpg";
import narakchaturdashiImage from "@/assets/narakchaturdashi.jpg";
import govardhanpujaImage from "@/assets/govardhanpuja.jpg";
import chhathpujaImage from "@/assets/chhathpuja.jpg";
import dussehraImage from "@/assets/dussehra.jpg";
import navratriImage from "@/assets/navratri.jpg";
import durgapujaImage from "@/assets/durgapuja.jpg";
import ramnavamiImage from "@/assets/ramnavami.jpg";
import janmashtamiImage from "@/assets/janmashtami.jpg";
import krishnajanmashtamiImage from "@/assets/krishnajanmashtami.jpg";
import mahashivratriImage from "@/assets/mahashivratri.jpg";
import ganeshchaturthiImage from "@/assets/ganeshchaturthi.jpg";
import rakshabandhanImage from "@/assets/rakshabandhan.jpg";
import lohriImage from "@/assets/lohri.jpg";
import makarsankrantiImage from "@/assets/makarsankranti.jpg";
import basantpanchamiImage from "@/assets/basantpanchami.jpg";
import karvachauthImage from "@/assets/karvachauth.jpg";
import bhaidoojImage from "@/assets/bhaidooj.jpg";
import hartalikateejImage from "@/assets/hartalikateej.jpg";
import hanumanjayantiImage from "@/assets/hanumanjayanti.jpg";
import nagpanchamiImage from "@/assets/nagpanchami.jpg";
import akshaytritiyaImage from "@/assets/akshaytritiya.jpg";
import gurupurnimaImage from "@/assets/gurupurnima.jpg";
import shravanmondayImage from "@/assets/shravanmonday.jpg";
import gudipadwaImage from "@/assets/gudipadwa.jpg";
import onamImage from "@/assets/onam.jpg";
import pongalImage from "@/assets/pongal.jpg";
import anantchaturdashiImage from "@/assets/anantchaturdashi.jpg";
import christmasImage from "@/assets/christmas.jpg";
import newyearImage from "@/assets/newyear.jpg";

interface Festival {
  id: string;
  name: string;
  localName: string;
  description: string;
  image: string;
}

const festivals: Festival[] = [
  { id: "diwali", name: "Deepāvali", localName: "दीपावली", description: "Festival of Lights celebrating prosperity and victory of good over evil.", image: diwaliImage },
  { id: "dhanteras", name: "Dhanteras", localName: "धनतेरस", description: "First day of Diwali festival, dedicated to wealth and health.", image: dhanterasImage },
  { id: "narakchaturdashi", name: "Naraka Chaturdaśī", localName: "नरक चतुर्दशी", description: "Celebrates Lord Krishna's victory over the demon Narakasura.", image: narakchaturdashiImage },
  { id: "govardhanpuja", name: "Govardhan Pūjā", localName: "गोवर्धन पूजा", description: "Marks Lord Krishna’s lifting of Govardhan Hill to protect villagers.", image: govardhanpujaImage },
  { id: "chhathpuja", name: "Chhath Pūjā", localName: "छठ पूजा", description: "Dedicated to the Sun God and Chhathi Maiya, celebrated with fasting.", image: chhathpujaImage },
  { id: "dussehra", name: "Vijayadaśamī (Dussehra)", localName: "दशहरा", description: "Symbolizes the victory of Lord Rama over Ravana.", image: dussehraImage },
  { id: "navratri", name: "Navarātri", localName: "नवरात्रि", description: "Nine nights honoring Goddess Durga and her forms.", image: navratriImage },
  { id: "durgapuja", name: "Durgā Pūjā", localName: "दुर्गा पूजा", description: "Worship of Goddess Durga marking her victory over Mahishasura.", image: durgapujaImage },
  { id: "ramnavami", name: "Rāma Navamī", localName: "राम नवमी", description: "Celebration of the birth of Lord Rama.", image: ramnavamiImage },
  { id: "janmashtami", name: "Janmāṣṭamī", localName: "जन्माष्टमी", description: "Commemorates the birth of Lord Krishna.", image: janmashtamiImage },
  { id: "krishnajanmashtami", name: "Kṛṣṇa Janmāṣṭamī", localName: "कृष्ण जन्माष्टमी", description: "Regional celebration of Krishna's birth.", image: krishnajanmashtamiImage },
  { id: "mahashivratri", name: "Mahāśivarātri", localName: "महाशिवरात्रि", description: "Night of Lord Shiva’s cosmic dance.", image: mahashivratriImage },
  { id: "ganeshchaturthi", name: "Gaṇeśa Caturthī", localName: "गणेश चतुर्थी", description: "Honors Lord Ganesha, remover of obstacles.", image: ganeshchaturthiImage },
  { id: "rakshabandhan", name: "Rakṣābandhan", localName: "रक्षाबंधन", description: "Celebrates the bond between brothers and sisters.", image: rakshabandhanImage },
  { id: "lohri", name: "Lohri", localName: "लोहड़ी", description: "Harvest festival marking end of winter with bonfires.", image: lohriImage },
  { id: "makarsankranti", name: "Makara Saṅkrānti", localName: "मकर संक्रांति", description: "Harvest festival marking the Sun’s transition into Capricorn.", image: makarsankrantiImage },
  { id: "basantpanchami", name: "Vasanta Pañcamī", localName: "वसंत पंचमी", description: "Dedicated to Goddess Saraswati, symbolizing wisdom and art.", image: basantpanchamiImage },
  { id: "karvachauth", name: "Karvā Caūtha", localName: "करवा चौथ", description: "Married women fast for the well-being of their husbands.", image: karvachauthImage },
  { id: "bhaidooj", name: "Bhāī Dūj", localName: "भाई दूज", description: "Celebrates the sacred bond of brothers and sisters.", image: bhaidoojImage },
  { id: "hartalikateej", name: "Hartālikā Tīja", localName: "हरतालिका तीज", description: "Women fast and pray for marital harmony and prosperity.", image: hartalikateejImage },
  { id: "hanumanjayanti", name: "Hanumān Jayantī", localName: "हनुमान जयंती", description: "Celebrates the birth of Lord Hanuman.", image: hanumanjayantiImage },
  { id: "nagpanchami", name: "Nāga Pañcamī", localName: "नाग पंचमी", description: "Festival dedicated to serpent deities.", image: nagpanchamiImage },
  { id: "akshaytritiya", name: "Akṣaya Tṛtīyā", localName: "अक्षय तृतीया", description: "Auspicious day for new beginnings and prosperity.", image: akshaytritiyaImage },
  { id: "gurupurnima", name: "Guru Pūrṇimā", localName: "गुरु पूर्णिमा", description: "Day to honor spiritual and academic teachers.", image: gurupurnimaImage },
  { id: "shravanmonday", name: "Śrāvaṇa Somavāra", localName: "श्रावण सोमवार", description: "Mondays of Shravan month devoted to Lord Shiva.", image: shravanmondayImage },
  { id: "gudipadwa", name: "Guḍī Pāḍavā", localName: "गुड़ी पड़वा", description: "Beginning of the Hindu New Year in Maharashtra.", image: gudipadwaImage },
  { id: "onam", name: "Onam", localName: "ओणम", description: "Harvest festival of Kerala honoring King Mahabali.", image: onamImage },
  { id: "pongal", name: "Pongal", localName: "पोंगल", description: "Tamil harvest festival dedicated to the Sun God.", image: pongalImage },
  { id: "anantchaturdashi", name: "Anant Chaturdaśī", localName: "अनंत चतुर्दशी", description: "Marks immersion of Lord Ganesha idols and worship of Anant form.", image: anantchaturdashiImage },
  { id: "christmas", name: "Christmas", localName: "क्रिसमस", description: "Festival celebrating the birth of Jesus Christ.", image: christmasImage },
  { id: "newyear", name: "New Year", localName: "नव वर्ष", description: "Beginning of the Gregorian calendar year.", image: newyearImage },
];

export default function FestivalsSection() {
  const [search, setSearch] = useState("");

  const filteredFestivals = festivals.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.localName.includes(search) ||
      f.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFF9F0] py-16 px-6">
        <h1 className="text-5xl font-bold text-center text-orange-900 mb-10">
          🌸 Indian Festivals (भारतीय त्यौहार)
        </h1>

        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="🔍 Search by name or meaning..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 text-lg rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-gray-800"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredFestivals.length === 0 ? (
            <p className="text-center text-orange-800 text-lg col-span-full">
              No festivals found for “{search}”
            </p>
          ) : (
            filteredFestivals.map((festival) => (
              <Link key={festival.id} to={`/festivals/${festival.id}`} className="group">
                <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-orange-200 bg-white">
                  <div className="overflow-hidden h-48">
                    <img
                      src={festival.image}
                      alt={festival.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <CardContent className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-orange-900 group-hover:text-orange-700 transition-colors">
                      {festival.localName} <br />
                      <span className="text-base text-gray-600">
                        ({festival.name})
                      </span>
                    </h2>
                    <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                      {festival.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>

      <FloatingButtons />
      <Footer />
    </>
  );
}
