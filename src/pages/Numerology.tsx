import { useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const statesAndCities: Record<string, string[]> = {
  "Uttar Pradesh": [
    "Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya",
    "Ayodhya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda",
    "Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr",
    "Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur",
    "Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur",
    "Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj",
    "Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar",
    "Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau",
    "Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh",
    "Prayagraj","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar",
    "Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra",
    "Sultanpur","Unnao","Varanasi"
  ],

  "Maharashtra": [
    "Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana",
    "Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna",
    "Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded",
    "Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad",
    "Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha",
    "Washim","Yavatmal"
  ],

  "Delhi": [
    "Central Delhi","East Delhi","New Delhi","North Delhi",
    "North East Delhi","North West Delhi","Shahdara",
    "South Delhi","South East Delhi","South West Delhi","West Delhi"
  ],

  "Rajasthan": [
    "Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara",
    "Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur",
    "Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu",
    "Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand",
    "Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"
  ],

  "Tamil Nadu": [
    "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore",
    "Dharmapuri","Dindigul","Erode","Kallakurichi","Kanchipuram",
    "Kanyakumari","Karur","Krishnagiri","Madurai","Mayiladuthurai",
    "Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai",
    "Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi",
    "Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli",
    "Tirupattur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur",
    "Vellore","Viluppuram","Virudhunagar"
  ],

  "Karnataka": [
    "Bagalkot","Ballari","Belagavi","Bengaluru Rural","Bengaluru Urban",
    "Bidar","Chamarajanagar","Chikkaballapur","Chikkamagaluru",
    "Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag",
    "Hassan","Haveri","Kalaburagi","Kodagu","Kolar","Koppal","Mandya",
    "Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru",
    "Udupi","Uttara Kannada","Vijayanagara","Yadgir"
  ],

  "Andhra Pradesh": [
    "Alluri Sitharama Raju","Anakapalli","Anantapur","Annamayya",
    "Bapatla","Chittoor","Dr. B.R. Ambedkar Konaseema","East Godavari",
    "Eluru","Guntur","Kakinada","Krishna","Kurnool","Nandyal",
    "Nellore","NTR","Palnadu","Parvathipuram Manyam","Prakasam",
    "Srikakulam","Sri Sathya Sai","Tirupati","Visakhapatnam",
    "Vizianagaram","West Godavari","YSR Kadapa"
  ],

  "Arunachal Pradesh": [
    "Anjaw","Changlang","Dibang Valley","East Kameng","East Siang",
    "Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding",
    "Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai",
    "Pakke Kessang","Papum Pare","Shi Yomi","Siang","Tawang",
    "Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang"
  ],

  "Assam": [
    "Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo",
    "Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao",
    "Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup",
    "Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar",
    "Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar",
    "Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri",
    "West Karbi Anglong"
  ],

  "Bihar": [
    "Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur",
    "Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj",
    "Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj",
    "Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur",
    "Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa",
    "Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi",
    "Siwan","Supaul","Vaishali","West Champaran"
  ],

  "Chhattisgarh": [
    "Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur",
    "Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Gaurela-Pendra-Marwahi",
    "Janjgir-Champa","Jashpur","Kabirdham","Kanker","Khairagarh-Chhuikhadan-Gandai",
    "Kondagaon","Korba","Koriya","Mahasamund","Manendragarh-Chirmiri-Bharatpur",
    "Mohla-Manpur-Ambagarh Chowki","Mungeli","Narayanpur","Raigarh",
    "Raipur","Rajnandgaon","Sarangarh-Bilaigarh","Shakti","Sukma","Surajpur","Surguja"
  ],

  "Goa": ["North Goa","South Goa"],

  "Gujarat": [
    "Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch",
    "Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka",
    "Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch",
    "Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal",
    "Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar",
    "Tapi","Vadodara","Valsad"
  ],

  "Haryana": [
    "Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad",
    "Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal",
    "Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula",
    "Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"
  ],

  "Himachal Pradesh": [
    "Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu",
    "Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"
  ],

  "Jharkhand": [
    "Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum",
    "Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara",
    "Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu",
    "Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan",
    "Simdega","West Singhbhum"
  ],

  "Kerala": [
    "Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod",
    "Kollam","Kottayam","Kozhikode","Malappuram","Palakkad",
    "Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"
  ],

  "Madhya Pradesh": [
    "Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat",
    "Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur",
    "Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna",
    "Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua",
    "Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena",
    "Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam",
    "Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur",
    "Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain",
    "Umaria","Vidisha"
  ],

  "West Bengal": [
    "Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur",
    "Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong",
    "Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas",
    "Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman",
    "Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"
  ],

  "Odisha": [
    "Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh",
    "Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur",
    "Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara",
    "Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj",
    "Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada",
    "Sambalpur","Subarnapur","Sundargarh"
  ],

  "Punjab": [
    "Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib",
    "Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar",
    "Kapurthala","Ludhiana","Malerkotla","Mansa","Moga","Mohali",
    "Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"
  ],

  "Sikkim": [
    "East Sikkim","North Sikkim","South Sikkim","West Sikkim"
  ],

  "Telangana": [
    "Adilabad","Bhadradri Kothagudem","Hanumakonda","Hyderabad",
    "Jagtial","Jangaon","Jayashankar Bhupalpally","Jogulamba Gadwal",
    "Kamareddy","Karimnagar","Khammam","Kumuram Bheem","Mahabubabad",
    "Mahbubnagar","Mancherial","Medak","Medchal–Malkajgiri",
    "Mulugu","Nagarkurnool","Nalgonda","Narayanpet","Nirmal",
    "Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy",
    "Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy",
    "Warangal","Yadadri Bhuvanagiri"
  ],

  "Tripura": [
    "Dhalai","Gomati","Khowai","North Tripura",
    "Sepahijala","South Tripura","Unakoti","West Tripura"
  ],

  "Uttarakhand": [
    "Almora","Bageshwar","Chamoli","Champawat","Dehradun",
    "Haridwar","Nainital","Pauri Garhwal","Pithoragarh",
    "Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"
  ],
};

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",

  // Asia
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Cyprus",
  "Georgia",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "North Korea",
  "Oman",
  "Pakistan",
  "Philippines",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Sri Lanka",
  "Syria",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Turkey",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen"
];


const Numerology = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    birthTime: "",
    country: "",
    state: "",
    city: "",
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/numerology.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Numerology API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const numerology = result?.numerology;

  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-center mb-6 text-primary"
          >
            🔢 Numerology Insights
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 bg-card p-8 rounded-xl shadow-lg"
          >
            <input name="name" placeholder="Full Name" required className="w-full p-3 border rounded" onChange={handleChange} />
            <input name="dob" type="date" required className="w-full p-3 border rounded" onChange={handleChange} />
            <input name="birthTime" type="time" className="w-full p-3 border rounded" onChange={handleChange} />

            <select name="country" required className="w-full p-3 border rounded" onChange={handleChange}>
              <option value="">Select Country</option>
              {countries.map(c => <option key={c}>{c}</option>)}
            </select>

            {formData.country === "India" && (
              <>
                <select name="state" required className="w-full p-3 border rounded" onChange={handleChange}>
                  <option value="">Select State</option>
                  {Object.keys(statesAndCities).map(s => <option key={s}>{s}</option>)}
                </select>

                <select name="city" required className="w-full p-3 border rounded" onChange={handleChange}>
                  <option value="">Select City</option>
                  {statesAndCities[formData.state]?.map(c => <option key={c}>{c}</option>)}
                </select>
              </>
            )}

            <Button type="submit" disabled={loading} className="w-full text-lg">
              {loading ? "Calculating..." : "🔮 Get My Numerology Report"}
            </Button>
          </motion.form>

          {/* RESULT */}
          {numerology && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12">
              <Card>
                <CardContent className="p-8 space-y-4 text-lg">
                  <h3 className="text-3xl font-bold mb-4">✨ Your Numerology Reading</h3>

                  <p><strong>🔢 मूलांक:</strong> {numerology.mulank}</p>
                  <p><strong>✨ भाग्यांक:</strong> {numerology.bhagyank}</p>
                  <p><strong>🧠 व्यक्तित्व:</strong> {numerology.personality}</p>
                  <p><strong>💪 शक्तियाँ:</strong> {numerology.strengths}</p>
                  <p><strong>⚠️ कमजोरियाँ:</strong> {numerology.weaknesses}</p>
                  <p><strong>💼 करियर:</strong> {numerology.career}</p>
                  <p><strong>💰 धन:</strong> {numerology.finance}</p>
                  <p><strong>❤️ संबंध:</strong> {numerology.relationships}</p>
                  <p><strong>🩺 स्वास्थ्य:</strong> {numerology.health}</p>

                  <div>
                    <strong>🍀 शुभ तत्व:</strong>
                    <ul className="list-disc ml-6">
                      <li>अंक: {numerology.lucky?.numbers?.join(", ")}</li>
                      <li>रंग: {numerology.lucky?.colors?.join(", ")}</li>
                      <li>दिन: {numerology.lucky?.days?.join(", ")}</li>
                      <li>तिथियाँ: {numerology.lucky?.dates?.join(", ")}</li>
                    </ul>
                  </div>

                  <p><strong>🙏 उपासना:</strong> {numerology.worship}</p>
                  <p><strong>🎁 दान:</strong> {numerology.donation}</p>
                  <p><strong>📿 मंत्र:</strong> {numerology.mantra}</p>
                  <p><strong>📆 वार्षिक मार्गदर्शन:</strong> {numerology.yearlyGuidance}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
      <FloatingButtons />
    </div>
  );
};

export default Numerology;
