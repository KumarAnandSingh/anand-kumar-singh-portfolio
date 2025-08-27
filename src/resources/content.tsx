import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Priya",
  lastName: "Singh",
  name: `Priya Singh`,
  role: "AI Product Manager & Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "priya.singh@example.com",
  location: "America/Los_Angeles",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on AI product development and engineering innovation</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/priyasingh",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/priya-singh",
  },
  {
    name: "Website",
    icon: "globe",
    link: "https://singhanand.qzz.io",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building AI-powered products that transform user experiences</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Vaani AI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/vaani-ai-voice-transcription",
  },
  subline: (
    <>
      I'm Priya, an AI Product Manager and Full-Stack Developer passionate about building
      <br /> intelligent applications that solve real-world problems. I specialize in voice AI,
      <br /> automation tools, and scalable web platforms.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} specializing in AI and product development`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Priya is a passionate AI Product Manager and Full-Stack Developer with expertise in
        building intelligent applications that solve real-world problems. With a strong background
        in voice AI, automation tools, and scalable web platforms, she transforms complex
        technical challenges into user-friendly solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Independent Developer",
        timeframe: "2023 - Present",
        role: "AI Product Manager & Full-Stack Developer",
        achievements: [
          <>
            Built Vaani AI, a real-time voice transcription app with 55+ languages support,
            deployed as both web and desktop applications using React and Tauri.
          </>,
          <>
            Developed Auto Jobs Applier AIHawk, an AI-powered job application automation tool
            using Python, Selenium, and LLM APIs, helping users streamline their job search process.
          </>,
          <>
            Created multiple AI-powered web platforms including modern news platforms, security
            operations dashboards, and telecom AI interfaces.
          </>,
        ],
        images: [],
      },
      {
        company: "Product Development",
        timeframe: "2022 - 2023",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Designed and implemented comprehensive AI agent systems for enterprise clients,
            including security analysts, product managers, and automation engineers.
          </>,
          <>
            Built scalable web applications using Next.js, React, and modern deployment
            practices, serving thousands of users with 99.9% uptime.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Self-Directed Learning",
        description: <>Specialized in AI/ML technologies, voice processing, and modern web development.</>,
      },
      {
        name: "Open Source Contributions",
        description: <>Active contributor to AI and automation projects, with focus on practical applications.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI & Voice Processing",
        description: (
          <>Expert in voice-to-text transcription, Web Speech API, Whisper, and Deepgram integration for real-time applications.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "AI/ML",
            icon: "openai",
          },
          {
            name: "Voice AI",
            icon: "microphone",
          },
        ],
        images: [],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>Building scalable applications with React, Next.js, TypeScript, Tauri, and modern deployment practices.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Tauri",
            icon: "tauri",
          },
        ],
        images: [],
      },
      {
        title: "Automation & AI Tools",
        description: (
          <>Specializing in browser automation with Selenium, LLM integration, and AI-powered workflow optimization.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Selenium",
            icon: "selenium",
          },
          {
            name: "OpenAI",
            icon: "openai",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI and full-stack projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
