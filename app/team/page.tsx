"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Metadata must be in a server component
// This will be handled by the layout or page component

const coreTeam = [
  {
    name: "Gautam Kumar",
    designation: "President",
    department: "Student Technical Council - CEP",
    image: "/gautam.png",
    email: "gautam_2312res266@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/gautamkumar266/",
    description:
      "Leading STC's vision and driving innovation across all wings. Passionate about entrepreneurship and technology.",
  },
  {
    name: "Aryan Singh",
    designation: "Vice President",
    department: "Student Technical Council - CEP",
    image: "/aryan.png",
    email: "aryan_2312res179@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/aryan-singh-358556245/",
    description:
      "Overseeing technical initiatives and research projects. Expert in competitive programming and AI.",
  },
  {
    name: "Ritu Raj",
    designation: "General Secretary",
    department: "Student Technical Council - CEP",
    image: "/Ritu.png",
    email: "ritu_2312res532@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/ritu-raj-9321b5294/",
    description:
      "Managing operations and career development programs. Focused on bridging academia and industry.",
  },
  {
    name: "Hridyanand Gupta",
    designation: "Treasurer",
    department: "Student Technical Council - CEP",
    image: "/hridyanand.png",
    email: "hridayanand_2312res301@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/hridayanand-gupta-abb501304/",
    description:
      "Managing financial operations and budget planning. Expertise in financial modeling and analysis.",
  },
];

const councilMembers = [
  {
    name: "Tushar Parihar",
    designation: "Council Head",
    department: "Student Technical Council - CEP",
    image: "/tushar.png",
    email: "tushar_2312res704@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/tushar-parihar-87168a34a/",
    description:
      "Leading the Student Technical Council to foster innovation, technical excellence, and student growth across IIT Patna.",
  },
  {
    name: "Satyam Kumar",
    designation: "Editor in Chief",
    department: "Student Technical Council - CEP",
    image: "/satyam.png",
    email: "satyam_24a12res597@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/satyamkumariitp/",
    description:
      "Overseeing editorial content and communications. Skilled in technical writing and media relations.",   
  },
  {
    name: "Ayush Jha",
    designation: "Overall Management Lead",
    department: "Student Technical Council - CEP",
    image: "/ayush-jha.png",
    email: "ayush_2312res211@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/ayush1979/",
    description:
      "Coordinating overall management and strategic planning. Experienced in project management and leadership.",
  },
  {
    name: "Kumar Aayush",
    designation: "Tatva Cell Head",
    department: "Student Technical Council - CEP",
    image: "/aayush.png",
    email: "aayush_2312res805@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/kumar-aayush-772973332/",
    description:
      "Leading the Tatva Cell and coordinating its activities. Skilled in event management and team leadership.",
  },
  {
    name: "Kanishk Arya",
    designation: "Disha Cell Head",
    department: "Student Technical Council - CEP",
    image: "/kanishk.png",
    email: "kanishk_2312res322@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/kanishk-arya-a47a70283/",
    description:
      "Heading the Training & Placement Cell with a mission to empower students with opportunities and professional readiness.",
  },
  {
    name: "Raunak Verma",
    designation: "Arthniti Cell Head",
    department: "Student Technical Council - CEP",
    image: "/raunak.png",
    email: "raunak_24a11res65@iitp.ac.in",
    linkedin: "https://www.linkedin.com/in/raunak-verma-7b365a2a3/",
    description:
      "Leading the Arthniti Cell and coordinating its activities. Skilled in financial analysis and team leadership.",
  }
]

const _teamMembers = [
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
];

const _teamLeads = [
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
];

const _technicalLeads = [
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
];

const _specializedTeams = [
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
];

interface TeamMember {
  name: string;
  designation: string;
  department: string;
  image: string;
  email: string;
  linkedin: string;
  team?: string;
  description?: string;
}

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  // Generate colors based on index for variety
  const colorThemes = [
    { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-500" },
    { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-500" },
    { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-500" },
    { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-500" },
  ];
  const colors = colorThemes[index % colorThemes.length];

  return (
    <motion.div
      key={index}
      className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>


      <div className="relative z-10 p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Avatar */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg group-hover:shadow-xl transform transition-all duration-500 group-hover:scale-105">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = document.createElement("div");
                  fallback.className = `w-full h-full flex items-center justify-center ${colors.bg}`;
                  fallback.textContent = member.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("");
                  fallback.style.color = "white";
                  fallback.style.fontWeight = "bold";
                  fallback.style.fontSize = "2rem";
                  target.parentNode?.insertBefore(fallback, target.nextSibling);
                }}
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center ${colors.bg} text-white font-bold text-4xl`}
              >
                {member.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-2">
              <h3
                className="text-2xl font-bold text-[#2e86c1] mb-1 group-hover:translate-x-1 transition-transform duration-300"
              >
                {member.name}
              </h3>
              <p className="text-lg font-medium text-muted-foreground mb-1">
                {member.designation}
              </p>
              <p className="text-sm font-semibold text-[#2e86c1] mb-4 inline-block px-3 py-1 rounded-full bg-[#e8f1f8] bg-opacity-80">
                {member.department}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed border-l-2 border-gray-200 pl-4 italic">
                "{member.description}"
              </p>
            </div>

            {member.team && (
              <p className="text-muted-foreground mb-6 leading-relaxed border-l-2 border-gray-200 pl-4 italic">
                {member.team} Team
              </p>
            )}

            {/* Contact Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={`mailto:${member.email}`}
                className="p-3 bg-[#e8f1f8] hover:bg-[#d4e5f5] text-[#2e86c1] rounded-lg transition-colors duration-300"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={member.linkedin}
                className="p-3 bg-[#e8f1f8] hover:bg-[#d4e5f5] text-[#2e86c1] rounded-lg transition-colors duration-300"
                aria-label={`${member.name}'s LinkedIn`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Meet the dedicated individuals who lead the Student Technical
              Council and drive innovation across our three wings and
              specialized teams.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              The executive leadership providing strategic direction and
              governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* council Team */}
       <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Council Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the council team of Student Technical Council IIT Patna Hybrid Programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {councilMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Connect with Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help with any questions about participation,
            collaboration, or Student Technical Council activities.
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
  );
}
