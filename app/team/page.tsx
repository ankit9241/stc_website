import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const coreTeam = [
  {
    name: "Gautam Kumar",
    designation: "President",
    department: "Technology Club",
    image: "/placeholder.svg?height=300&width=300",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Aryan Singh",
    designation: "Vice President",
    department: "Technology Club",
    image: "/placeholder.svg?height=300&width=300",
    email: "aryan.singh@iitp.ac.in",
    linkedin: "#",
  },
  {
    name: "Ritu Raj",
    designation: "General Secretary",
    department: "Technology Club",
    image: "/placeholder.svg?height=300&width=300",
    email: "ritu.raj@iitp.ac.in",
    linkedin: "#",
  },
  {
    name: "Hridyanand Gupta",
    designation: "Tresurer",
    department: "Technology Club",
    image: "/placeholder.svg?height=300&width=300",
    email: "hridyanand.gupta@iitp.ac.in",
    linkedin: "#",
  },
]

const teamMembers = [
  // Creatives Team Members
  {
    name: "Shivam Kumar",
    designation: "Graphic Designer",
    department: "Creatives Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "shivam.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },
  {
    name: "Sudhanshu Kumar",
    designation: "Graphic Designer",
    department: "Creatives Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "sudhanshu.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },
  {
    name: "Shashank Bharti",
    designation: "Graphic Designer",
    department: "Creatives Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "shashank.bharti@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },
  {
    name: "Badal Raj",
    designation: "UX Mentor",
    department: "Creatives Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "badal.raj@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },
  {
    name: "Akshay Bolan",
    designation: "Graphic Designer",
    department: "Creatives Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "akshay.bolan@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },
  {
    name: "Yuvraj",
    designation: "Video Editor",
    department: "Creatives Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "yuvraj@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },
  {
    name: "Aryan Kumar",
    designation: "Video Editor",
    department: "Creatives Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "aryan.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },

  // PR and External Team Members
  {
    name: "Krishna Mittal",
    designation: "PR Team Member",
    department: "PR & External Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "krishna.mittal@iitp.ac.in",
    linkedin: "#",
    team: "PR & External",
  },
  {
    name: "Kriti Kri. Bhalotiya",
    designation: "PR Team Member",
    department: "PR & External Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "kriti.bhalotiya@iitp.ac.in",
    linkedin: "#",
    team: "PR & External",
  },
  {
    name: "Prateek Sharma",
    designation: "PR Team Member",
    department: "PR & External Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "prateek.sharma@iitp.ac.in",
    linkedin: "#",
    team: "PR & External",
  },

  // Event & Management Team Members
  {
    name: "Alquama",
    designation: "Onsite Manager",
    department: "Event & Management Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "alquama@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },
  {
    name: "Shaibu",
    designation: "Onsite & Outreach",
    department: "Event & Management Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "shaibu@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },
  {
    name: "Tushar Parihar",
    designation: "Management",
    department: "Event & Management Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "tushar.parihar@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },
  {
    name: "Hrishikesh Nayak",
    designation: "Audience & Outreach",
    department: "Event & Management Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "hrishikesh.nayak@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },
  {
    name: "Harshit",
    designation: "Support Crew",
    department: "Event & Management Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "harshit@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },
  {
    name: "Aadarsh Gopal Kumar",
    designation: "Management",
    department: "Event & Management Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "aadarsh.gopal@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },
  {
    name: "Krishna Kumar",
    designation: "Management",
    department: "Event & Management Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "krishna.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },

  // Finance Team Members
  {
    name: "Shivansh Verma",
    designation: "Finance & Management",
    department: "Finance Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "shivansh.verma@iitp.ac.in",
    linkedin: "#",
    team: "Finance",
  },
  {
    name: "Rishabh Yadav",
    designation: "Finance & Management",
    department: "Finance Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "rishabh.yadav@iitp.ac.in",
    linkedin: "#",
    team: "Finance",
  },

  // WebWiser Team Members
  {
    name: "Mohammad Hasan",
    designation: "Web Developer",
    department: "WebWiser Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "mohammad.hasan@iitp.ac.in",
    linkedin: "#",
    team: "WebWiser",
  },
  {
    name: "Anupriya Kumari",
    designation: "Web Developer",
    department: "WebWiser Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "anupriya.kumari@iitp.ac.in",
    linkedin: "#",
    team: "WebWiser",
  },
  {
    name: "Sanu Kumar",
    designation: "Web Developer",
    department: "WebWiser Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "sanu.kumar@iitp.ac.in",
    linkedin: "#",
    team: "WebWiser",
  },
  {
    name: "Vatsal Srivastava",
    designation: "Web Developer",
    department: "WebWiser Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "vatsal.srivastava@iitp.ac.in",
    linkedin: "#",
    team: "WebWiser",
  },

  // Pixelerate Team Members
  {
    name: "Tannu",
    designation: "UI/UX Designer",
    department: "Pixelerate Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "tannu@iitp.ac.in",
    linkedin: "#",
    team: "Pixelerate",
  },

  // Coding & CP Team Members
  {
    name: "Ansh Raj",
    designation: "Competitive Programmer",
    department: "Coding & CP Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "ansh.raj@iitp.ac.in",
    linkedin: "#",
    team: "Coding & CP",
  },
  {
    name: "Rahul Raj",
    designation: "Competitive Programmer",
    department: "Coding & CP Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "rahul.raj@iitp.ac.in",
    linkedin: "#",
    team: "Coding & CP",
  },

  // Synapse Team Members
  {
    name: "Purnasha Priya",
    designation: "AI/ML Developer",
    department: "Synapse Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "purnasha.priya@iitp.ac.in",
    linkedin: "#",
    team: "Synapse",
  },
  {
    name: "Ashank Gupta",
    designation: "AI/ML Developer",
    department: "Synapse Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "ashank.gupta@iitp.ac.in",
    linkedin: "#",
    team: "Synapse",
  },

  // Analytical Arena Team Members
  {
    name: "Rajeev Kumar",
    designation: "Data Scientist",
    department: "Analytical Arena Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "rajeev.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Analytical Arena",
  },
  {
    name: "Anurag Varma",
    designation: "Data Scientist",
    department: "Analytical Arena Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "anurag.varma@iitp.ac.in",
    linkedin: "#",
    team: "Analytical Arena",
  },
  {
    name: "Alok Ranjan",
    designation: "Data Scientist",
    department: "Analytical Arena Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "alok.ranjan@iitp.ac.in",
    linkedin: "#",
    team: "Analytical Arena",
  },
  {
    name: "Aditya Mahto",
    designation: "Data Scientist",
    department: "Analytical Arena Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "aditya.mahto@iitp.ac.in",
    linkedin: "#",
    team: "Analytical Arena",
  },
  {
    name: "Gaurav Kumar",
    designation: "Data Scientist",
    department: "Analytical Arena Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "gaurav.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Analytical Arena",
  },

  // Cybersecurity Team Members
  {
    name: "Goutam Kr. Sah",
    designation: "Cybersecurity Specialist",
    department: "Cybersecurity Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "goutam.sah@iitp.ac.in",
    linkedin: "#",
    team: "Cybersecurity",
  },
  {
    name: "Hariom Kumar",
    designation: "Cybersecurity Specialist",
    department: "Cybersecurity Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "hariom.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Cybersecurity",
  },

  // App Dev Team Members
  {
    name: "Aditya Kumar",
    designation: "App Developer",
    department: "App Dev Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "aditya.kumar@iitp.ac.in",
    linkedin: "#",
    team: "App Dev",
  },
  {
    name: "Rishabh Raj",
    designation: "App Developer",
    department: "App Dev Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "rishabh.raj@iitp.ac.in",
    linkedin: "#",
    team: "App Dev",
  },

  // Session & Webinar Team Members
  {
    name: "Vikas Kr. Garg",
    designation: "Session Coordinator",
    department: "Session & Webinar Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "vikas.garg@iitp.ac.in",
    linkedin: "#",
    team: "Session & Webinar",
  },
  {
    name: "Sumit Kr. Thakur",
    designation: "Session Coordinator",
    department: "Session & Webinar Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "sumit.thakur@iitp.ac.in",
    linkedin: "#",
    team: "Session & Webinar",
  },

  // Hackathon Team Members
  {
    name: "Ritik Kumar",
    designation: "Hackathon Organizer",
    department: "Hackathon Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "ritik.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Hackathon",
  },
  {
    name: "Arya Singh",
    designation: "Hackathon Organizer",
    department: "Hackathon Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "arya.singh@iitp.ac.in",
    linkedin: "#",
    team: "Hackathon",
  },

  // Tech News Team Members
  {
    name: "Shreya Anand",
    designation: "Content Writer",
    department: "Tech News Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "shreya.anand@iitp.ac.in",
    linkedin: "#",
    team: "Tech News",
  },
  {
    name: "Rishik Kr. Chaurasiya",
    designation: "Content Writer",
    department: "Tech News Team",
    image: "/placeholder.svg?height=300&width=300",
    email: "rishik.chaurasiya@iitp.ac.in",
    linkedin: "#",
    team: "Tech News",
  },
]

const teamLeads = [
  // Creatives Team
  {
    name: "Satyam Kumar",
    designation: "Creatives Team Lead",
    department: "Graphic Design",
    image: "/placeholder.svg?height=300&width=300",
    email: "satyam.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },
  {
    name: "Sahil Kumar",
    designation: "Creatives Team Co-Lead",
    department: "Graphic Design",
    image: "/placeholder.svg?height=300&width=300",
    email: "sahil.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Creatives",
  },

  // PR and External Team
  {
    name: "Sahil Raj",
    designation: "PR & External Coordinator",
    department: "Public Relations",
    image: "/placeholder.svg?height=300&width=300",
    email: "sahil.raj@iitp.ac.in",
    linkedin: "#",
    team: "PR & External",
  },
  {
    name: "Krishan Raj",
    designation: "PR & External Sub-Coordinator",
    department: "Public Relations",
    image: "/placeholder.svg?height=300&width=300",
    email: "krishan.raj@iitp.ac.in",
    linkedin: "#",
    team: "PR & External",
  },

  // Event & Management Team
  {
    name: "Shubhanshu",
    designation: "Event & Management Lead",
    department: "Event Management",
    image: "/placeholder.svg?height=300&width=300",
    email: "shubhanshu@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },
  {
    name: "Aayush Kumar",
    designation: "Event & Management Co-Lead",
    department: "Event Management",
    image: "/placeholder.svg?height=300&width=300",
    email: "aayush.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Event & Management",
  },

  // Finance Team
  {
    name: "Ayush Jha",
    designation: "Finance Team Lead",
    department: "Finance & Management",
    image: "/placeholder.svg?height=300&width=300",
    email: "ayush.jha@iitp.ac.in",
    linkedin: "#",
    team: "Finance",
  },
  {
    name: "Aditya Ghosh",
    designation: "Finance Team Co-Lead",
    department: "Finance & Management",
    image: "/placeholder.svg?height=300&width=300",
    email: "aditya.ghosh@iitp.ac.in",
    linkedin: "#",
    team: "Finance",
  },
]

const technicalLeads = [
  // WebWiser (Web Dev) Team
  {
    name: "Hridyanand Gupta",
    designation: "WebWiser Coordinator",
    department: "Web Development",
    image: "/placeholder.svg?height=300&width=300",
    email: "hridyanand.gupta@iitp.ac.in",
    linkedin: "#",
    team: "WebWiser",
  },
  {
    name: "Mohit Kumar",
    designation: "WebWiser Sub-Coordinator",
    department: "Web Development",
    image: "/placeholder.svg?height=300&width=300",
    email: "mohit.kumar@iitp.ac.in",
    linkedin: "#",
    team: "WebWiser",
  },

  // Pixelerate (UI/UX) Team
  {
    name: "Aryan Singh",
    designation: "Pixelerate Coordinator",
    department: "UI/UX Design",
    image: "/placeholder.svg?height=300&width=300",
    email: "aryan.singh@iitp.ac.in",
    linkedin: "#",
    team: "Pixelerate",
  },
  {
    name: "Pratap Kr. Singh",
    designation: "Pixelerate Sub-Coordinator",
    department: "UI/UX Design",
    image: "/placeholder.svg?height=300&width=300",
    email: "pratap.singh@iitp.ac.in",
    linkedin: "#",
    team: "Pixelerate",
  },

  // Coding and CP Team
  {
    name: "Ramdeep Singh",
    designation: "Coding & CP Coordinator",
    department: "Competitive Programming",
    image: "/placeholder.svg?height=300&width=300",
    email: "ramdeep.singh@iitp.ac.in",
    linkedin: "#",
    team: "Coding & CP",
  },
  {
    name: "Abhijeet Kumar",
    designation: "Coding & CP Sub-Coordinator",
    department: "Competitive Programming",
    image: "/placeholder.svg?height=300&width=300",
    email: "abhijeet.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Coding & CP",
  },

  // Synapse (AI/ML/DL) Team
  {
    name: "Ankit Kumar",
    designation: "Synapse Coordinator",
    department: "AI/ML/Deep Learning",
    image: "/placeholder.svg?height=300&width=300",
    email: "ankit.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Synapse",
  },
  {
    name: "Harsh Kumar",
    designation: "Synapse Sub-Coordinator",
    department: "AI/ML/Deep Learning",
    image: "/placeholder.svg?height=300&width=300",
    email: "harsh.kumar@iitp.ac.in",
    linkedin: "#",
    team: "Synapse",
  },

  // Analytical Arena (Data Science) Team
  {
    name: "Alok Kr. Choudhary",
    designation: "Analytical Arena Coordinator",
    department: "Data Science",
    image: "/placeholder.svg?height=300&width=300",
    email: "alok.choudhary@iitp.ac.in",
    linkedin: "#",
    team: "Analytical Arena",
  },
  {
    name: "Shruti Kumari",
    designation: "Analytical Arena Sub-Coordinator",
    department: "Data Science",
    image: "/placeholder.svg?height=300&width=300",
    email: "shruti.kumari@iitp.ac.in",
    linkedin: "#",
    team: "Analytical Arena",
  },

  // Cybersecurity Team
  {
    name: "Piyush Bhuyan",
    designation: "Cybersecurity Coordinator",
    department: "Cybersecurity",
    image: "/placeholder.svg?height=300&width=300",
    email: "piyush.bhuyan@iitp.ac.in",
    linkedin: "#",
    team: "Cybersecurity",
  },
  {
    name: "Vishnu Kr. Dhoni",
    designation: "Cybersecurity Sub-Coordinator",
    department: "Cybersecurity",
    image: "/placeholder.svg?height=300&width=300",
    email: "vishnu.dhoni@iitp.ac.in",
    linkedin: "#",
    team: "Cybersecurity",
  },

  // App Dev Team
  {
    name: "Aaditya Sah",
    designation: "App Dev Coordinator",
    department: "Mobile App Development",
    image: "/placeholder.svg?height=300&width=300",
    email: "aaditya.sah@iitp.ac.in",
    linkedin: "#",
    team: "App Dev",
  },
  {
    name: "Aditya Prakash",
    designation: "App Dev Sub-Coordinator",
    department: "Mobile App Development",
    image: "/placeholder.svg?height=300&width=300",
    email: "aditya.prakash@iitp.ac.in",
    linkedin: "#",
    team: "App Dev",
  },
]

const specializedTeams = [
  // Session & Webinar Team
  {
    name: "Kumar Aayush",
    designation: "Session & Webinar Coordinator",
    department: "Educational Programs",
    image: "/placeholder.svg?height=300&width=300",
    email: "kumar.aayush@iitp.ac.in",
    linkedin: "#",
    team: "Session & Webinar",
  },
  {
    name: "Swastika Shukla",
    designation: "Session & Webinar Sub-Coordinator",
    department: "Educational Programs",
    image: "/placeholder.svg?height=300&width=300",
    email: "swastika.shukla@iitp.ac.in",
    linkedin: "#",
    team: "Session & Webinar",
  },

  // Hackathon Team
  {
    name: "Ritu Raj",
    designation: "Hackathon Coordinator",
    department: "Competitive Events",
    image: "/placeholder.svg?height=300&width=300",
    email: "ritu.raj@iitp.ac.in",
    linkedin: "#",
    team: "Hackathon",
  },
  {
    name: "Prakriti Tripathi",
    designation: "Hackathon Sub-Coordinator",
    department: "Competitive Events",
    image: "/placeholder.svg?height=300&width=300",
    email: "prakriti.tripathi@iitp.ac.in",
    linkedin: "#",
    team: "Hackathon",
  },

  // Tech News Team
  {
    name: "Udit Raj",
    designation: "Tech News Coordinator",
    department: "Content & Media",
    image: "/placeholder.svg?height=300&width=300",
    email: "udit.raj@iitp.ac.in",
    linkedin: "#",
    team: "Tech News",
  },
  {
    name: "Shakshi Kumari",
    designation: "Tech News Sub-Coordinator",
    department: "Content & Media",
    image: "/placeholder.svg?height=300&width=300",
    email: "shakshi.kumari@iitp.ac.in",
    linkedin: "#",
    team: "Tech News",
  },
]

function TeamMemberCard({ member }: { member: any }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardContent className="p-6 text-center">
        <div className="relative mb-4">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-semibold mb-1">{member.designation}</p>
        <p className="text-gray-600 text-sm mb-4">{member.department}</p>
        {member.team && (
          <p className="text-xs text-gray-500 mb-4 bg-gray-100 rounded-full px-3 py-1 inline-block">
            {member.team} Team
          </p>
        )}
        <div className="flex justify-center space-x-3">
          <Link
            href={`mailto:${member.email}`}
            className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
          >
            <Mail className="w-4 h-4 text-blue-600" />
          </Link>
          <Link href={member.linkedin} className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
            <Linkedin className="w-4 h-4 text-blue-600" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Meet the dedicated individuals who lead the Student Technical Council and drive innovation across our three wings and
              specialized teams.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Leadership Team</h2>
            <p className="text-xl text-gray-600">
              The executive leadership providing strategic direction and governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
      <div>
        <div className="flex flex-col items-center justify-center py-16 relative">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
        More Positions Coming Soon
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
          </h2>
          <p className="text-gray-500 text-base">Stay tuned for updates!</p>
        </div>
      </div>
      {/* Contact CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Connect with Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help with any questions about participation, collaboration, or Student Technical Council activities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
