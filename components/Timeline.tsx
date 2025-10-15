"use client";

import React, { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface Event {
  title: string;
  description: string;
  date: string;
  club: string;
  image?: string;
}

interface TimelineProps {
  events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const [activeIndex, setActiveIndex] = useState<Record<string, number>>({});

  const handleClick = (date: string, total: number) => {
    setActiveIndex((prev) => ({
      ...prev,
      [date]: ((prev[date] ?? 0) + 1) % total,
    }));
  };

  // Group events by date
  const grouped = events.reduce<Record<string, Event[]>>((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {});

  return (
    <div className="relative mx-auto w-full max-w-6xl py-8 md:py-12">
      {/* Mobile View */}
      <div className="md:hidden px-4">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500"></div>

        {Object.entries(grouped).map(([date, dayEvents]) => {
          const active = activeIndex[date] ?? 0;
          const event = dayEvents[active];
          const formattedDate = new Date(date);
          const day = formattedDate.getDate();
          const month = formattedDate.toLocaleString("default", { month: "short" });
          const dayOfWeek = formattedDate.toLocaleString("default", { weekday: "short" });

          return (
            <div key={date} className="relative pl-10 pb-6">
              {/* Event cards */}
              <div className="space-y-3 pt-4">
                {/* Date label - Moved inside cards container */}
                <div className="relative">
                  <div className="absolute -left-12 -top-1 z-10">
                    <div className="bg-white px-2 py-1 rounded-r-full shadow-sm border border-l-0 border-gray-200 flex items-center">
                      <CalendarMonthIcon className="w-3 h-3 text-blue-500 mr-1.5" />
                      <span className="text-xs font-medium text-gray-700">
                        {`${day} ${month}`}
                      </span>
                    </div>
                  </div>
                </div>

                <div 
                  className="relative group transition-all duration-300"
                >
                  {/* Only show the active event */}
                  <div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-5 group-hover:opacity-10 blur-sm transition duration-200"></div>
                    
                    <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 active:shadow-md active:-translate-y-0.5">
                      {/* Header */}
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBkPSJNMzAwIDBDMTM0LjMgMCAwIDEzNC4zIDAgMzAwczEzNC4zIDMwMCAzMDAgMzAwIDMwMC0xMzQuMyAzMDAtMzAwUzQ2NS43IDAgMzAwIDB6Ii8+PC9zdmc+')] opacity-20"></div>
                        </div>
                        <div className="relative z-10 p-5">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 relative">
                              <img
                                className="w-14 h-14 rounded-full object-cover border-2 border-white/30 shadow-lg"
                                src={event.image || "/images/stc-logo.jpg"}
                                alt={event.image ? `${event.club} logo` : "Default logo"}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/images/stc-logo.jpg";
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-[15px] font-bold text-white leading-tight tracking-tight">
                                {event.title}
                              </h3>
                              <div className="flex items-center mt-1.5">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/10 text-white/90 border border-white/20">
                                  {event.club}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 bg-white">
                        <p className="text-gray-700 text-sm leading-relaxed mb-5">
                          {event.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-1.5">
                            <CalendarMonthIcon className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-medium text-gray-600">
                              {formattedDate.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {dayEvents.length > 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClick(date, dayEvents.length);
                                }}
                                className="inline-flex items-center px-3 py-1 border border-blue-100 text-blue-600 text-xs font-medium rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                              >
                                Next Session
                              </button>
                            )}
                            <a
                              href={`/wings/tatva/subclubs/pixelerate`}
                              className="inline-flex items-center px-3.5 py-1.5 border border-blue-100 text-blue-600 text-xs font-medium rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                            >
                              View Details
                              <svg
                                className="w-3 h-3 ml-1.5 -mr-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        {Object.entries(grouped).map(([date, dayEvents], i) => {
          const active = activeIndex[date] ?? 0;
          const event = dayEvents[active];
          const isLeft = i % 2 === 0;
          const formattedDate = new Date(date);
          const day = formattedDate.getDate();
          const month = formattedDate.toLocaleString("default", { month: "short" });

          return (
            <div key={date} className="relative w-full flex items-stretch my-8">
              {/* Left side content */}
              <div className={`w-1/2 px-8 ${isLeft ? "order-1" : "order-3"}`}>
                <div className="h-full flex items-center">
                  <div className="relative group w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-5 group-hover:opacity-10 blur-sm transition duration-200"></div>
                    
                    <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                      {/* Header */}
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBkPSJNMzAwIDBDMTM0LjMgMCAwIDEzNC4zIDAgMzAwczEzNC4zIDMwMCAzMDAgMzAwIDMwMC0xMzQuMyAzMDAtMzAwUzQ2NS43IDAgMzAwIDB6Ii8+PC9zdmc+')] opacity-20"></div>
                        </div>
                        <div className="relative z-10 p-5">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 relative">
                              <img
                                className="w-14 h-14 rounded-full object-cover border-2 border-white/30 shadow-lg"
                                src={event.image || "/images/stc-logo.jpg"}
                                alt={event.image ? `${event.club} logo` : "Default logo"}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/images/stc-logo.jpg";
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-[15px] font-bold text-white leading-tight tracking-tight">
                                {event.title}
                              </h3>
                              <div className="flex items-center mt-1.5">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/10 text-white/90 border border-white/20">
                                  {event.club}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 bg-white">
                        <p className="text-gray-700 text-sm leading-relaxed mb-5">
                          {event.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-1.5">
                            <CalendarMonthIcon className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-medium text-gray-600">
                              {formattedDate.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {dayEvents.length > 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClick(date, dayEvents.length);
                                }}
                                className="inline-flex items-center px-3 py-1 border border-blue-100 text-blue-600 text-xs font-medium rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                              >
                                Next Session
                              </button>
                            )}
                            <a
                              href={`/wings/tatva/subclubs/pixelerate`}
                              className="inline-flex items-center px-3.5 py-1.5 border border-blue-100 text-blue-600 text-xs font-medium rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                            >
                              View Details
                              <svg
                                className="w-3 h-3 ml-1.5 -mr-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date circle - Desktop */}
              <div className="w-24 flex flex-col items-center relative order-2 mt-24">
                <div className="absolute top-0 bottom-0 w-0.5 left-1/2 transform -translate-x-1/2">
                  <div className="h-full bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 w-full"></div>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-lg mx-auto hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 mt-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-800">{day}</div>
                    <div className="text-xs text-blue-500 font-medium uppercase">
                      {month}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`w-1/2 px-8 ${isLeft ? "order-3" : "order-1"}`}>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;