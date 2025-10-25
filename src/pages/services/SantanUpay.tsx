import React from "react";

const Santan: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Image Section */}
        <div className="mb-8">
          <img
            src="/images/santan.jpg" // ✅ image path from /public/images/
            alt="Santan Sukh Remedies"
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-playfair font-bold text-primary mb-6 text-center">
          संतान सुख एवं संतान प्राप्ति के उपाय
        </h1>

        {/* Description */}
        <div className="text-lg leading-relaxed text-foreground space-y-6">
          <p><strong>संतान सुख के उपाय</strong></p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              यदि संतान प्राप्ति में विलम्ब हो रहा हो तो सोमवार या शुक्रवार को गंगाजल से स्नान कर के,
              हनुमान जी या भगवान शिव के मंदिर में जाकर दीपक जलाएं और ‘ॐ श्री हनुमते नम:’ मंत्र 21 बार जप करें।
            </li>
            <li>
              प्रतिदिन प्रातःकाल हनुमान या शिव जी के समक्ष तुलसी का पौधा रखकर उसके नीचे हरे कपड़े पर
              दूध, गुड़ और चावल का भोग अर्पित करें। 21 दिनों तक करने से संतान सुख में वृद्धि होती है।
            </li>
            <li>
              शनिवार को गाय को गुड़ खिलाएं और ‘संतान प्राप्ति मंत्र’ का जप करें। यह उपाय श्रद्धा से करने पर फलदायी होता है।
            </li>
            <li>
              पीपल के वृक्ष की जड़ में दूध और शहद मिलाकर जल चढ़ाएँ। घर के उत्तर-पूर्व कोण में तुलसी का पौधा रखें और पूजा करें।
            </li>
            <li>
              गुरूवार को विष्णु या लक्ष्मी मंदिर में नारियल और अक्षत चढ़ाएं। ‘ॐ श्री लक्ष्मी नम:’ मंत्र का 11 बार जप करें।
            </li>
            <li>
              महिलाएँ जिन्हें संतान प्राप्ति में कठिनाई हो, वे हर मंगलवार को हनुमान चालीसा का पाठ करें।
            </li>
            <li>
              उत्तर दिशा में पीला कपड़ा बिछाकर 7 गुलाब, 7 चावल के दाने और 7 तुलसी के पत्ते रखें। देवी-देवताओं की पूजा करें।
            </li>
            <li>
              शुभ मुहूर्त में ‘ॐ श्रीं संतानाय नम:’ मंत्र 21 बार जप कर दूध, गुड़ और मूंग का भोग करें।
            </li>
            <li>
              शुक्रवार को तुलसी के पास दीपक जलाएं और दूध व गुड़ का भोग रखें। देवी कृपा शीघ्र प्राप्त होती है।
            </li>
            <li>
              चंद्रमा के शुभ दिन हरे वस्त्र पहनकर शिव मंदिर में जाएं और दीपक जलाएं। गुड़ व चावल अर्पित करें।
            </li>
          </ol>

          <p className="mt-6 font-semibold text-center">
            ॐ रां रामाय नमः <br />
            श्रीराम ज्योतिष सदन, पंडित आशु बहुगुणा <br />
            संपर्क सूत्र:{" "}
            <a href="tel:9760924411" className="text-primary hover:underline">
              9760924411
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Santan;
