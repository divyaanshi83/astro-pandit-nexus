import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Star } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";


const About = () => {
  return (
    <div className="min-h-screen bg-background">

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              About Pandit Ashu Bahuguna
            </h1>
            <p className="text-muted-foreground text-lg">
              Your trusted guide in Vedic astrology for over three decades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">35+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">50,000+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">Expert</div>
                <p className="text-muted-foreground">Vedic Scholar</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">5.0</div>
                <p className="text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">Biography</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  हमारे बारे में
                  ॐ रां रामाय नमः
                  श्रीराम ज्योतिष सदन
                  पंडित आशु बहुगुणा को किसी विस्तृत परिचय की आवश्यकता नहीं है। वे वैदिक ज्योतिष की सभी शाखाओं के लिए सबसे अधिक खोजे जाने वाले ज्योतिषियों में से एक हैं।" पंडित आशु बहुगुणा को वैदिक ज्योतिष और वे पाश्चात्य ज्योतिष में कार्य कर रहे है। वे एक वैदिक ज्योतिषी है। जिन्हें 35 वर्षों से अधिक का व्यावहारिक अनुभव है। और उन्होंने दुनिया भर के 40,000 से अधिक लोगों की कुंडलियाँ देखी हैं। दुनिया भर के लोगों द्वारा स्वीकृत उनकी कार्यप्रणाली को प्रमाणित करते है।
                  वह वर्चुअल और प्रत्यक्ष परामर्श के लिए आपके आस-पास हमेशा एक भरोसेमंद और अच्छे ज्योतिषी है। इसलिए नोएडा/दिल्ली/भारत में सर्वश्रेष्ठ ज्योतिषी की तलाश करने की कोई आवश्यकता नहीं है। एक अच्छा ज्योतिषी भौगोलिक सीमाओं के बावजूद अच्छा बना रहेगा।
                  वह हमेशा नवमांश कुंडली (डी-9 चार्ट) से सभी विश्लेषण करने में विश्वास करते है। न कि केवल लग्न (9डी-1) चार्ट के आधार पर। एक उदित राशि दो घंटे तक अपरिवर्तित रहती है। लेकिन नवमांश डी-9 इन दो घंटों के दौरान कई बार बदल सकता है। हर बार जब नवमांश चार्ट बदलता है। तो प्रत्येक घर में सितारों की स्थिति बदल जाएगी। इसलिए, सटीक ज्योतिषीय भविष्यवाणियों के लिए नवमांश कुंडलिनी पर विचार करना आवश्यक है। किसी को यह पता होना चाहिए कि जन्म समय की सटीकता किसी भी ज्योतिष पढ़ने का सार है। यदि व्यक्ति के पास सटीक जन्म समय नहीं है। तो समाधान हैं।
                  लोगों ने सर्वश्रेष्ठ ज्योतिषीय भविष्यवाणियों और समाधानों के लिए उन पर विश्वास किया है।
                  हम आपकी विशिष्ट आवश्यकताओं के अनुरूप निम्नलिखित प्रकार के परामर्श प्रदान करते हैं।
                </p>
                <p>
                  Throughout his illustrious career, Pandit Ashu Bahuguna has guided more than 50,000 satisfied
                  clients across India and abroad. His expertise spans all aspects of Vedic astrology including
                  horoscope reading, Kundli matching, gemstone recommendations, and performing various pujas
                  and rituals according to ancient traditions.
                </p>
                <h2> ज्योतिष क्या है? </h2>
                <p>
              
                  ज्योतिष एक ऐसी प्रणाली है। जो ग्रहों और नक्षत्रों की स्थिति और गतिविधियों के बीच पृथ्वी पर होने वाली घटनाओं, विशेषकर मानव जीवन और उसके व्यक्तित्व के साथ संबंध की विस्तृत जानकारी देती है। यह मानता है। कि किसी व्यक्ति के जन्म के समय इन ग्रहों और नक्षत्रों की स्थिति उस व्यक्ति के चरित्र और भाग्य को प्रभावित करती है।
                  ऑनलाइन ज्योतिष कैसे काम करता है?
                  ऑनलाइन ज्योतिष ट्रेडिशनल ज्योतिष की तरह ही इस सिद्धांत पर काम करता है। कि किसी निश्चित समय पर ग्रहों और नक्षत्रों की स्थिति जीवन के विभिन्न पहलुओं को कैसे प्रभावित करती है। ऑनलाइन ज्योतिषी किसी व्यक्ति की जन्म की तारीख, समय और स्थान के आधार पर जन्म कुंडली या राशिफल बनाते हैं। यह कुंडली (बर्थ चार्ट) सूर्य, चंद्रमा और ग्रहों की स्थिति को दर्शाती है। जिसके द्वारा एक ज्योतिषी जातक के व्यक्तित्व, रिश्तों और आने वाले भविष्य से जुड़ी संभावित घटनाओं के बारे में जानकारी प्रदान करते हैं।
                  राशि क्या हैं?
                  राशि, ज्योतिष शास्त्र के अनुसार, किसी व्यक्ति के जन्म के समय चंद्रमा जिस राशि में होता है। उसे उस व्यक्ति की राशि कहा जाता है। इसे जन्म राशि या चंद्र राशि भी कहा जाता है। ज्योतिष में राशियों का विशेष महत्व है। और राशि के आधार पर कई बातें ज्ञात होती हैं। जैसे व्यक्ति का स्वभाव, व्यक्तित्व, ताकत, कमजोरियां, गुण और दोष। ज्योतिष शास्त्र में 12 राशियां होती हैं। ये राशियांहैं। - मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु, मकर, कुंभ, और मीन.
                  क्या मैं ऑनलाइन ज्योतिष Website पर भरोसा कर सकता / सकती हूँ?
                  ऑनलाइन ज्योतिष Website पर भरोसा हर किसी के लिए अलग होता है। कुछ लोग इन Website से मिली जानकारी से लाभ उठाते हैं। जबकि अन्य लोग संदेह में रहते हैं। ऑनलाइन ज्योतिष को खुले दिमाग से देखना जरूरी है।
                  http://shriramjyotishsadan.in ज्योतिष में कौन-कौन सी सुविधाएँ उपलब्ध हैं?
                  व्यक्तिगत कुंडली: अपनी जन्म तिथि, समय और जन्म स्थान के आधार पर अपनी जन्म कुंडली बनाएँ और उसका विश्लेषण करें।
                  लाइव परामर्श: चैट, वॉयस या वीडियो कॉल के ज़रिए वास्तविक समय पर परामर्श के लिए जुड़ें।
                  राशिफल भविष्यवाणियां: अपनी राशि के अनुसार दैनिक, साप्ताहिक या मासिक राशिफल और प्रेम राशिफल पाएँ।
                  ज्योतिषीय रिपोर्ट: अपने जीवन के विभिन्न पहलुओं पर विस्तृत रिपोर्ट पाएं, जिसमें प्रेम राशिफल, करियर भविष्यवाणी और स्वास्थ्य शामिल हैं।
                  उपाय और सुझाव: अपने जीवन में विशिष्ट चुनौतियों का समाधान करने या सकारात्मक प्रभावों को बढ़ाने के लिए व्यक्तिगत उपाय या सुझाव पाएँ।
                  त्योहार और शुभ समय: ज्योतिष के आधार पर विभिन्न गतिविधियों के लिए महत्वपूर्ण त्योहारों और शुभ समय के बारे में जानकारी।
                  अनुकूलता विश्लेषण: ज्योतिषीय चार्ट के आधार पर जीवनसाथी और दोस्तो के बीच आपसी समझ और अनुकूलता का विश्लेषण ज्योतिषीय गणनाओं के आधार पर किया जाता है।
                  A Consultation with the Best Astrologer in India can Change Your Life For Good
                  Benefits of Astrology in Everyday Lives
                  Only Astrologer in India Combining Science and Stars for Accurate Predictions
                  Astrology Services
                  Top Astrologer in India
                  The Most Famous Astrologer
                  Our Best Astrology Services
                  Because she is the best Astrologer in India
                  Some of our Best Google Reviews
                  What does your birth chart TELL you?
                  Consult the best astrologer In India Today
                  Here’s what you can expect
                  Why Choose the Best Astrologer in India?
                  Brihat Parashar Patrika
                  Janam Kundli Plus
                  Navgraha Report
                  All Dosha Report
                  Match Analysis Detailed
                  Bhrigu Patrika
                  Lal Kitab
                  Varsh Details
                  Astrologer consultation online : Pandit Ashu Bahuguna
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">Areas of Expertise</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Comprehensive horoscope analysis and predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Kundli matching for marriage compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Gemstone consultation and recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Vedic puja services and rituals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Career and business guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Relationship and family counseling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Health and wellness predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Muhurat selection for auspicious occasions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <FloatingButtons />
    </div>
  );
};

export default About;
