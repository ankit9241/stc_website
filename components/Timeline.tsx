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
  const grouped = events.reduce(
    (acc, ev) => {
      acc[ev.date] = acc[ev.date] ? [...acc[ev.date], ev] : [ev];
      return acc;
    },
    {} as Record<string, Event[]>
  );

  return (
    <div className="relative mx-auto w-full max-w-6xl py-8 md:py-12">
      {/* Vertical timeline line - Hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2">
        <div className="absolute inset-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
        <div className="absolute inset-0 w-0.5 bg-gradient-to-b from-blue-400/30 to-transparent"></div>
      </div>

      {/* Mobile View - Connected Timeline */}
      <div className="md:hidden px-6">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500"></div>

        {Object.entries(grouped).map(([date, dayEvents], i) => {
          const active = activeIndex[date] ?? 0;
          const event = dayEvents[active];
          const formattedDate = new Date(date);
          const day = formattedDate.getDate();
          const month = formattedDate.toLocaleString("default", {
            month: "short",
          });
          const dayOfWeek = formattedDate.toLocaleString("default", {
            weekday: "short",
          });

          return (
            <div key={date} className="relative pl-16 pb-10 group">
              {/* Date dot */}
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
              </div>

              {/* Date label with calendar icon */}
              <div className="absolute left-0 -translate-x-1/2 -top-1 z-20">
                <div className="bg-white pl-2 pr-3 py-1 rounded-full shadow-sm border border-gray-100 flex items-center">
                  <CalendarMonthIcon className="w-4 h-4 text-blue-600 mr-1" />
                  <span className="text-sm font-medium text-gray-800">
                    {`${day} ${month}`}
                  </span>
                </div>
              </div>

              {/* Event card */}
              <div className="relative group">
                {/* Subtle outer glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-5 group-hover:opacity-10 blur-sm transition duration-200"></div>

                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  {/* Header with subtle gradient */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBkPSJNMzAwIDBDMTM0LjMgMCAwIDEzNC4zIDAgMzAwczEzNC4zIDMwMCAzMDAgMzAwIDMwMC0xMzQuMyAzMDAtMzAwUzQ2NS43IDAgMzAwIDB6Ii8+PC9zdmc+')] opacity-20"></div>
                    </div>
                    <div className="relative z-10 p-5">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 relative">
                          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-md flex items-center justify-center overflow-hidden">
                            <img
                              className="w-9 h-9 object-contain"
                              src={event.image || "/images/arthniti-logo.png"}
                              alt={`${event.club} logo`}
                            />
                          </div>
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
                          {new Date(date).toLocaleDateString("en-US", {
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
                              e.preventDefault();
                              handleClick(date, dayEvents.length);
                            }}
                            className="inline-flex items-center px-3 py-1.5 border border-blue-100 text-blue-600 text-xs font-medium rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                          >
                            Next Session
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
                          </button>
                        )}
                        <a
                          href="/wings/tatva/subclubs/pixelerate"
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
          );
        })}
      </div>

      {/* Desktop View - Premium Layout */}
      <div className="hidden md:block">
        {Object.entries(grouped).map(([date, dayEvents], i) => {
          const active = activeIndex[date] ?? 0;
          const event = dayEvents[active];
          const isLeft = i % 2 === 0;
          const formattedDate = new Date(date);
          const day = formattedDate.getDate();
          const month = formattedDate.toLocaleString("default", {
            month: "short",
          });
          const dayOfWeek = formattedDate.toLocaleString("default", {
            weekday: "short",
          });

          return (
            <div key={date} className="relative w-full flex items-stretch my-8">
              {/* Left side content */}
              <div className={`w-1/2 px-8 ${isLeft ? "order-1" : "order-3"}`}>
                <div className="h-full flex items-center">
                  <div className="relative group w-full">
                    {/* Subtle outer glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-5 group-hover:opacity-10 blur-sm transition duration-200"></div>

                    <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                      {/* Header with subtle gradient */}
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBkPSJNMzAwIDBDMTM0LjMgMCAwIDEzNC4zIDAgMzAwczEzNC4zIDMwMCAzMDAgMzAwIDMwMC0xMzQuMyAzMDAtMzAwUzQ2NS43IDAgMzAwIDB6Ii8+PC9zdmc+')] opacity-20"></div>
                        </div>
                        <div className="relative z-10 p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 relative">
                              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-md flex items-center justify-center overflow-hidden">
                                <img
                                  className="w-9 h-9 object-contain"
                                  src={
                                    event.image || "/images/arthniti-logo.png"
                                  }
                                  alt={`${event.club} logo`}
                                />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-white leading-tight tracking-tight">
                                {event.title}
                              </h3>
                              <div className="flex items-center mt-2">
                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/20">
                                  {event.club}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-white">
                        <p className="text-gray-700 text-sm leading-relaxed mb-5">
                          {event.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-2">
                            <CalendarMonthIcon className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-gray-600">
                              {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            {dayEvents.length > 1 && (
                              <div className="flex items-center space-x-1.5">
                                {dayEvents.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() =>
                                      setActiveIndex((prev) => ({
                                        ...prev,
                                        [date]: idx,
                                      }))
                                    }
                                    className={`h-1.5 rounded-full transition-all ${
                                      idx === active
                                        ? "w-4 bg-blue-500"
                                        : "w-2 bg-gray-200 hover:bg-blue-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                            {dayEvents.length > 1 ? (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleClick(date, dayEvents.length);
                                }}
                                className="inline-flex items-center px-4 py-2 border border-blue-100 text-blue-600 text-sm font-medium rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                              >
                                Next Session
                                <svg
                                  className="w-3.5 h-3.5 ml-1.5 -mr-0.5"
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
                              </button>
                            ) : (
                              <a
                                href="/wings/tatva/subclubs/pixelerate"
                                className="inline-flex items-center px-4 py-2 border border-blue-100 text-blue-600 text-sm font-medium rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                              >
                                View Details
                                <svg
                                  className="w-3.5 h-3.5 ml-1.5 -mr-0.5"
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
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date circle - Desktop */}
              <div className="w-24 flex flex-col items-center relative order-2">
                <div className="absolute top-0 bottom-0 w-0.5 left-1/2 transform -translate-x-1/2">
                  <div className="h-full bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 w-full"></div>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-lg mx-auto hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-800">{day}</div>
                    <div className="text-xs text-blue-500 font-medium uppercase">
                      {month}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side content - Image - Desktop */}
              <div className={`w-1/2 px-8 ${isLeft ? "order-3" : "order-1"}`}>
                <div className="h-full flex items-center">
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-gray-100 shadow-lg group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={event.image || "/example-image.png"}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-semibold">{event.title}</h4>
                      <p className="text-sm text-blue-100">{event.club}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
