import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import festivals, { Festival } from "@/data/festivalsData";

export default function FestivalsSection() {
  const [search, setSearch] = useState("");

  const filteredFestivals: Festival[] = festivals.filter(
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
              <Link
                key={festival.id}
                to={`/festivals/${festival.id}`} // links to FestivalDetail page
                className="group"
              >
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
                      <span className="text-base text-gray-600">({festival.name})</span>
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
