import { Link } from "react-router-dom";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const yantras = [
  { name: "Sri Yantra", slug: "sriYantra", description: "For wealth, prosperity and spiritual growth", image: "/images/yantras/sri-yantra.jpg" },
  { name: "Kuber Yantra", slug: "kuberYantra", description: "For financial abundance and success", image: "/images/yantras/kuber-yantra.jpg" },
  { name: "Lakshmi Yantra", slug: "lakshmiYantra", description: "For goddess Lakshmi's blessings", image: "/images/yantras/lakshmi-yantra.jpg" },
  { name: "Ganesh Yantra", slug: "ganeshYantra", description: "For removing obstacles", image: "/images/yantras/ganesh-yantra.jpg" },
  { name: "Hanuman Yantra", slug: "hanumanYantra", description: "For strength and protection", image: "/images/yantras/hanuman-yantra.jpg" },
  { name: "Durga Yantra", slug: "durgaYantra", description: "For protection and victory", image: "/images/yantras/durga-yantra.jpg" },
  { name: "Mahamrityunjaya Yantra", slug: "mahamrityunjayaYantra", description: "For health and longevity", image: "/images/yantras/mahamrityunjaya-yantra.jpg" },
  { name: "Saraswati Yantra", slug: "saraswatiYantra", description: "For knowledge and wisdom", image: "/images/yantras/saraswati-yantra.jpg" },
  { name: "Shiva Yantra", slug: "shivaYantra", description: "For spiritual awakening", image: "/images/yantras/shiva-yantra.jpg" },
  { name: "Navagraha Yantra", slug: "navagrahaYantra", description: "For planetary harmony", image: "/images/yantras/navagraha-yantra.jpg" },

  { name: "Siddh Shani Yantra", slug: "siddhShaniYantra", description: "...", image: "/images/yantras/sri-yantra.jpg" },
  { name: "Siddh Raahu Yantra", slug: "siddhRahuYantra", description: "...", image: "/images/yantras/kuber-yantra.jpg" },
  { name: "Siddh Ketu Yantra", slug: "siddhKetuYantra", description: "...", image: "/images/yantras/lakshmi-yantra.jpg" },
  { name: "Siddh Brahspati Yantra", slug: "siddhBrihaspatiYantra", description: "...", image: "/images/yantras/ganesh-yantra.jpg" },
  { name: "Siddh Chandra Yantra", slug: "siddhChandraYantra", description: "...", image: "/images/yantras/hanuman-yantra.jpg" },
  { name: "Siddh Shukra Yantra", slug: "siddhShukraYantra", description: "...", image: "/images/yantras/durga-yantra.jpg" },
  { name: "Siddh SarvKarya Siddhi Yantra", slug: "siddhSarvKaryaSiddhiYantra", description: "...", image: "/images/yantras/mahamrityunjaya-yantra.jpg" },
  { name: "Siddh Surya Yantra", slug: "siddhSuryaYantra", description: "...", image: "/images/yantras/saraswati-yantra.jpg" },
  { name: "Siddh VyaPaar Yantra", slug: "siddhVyaPaarYantra", description: "...", image: "/images/yantras/shiva-yantra.jpg" },
  { name: "Siddh Bhairav Yantra", slug: "siddhBhairavYantra", description: "...", image: "/images/yantras/navagraha-yantra.jpg" },

  {
    name: "Rudraksh Mala",
    slug: "rudrakshMala",
    description: "Used for meditation, enhancing spiritual growth and mental clarity.",
    image: "/images/yantras/rudraksh-mala.jpg"
  },
  {
    name: "Haldi Mala",
    slug: "haldiMala",
    description: "Helps in spiritual awakening, purification, and boosting positive energy.",
    image: "/images/yantras/haldi-mala.jpg"
  },
  {
    name: "Safed Moti Ki Mala",
    slug: "safedMotiMala",
    description: "Promotes harmony, balance, and peace of mind. Excellent for planetary remedies.",
    image: "/images/yantras/safed-moti-mala.jpg"
  }
];

export default function Store() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center text-foreground mb-12">
          Sacred Yantras Store
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {yantras.map((yantra) => (
            <div
              key={yantra.slug}
              className="rounded-xl shadow-md overflow-hidden bg-card hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={yantra.image}
                alt={yantra.name}
                className="object-contain w-full aspect-square"
              />

              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {yantra.name}
                </h2>
                <p className="text-muted-foreground text-sm mb-3">
                  {yantra.description}
                </p>

                <Link to={`/yantras/${yantra.slug}`}>
                  <Button>View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <FloatingButtons />
    </div>
  );
}
