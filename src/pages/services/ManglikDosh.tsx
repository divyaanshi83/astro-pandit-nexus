import React from "react";

const MaanglikDosh = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <img
            src="/images/manglikDosh.jpg" // 👈 directly from public/images/
            alt="Manglik Dosh Remedies"
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-playfair font-bold text-primary mb-6 text-center">
          मांगलिक दोष निवारण उपाय
        </h1>

        {/* Description */}
        <div className="text-lg leading-relaxed text-foreground space-y-6">
          <p>
            जब जन्म कुंडली में मंगल ग्रह दोष स्थानों में स्थित होता है, तो उसे
            <strong> मांगलिक दोष </strong> कहा जाता है। यह वैवाहिक जीवन, स्वास्थ्य
            और मानसिक शांति को प्रभावित कर सकता है। लेकिन कुछ सरल उपायों से इस दोष
            को शांत किया जा सकता है।
          </p>

          <p>
            नीचे दिए गए उपायों को करने से आप अपने जीवन में मांगलिक दोष के दुष्प्रभाव
            को कम कर सकते हैं और सुखद दांपत्य जीवन का अनुभव प्राप्त कर सकते हैं।
          </p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              मंगलवार के दिन <strong>हनुमान जी</strong> को लाल चोला पहनाएं और
              <em> सुंदरकांड </em> का पाठ करें।
            </li>
            <li>
              मंगलवार के दिन व्रत रखें और केवल एक समय भोजन करें — इसमें तामसिक भोजन
              से परहेज करें।
            </li>
            <li>
              जन्म कुंडली में मंगल ग्रह को शांत करने हेतु <strong>मूंगा रत्न</strong> धारण करें
              (योग्य पंडित की सलाह से)।
            </li>
            <li>
              <strong>कुंभ विवाह</strong> करवाना भी मांगलिक दोष निवारण का एक
              पारंपरिक उपाय है।
            </li>
            <li>
              प्रतिदिन <em>"ॐ क्रां क्रीं क्रौं सः भौमाय नमः"</em> मंत्र का 108 बार
              जाप करें।
            </li>
            <li>
              मंगलवार को लाल मसूर, लाल कपड़ा, और गुड़ का दान करें।
            </li>
            <li>
              हनुमान जी के मंदिर में जाकर तिल का तेल का दीपक जलाएं।
            </li>
            <li>
              विवाह से पहले किसी मंदिर में कन्यादान करें — यह पापकर्मों को शांत
              करता है और विवाह में आने वाली बाधाओं को दूर करता है।
            </li>
            <li>
              मंगल दोष को शांत करने के लिए घर में <strong>मंगल यंत्र</strong> की स्थापना करें।
            </li>
            <li>
              मंगलवार के दिन 5 बार <strong>रामरक्षा स्तोत्र</strong> का पाठ करें।
            </li>
          </ol>

          <p className="mt-6 font-semibold text-center">
            ॐ क्रां क्रीं क्रौं सः भौमाय नमः <br />
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

export default MaanglikDosh;
