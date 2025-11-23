// == FULL READY FILE ==
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/lottie/loading.json";



export default function MuhuratDates() {
  const { type } = useParams();
  const [activeTab, setActiveTab] =
    useState<"daily" | "weekly" | "monthly">("daily");

  const [daily, setDaily] = useState<any[]>([]);
  const [weekly, setWeekly] = useState<any[]>([]);
  const [monthly, setMonthly] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cache = localStorage.getItem(`muhurat-${type}`);
    if (cache) {
      const json = JSON.parse(cache);
      setDaily(json.daily);
      setWeekly(json.weekly);
      setMonthly(json.monthly);
    }

    loadData();
  }, [type]);

  const loadData = async () => {
    setLoading(true);

    const d = await fetch(`/api/muhurat_dates.php?type=${type}`).then((r) =>
      r.json()
    );
    const w = await fetch(`/api/muhurat_weekly.php?type=${type}`).then((r) =>
      r.json()
    );
    const m = await fetch(`/api/muhurat_monthly.php?type=${type}`).then((r) =>
      r.json()
    );

    setDaily(d.dates || []);
    setWeekly(w.week || []);
    setMonthly(m.month || []);

    localStorage.setItem(
      `muhurat-${type}`,
      JSON.stringify({ daily: d.dates, weekly: w.week, monthly: m.month })
    );

    setLoading(false);
  };

  const Tab = ({ val, label }: any) => (
    <button
      onClick={() => setActiveTab(val)}
      className={`px-6 py-2 rounded-full border font-semibold ${
        activeTab === val
          ? "bg-orange-600 text-white shadow scale-105"
          : "bg-white text-orange-700"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>

      <main className="min-h-screen bg-orange-50 py-10 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-orange-800 capitalize mb-2">
          {type?.replace("-", " ")} मुहूर्त
        </h1>
        <p className="text-gray-600 mb-6">AI द्वारा वास्तविक समय में निर्मित</p>

        <div className="flex gap-4 mb-10">
          <Tab val="daily" label="Daily" />
          <Tab val="weekly" label="Weekly" />
          <Tab val="monthly" label="Monthly" />
        </div>

        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <Lottie animationData={loadingAnimation} style={{ width: 150 }} />
            <p>⏳ लोड हो रहा है...</p>
          </div>
        ) : (
          <div className="w-full max-w-3xl space-y-6">
            {activeTab === "daily" &&
              daily.map((i) => (
                <Link key={i.date} to={`/muhurat/${type}/${i.date}`}>
                  <Card className="hover:shadow-lg hover:-translate-y-1 transition">
                    <CardContent className="p-5">
                      <h3 className="text-xl text-orange-700 font-semibold">
                        📅 {i.date}
                      </h3>
                      <p className="text-gray-600">{i.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}

            {activeTab === "weekly" &&
              weekly.map((i, idx) => (
                <Card key={idx} className="hover:shadow-lg transition">
                  <CardContent className="p-5">
                    <h3 className="text-xl text-orange-700 font-semibold">
                      {i.day}
                    </h3>
                    <p className="text-gray-600">{i.description}</p>
                  </CardContent>
                </Card>
              ))}

            {activeTab === "monthly" &&
              monthly.map((i, idx) => (
                <Card key={idx} className="hover:shadow-lg transition">
                  <CardContent className="p-5">
                    <h3 className="text-xl text-orange-700 font-semibold">
                      📆 {i.date}
                    </h3>
                    <p className="text-gray-600">{i.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}
      </main>

      <FloatingButtons />
    </>
  );
}