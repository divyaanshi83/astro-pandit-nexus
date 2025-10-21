import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  link: string; // link to detailed blog page
}

const blogPosts: BlogPost[] = [
  { id: "astro-tips", title: "Astrology Tips for Beginners", excerpt: "Learn how astrology can guide your daily life and decisions.", link: "/blog/astro-tips" },
  { id: "mangalik-remedies", title: "Mangalik Dosh Remedies", excerpt: "Explore effective remedies and rituals for Mangalik Dosh.", link: "/blog/mangalik-remedies" },
  { id: "career-guidance", title: "Career Guidance through Astrology", excerpt: "Discover your ideal career path based on planetary positions.", link: "/blog/career-guidance" },
  { id: "love-and-marriage", title: "Love & Marriage Insights", excerpt: "Astrological insights for love and marriage compatibility.", link: "/blog/love-and-marriage" },
  { id: "share-market-astro", title: "Share Market Predictions", excerpt: "How astrology can influence financial decisions and investments.", link: "/blog/share-market-astro" },
  { id: "astro-tips", title: "Astrology Tips for Beginners", excerpt: "Learn how astrology can guide your daily life and decisions.", link: "/blog/astro-tips" },
  { id: "mangalik-remedies", title: "Mangalik Dosh Remedies", excerpt: "Explore effective remedies and rituals for Mangalik Dosh.", link: "/blog/mangalik-remedies" },
  { id: "career-guidance", title: "Career Guidance through Astrology", excerpt: "Discover your ideal career path based on planetary positions.", link: "/blog/career-guidance" },
  { id: "love-and-marriage", title: "Love & Marriage Insights", excerpt: "Astrological insights for love and marriage compatibility.", link: "/blog/love-and-marriage" },
  { id: "share-market-astro", title: "Share Market Predictions", excerpt: "How astrology can influence financial decisions and investments.", link: "/blog/share-market-astro" },
  { id: "astro-tips", title: "Astrology Tips for Beginners", excerpt: "Learn how astrology can guide your daily life and decisions.", link: "/blog/astro-tips" },
  { id: "mangalik-remedies", title: "Mangalik Dosh Remedies", excerpt: "Explore effective remedies and rituals for Mangalik Dosh.", link: "/blog/mangalik-remedies" },
  { id: "career-guidance", title: "Career Guidance through Astrology", excerpt: "Discover your ideal career path based on planetary positions.", link: "/blog/career-guidance" },
  { id: "love-and-marriage", title: "Love & Marriage Insights", excerpt: "Astrological insights for love and marriage compatibility.", link: "/blog/love-and-marriage" },
  { id: "share-market-astro", title: "Share Market Predictions", excerpt: "How astrology can influence financial decisions and investments.", link: "/blog/share-market-astro" },
  { id: "astro-tips", title: "Astrology Tips for Beginners", excerpt: "Learn how astrology can guide your daily life and decisions.", link: "/blog/astro-tips" },
  { id: "mangalik-remedies", title: "Mangalik Dosh Remedies", excerpt: "Explore effective remedies and rituals for Mangalik Dosh.", link: "/blog/mangalik-remedies" },
  { id: "career-guidance", title: "Career Guidance through Astrology", excerpt: "Discover your ideal career path based on planetary positions.", link: "/blog/career-guidance" },
  { id: "love-and-marriage", title: "Love & Marriage Insights", excerpt: "Astrological insights for love and marriage compatibility.", link: "/blog/love-and-marriage" },
  { id: "share-market-astro", title: "Share Market Predictions", excerpt: "How astrology can influence financial decisions and investments.", link: "/blog/share-market-astro" },
  { id: "share-market-astro", title: "Share Market Predictions", excerpt: "How astrology can influence financial decisions and investments.", link: "/blog/share-market-astro" },
];

export default function Blog() {
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFF9F0] py-16 px-6">
        <h1 className="text-5xl font-bold text-center text-orange-900 mb-10">
          📝 Blog
        </h1>

        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="🔍 Search blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 text-lg rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-gray-800"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-orange-800 text-lg col-span-full">
              No blog posts found for “{search}”
            </p>
          ) : (
            filteredPosts.map((post) => (
              <Link key={post.id} to={post.link} className="group">
                <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-orange-200 bg-white">
                  {/* Placeholder for image */}
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    Image coming soon
                  </div>

                  <CardContent className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-orange-900 group-hover:text-orange-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                      {post.excerpt}
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
