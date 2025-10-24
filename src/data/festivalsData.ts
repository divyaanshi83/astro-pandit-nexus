// src/data/festivalsData.ts
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

export interface Festival {
  id: string;          // used in URL
  name: string;        // English / Romanized name
  localName: string;   // Hindi / regional name
  description: string; // short description
  image: string;
}

const festivals: Festival[] = [
  { id: "diwali", name: "Deepāvali", localName: "दीपावली", description: "Festival of Lights celebrating prosperity and victory of good over evil.", image: diwaliImage },
  { id: "dhanteras", name: "Dhanteras", localName: "धनतेरस", description: "First day of Diwali festival, dedicated to wealth and health.", image: dhanterasImage },
  { id: "narakchaturdashi", name: "Naraka Chaturdaśī", localName: "नरक चतुर्दशी", description: "Celebrates Lord Krishna's victory over the demon Narakasura.", image: narakchaturdashiImage },
  { id: "govardhanpuja", name: "Govardhan Pūjā", localName: "गोवर्धन पूजा", description: "Marks Lord Krishna’s lifting of Govardhan Hill to protect villagers.", image: govardhanpujaImage },
  { id: "chhathpuja", name: "Chhath Pūjā", localName: "छठ पूजा", description: "Dedicated to the Sun God and Chhathi Maiya, celebrated with fasting.", image: chhathpujaImage },
  { id: "dussehra", name: "Vijayadaśamī", localName: "दशहरा", description: "Symbolizes the victory of Lord Rama over Ravana.", image: dussehraImage },
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

export default festivals;
