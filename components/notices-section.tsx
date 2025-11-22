import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button"
import {
  Calendar,
  ArrowRight,
  Bell,
  Award,
  Briefcase,
  Calendar as CalendarIcon,
  Megaphone,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { toIndianDateString } from "@/lib/formatDate";

const notices = [
  {
    id: 1,
    title: "HACK N TECH Hackathon Results Announced",
    date: "2025-05-24",
    excerpt:
      "Congratulations to all participants! Winners have been announced for the 24-hour coding marathon.",
    category: "Events",
    urgent: false,
  },
  {
    id: 2,
    title: "New Internship Opportunities - Spring 2025",
    date: "2025-03-05",
    excerpt:
      "15+ companies are offering internship positions. Registration deadline: March 20th.",
    category: "Opportunities",
    urgent: false,
  },
  {
    id: 3,
    title: "TATVA Workshop Series - AI & Machine Learning",
    date: "2025-03-03",
    excerpt:
      "Join our comprehensive workshop series on AI/ML fundamentals and advanced applications.",
    category: "Workshops",
    urgent: false,
  },
  {
    id: 4,
    title: "DISHA Career Counseling Sessions",
    date: "2025-03-01",
    excerpt:
      "One-on-one career guidance sessions with industry experts. Book your slot now.",
    category: "Career",
    urgent: false,
  },
];

export function NoticesSection() {
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "Date not available";
    return toIndianDateString(dateString);
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      Elections: <Megaphone className="w-4 h-4" />,
      Events: <CalendarIcon className="w-4 h-4" />,
      Opportunities: <Award className="w-4 h-4" />,
      Workshops: <GraduationCap className="w-4 h-4" />,
      Career: <Briefcase className="w-4 h-4" />,
    };
    return (
      icons[category as keyof typeof icons] || <Calendar className="w-4 h-4" />
    );
  };

  return (
    <section id="notices-section" className="py-16 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - styled like WingsSection */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-sm font-bold tracking-wider text-blue-600 mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            NEWS AND UPDATES
          </span>
          <h2 className="mt-2 sm:mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Latest <span className="text-blue-600">News</span> and{" "}
            <span className="text-blue-600">Updates</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with important announcements, events, and
            opportunities from STC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {notices.slice(0, 5).map((notice) => (
            <Card
              key={notice.id}
              className={`bg-white transition-all duration-300 transform hover:-translate-y-0.5 rounded-xl overflow-hidden border border-blue-200 ${
                notice.urgent
                  ? "ring-2 ring-red-200"
                  : "hover:shadow-md hover:border-blue-100"
              }`}
              style={{
                boxShadow:
                  "0 4px 12px -2px rgba(56, 132, 255, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.04)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <CardContent className="p-5 flex flex-col h-full group">
                <div className="flex justify-between items-center mb-3">
                  <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide border border-blue-100 shadow-sm">
                    <span className="mr-2">
                      {getCategoryIcon(notice.category)}
                    </span>
                    {notice.category.toUpperCase()}
                  </div>
                  {notice.urgent && (
                    <Bell className="w-4 h-4 text-red-500 animate-pulse" />
                  )}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                  {notice.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
                  {notice.excerpt}
                </p>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                  {notice.category === "Events" &&
                  notice.title.includes("Hackathon") ? (
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {formatDate(notice.date)}
                    </div>
                  ) : (
                    <div className="h-4"></div>
                  )}
                  {notice.category === "Events" &&
                  notice.title.includes("Hackathon") ? (
                    <Link href="/events" passHref>
                      <h1 className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200 cursor-pointer hover:underline">
                        Read More
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                      </h1>
                    </Link>
                  ) : (
                    <h1 className="flex items-center text-gray-400 text-sm font-medium cursor-default">
                      Coming Soon
                    </h1>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
