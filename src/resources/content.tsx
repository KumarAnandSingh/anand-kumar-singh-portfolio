import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Anand Kumar",
  lastName: "Singh",
  name: `Anand Kumar Singh`,
  role: "Senior Product Manager - AI/ML & Supply Chain Innovation",
  avatar: "/images/avatar.jpg",
  email: "singhanand779@gmail.com",
  location: "Asia/Kolkata",
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
    link: "https://github.com/anandsingh005",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anandsingh005/",
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
  headline: <>Leading AI/ML innovation in enterprise products & supply chain solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">JioMeet Platform</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/jio-platforms",
  },
  subline: (
    <>
      I'm Anand Kumar Singh, a Senior Product Manager with 7+ years of experience building
      <br /> AI-powered enterprise solutions that serve 10M+ users globally. I specialize in supply chain optimization,
      <br /> data analytics, and cross-functional team leadership across international markets.
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
        Anand Kumar Singh is an experienced Senior Product Manager with 7+ years of proven success
        in product roadmap development, supply chain optimization, and data-driven decision making.
        Expert in leveraging AI/ML technologies, analytics tools, and cross-functional collaboration
        to deliver innovative enterprise solutions serving 10M+ global customers. Strong background
        in international team management and complex supply chain initiatives.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Jio Platforms Limited",
        timeframe: "March 2022 - Present",
        role: "Product Manager-II",
        achievements: [
          <>
            Spearheaded development of JioMeet Video Conferencing SaaS Platform serving 10+ million
            global customers with consistent UX enhancements, demonstrating scalability in high-volume
            enterprise environments.
          </>,
          <>
            Pioneered JioEvents virtual collaboration platform for 100,000+ users, optimizing supply
            chain for virtual event management and resource allocation.
          </>,
          <>
            Developed and launched JioChargeIT payment/subscription management platform with 10,000+
            active customers, implementing data-driven pricing strategies and cost optimization algorithms.
          </>,
          <>
            Led international collaboration initiatives across geographic boundaries, managing distributed
            teams and global product development objectives aligned with supply chain efficiency.
          </>,
          <>
            Implemented predictive analytics and data visualization solutions using Python and SQL to
            optimize resource allocation and supply forecasting, reducing operational costs by 25%.
          </>,
        ],
        images: [],
      },
      {
        company: "Samsung R&D Institute Delhi",
        timeframe: "October 2019 - March 2022",
        role: "Product Manager",
        achievements: [
          <>
            Managed multi-display product development including TVs and signage displays on Samsung
            Tizen OS platform, coordinating global supply chain operations across multiple regions.
          </>,
          <>
            Conducted extensive market research and competitive analysis using data analytics tools,
            aligning product features with customer requirements and international market trends.
          </>,
          <>
            Successfully led complete product lifecycle from planning to release, ensuring timely delivery
            while optimizing procurement processes and supplier relationships.
          </>,
          <>
            Collaborated with cross-functional teams across Asia-Pacific region to streamline operations
            and reduce time-to-market by 30%.
          </>,
        ],
        images: [],
      },
      {
        company: "OPPO India",
        timeframe: "January 2017 - September 2019",
        role: "Product Development Manager",
        achievements: [
          <>
            Contributed to development and project management of mobile device applications, enhancing
            user experience while optimizing manufacturing and supply chain processes.
          </>,
          <>
            Implemented data-driven decision making processes for product development using analytics tools
            and managed vendor relationships for component sourcing across international markets.
          </>,
          <>
            Applied early AI/ML concepts for user behavior analysis and product feature optimization,
            contributing to improved user engagement and product performance.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Indian School of Business (ISB), Hyderabad",
        description: <>Professional Certificate in Advanced Product Management (May 2023 - November 2023). Specialized coursework in Data Analytics, AI in Product Management, Supply Chain Optimization, and International Business Strategy.</>,
      },
      {
        name: "Amity University, Noida",
        description: <>Bachelor of Technology - Electrical and Electronics Engineering (July 2013 - July 2017). Relevant coursework in Systems Engineering, Data Analysis, Process Optimization, and Project Management.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Data Analytics & Programming",
        description: (
          <>Advanced proficiency in SQL, Python, Power BI, and Tableau for data-driven decision making and predictive analytics.</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Power BI",
            icon: "bar-chart",
          },
          {
            name: "Tableau",
            icon: "bar-chart",
          },
        ],
        images: [],
      },
      {
        title: "AI/ML & Enterprise Solutions",
        description: (
          <>Expert in machine learning algorithms, LLM ecosystems, RAG pipelines, and predictive analytics for enterprise applications.</>
        ),
        tags: [
          {
            name: "AI/ML",
            icon: "openai",
          },
          {
            name: "Machine Learning",
            icon: "cpu",
          },
          {
            name: "Data Science",
            icon: "chart",
          },
          {
            name: "LLMs",
            icon: "openai",
          },
        ],
        images: [],
      },
      {
        title: "Product Management & Strategy",
        description: (
          <>Agile/Scrum methodologies, SDLC management, supply chain optimization, and international business operations across multiple regions.</>
        ),
        tags: [
          {
            name: "Agile",
            icon: "refresh",
          },
          {
            name: "Product Strategy",
            icon: "target",
          },
          {
            name: "Supply Chain",
            icon: "link",
          },
          {
            name: "Analytics",
            icon: "chart",
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
