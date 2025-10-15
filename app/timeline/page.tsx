import Timeline from "@/components/Timeline";

export default function TimelinePage() {
  const events = [
    { 
      title: "Inaugural Ceremony & Keynote", 
      description: "Kick off with inspiring keynotes from industry leaders, followed by a cultural performance and networking dinner. A perfect start to connect with peers and mentors.", 
      date: "2025-10-15",
      club: "STC"
    },
    { 
      title: "UI/UX Design Masterclass", 
      description: "Hands-on workshop covering design principles, prototyping with Figma, and portfolio reviews. Learn from experts and enhance your design thinking skills.", 
      date: "2025-10-15",
      club: "Pixelerate"
    },
    { 
      title: "Frontend Development Hackathon", 
      description: "24-hour coding challenge to build web apps using React/Next.js. Win prizes in categories like Best Design and Most Innovative Solution with mentor support throughout.", 
      date: "2025-10-17",
      club: "Web Wiser"
    },
    { 
      title: "Industry Leaders Panel & Networking", 
      description: "Engage with industry professionals through panel discussions and speed networking. Includes mentorship matching and personal branding workshops.", 
      date: "2025-10-19",
      club: "Professional Development"
    },
    { 
      title: "Grand Finale & Awards", 
      description: "Showcase your projects to judges, attend the award ceremony, and celebrate achievements with fellow participants at the closing dinner.", 
      date: "2025-10-20",
      club: "STC"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event <span className="text-blue-600">Timeline</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our journey through the key events and sessions we have planned for you.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <Timeline events={events} />
        </div>
      </div>
    </main>
  );
}
