import {
    HtmlIcon,
    CssIcon,
    JsIcon,
    ReactIcon,
    NodeIcon,
    TsIcon,
    MongoIcon,
    RestApiIcon,
    ViteIcon,
    ReduxIcon,
    TailwindIcon,
    ZustandIcon,
    ReactQueryIcon,
    PythonIcon,
    DockerIcon,
    ExpressIcon,
    FirebaseIcon,
    CloudinaryIcon,
} from "../assets/Icons";

import {
    ReadUniverse, PayrollKu, GoodReadsScraper
} from "../assets/Shots";

import {
    ReadUniverseMockup, PayrollKuMockup
} from "../assets/Mockup";


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

const TechInfo = {
    HTML: {
        title: "HTML",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        icon: JsIcon
    },
    React: {
        title: "React",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        icon: TsIcon
    },
    MongoDB: {
        title: "MongoDB",
        icon: MongoIcon
    },
    RESTAPI: {
        title: "REST API",
        icon: RestApiIcon
    },
    Express: {
        title: "Express",
        icon: ExpressIcon
    },
    Vite: {
        title: "Vite",
        icon: ViteIcon
    },
    Redux: {
        title: "Redux",
        icon: ReduxIcon
    },
    TailwindCSS: {
        title: "Tailwind",
        icon: TailwindIcon
    },
    Zustand: {
        title: "Zustand",
        icon: ZustandIcon
    },
    ReactQuery: {
        title: "React Query",
        icon: ReactQueryIcon
    },
    Python: {
        title: "Python",
        icon: PythonIcon
    },
    Docker: {
        title: "Docker",
        icon: DockerIcon
    },
    Firebase: {
        title: "Firebase",
        icon: FirebaseIcon
    },
    Cloudinary: {
        title: "Cloudinary",
        icon: CloudinaryIcon
    },
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "ReadUniverse",
        ShortDesc: "Gamified retail based online bookstore with advanced and rich of feature.",
        Desc: "ReadUniverse is a specialized e-commerce platform designed to modernize conventional book retail businesses and help them reach a wider market. Built on the MERN stack with additional cutting-edge technologies, it provides a dedicated, retail-based solution where each deployment serves a single bookstore or business. The platform combines personalization and interactivity through dynamic recommendations, bestseller highlights, and a gamification system that rewards users with XP, badges, and leaderboard progression for activities like reviews and purchases. To support business growth, an integrated admin dashboard delivers powerful analytics on revenue, user activity, and inventory. With secure authentication, responsive design, and Docker-based containerization, ReadUniverse ensures reliable performance across environments. By merging scalability with tailored retail functionality, it redefines how bookstores can compete in the digital market.",
        Shot: ReadUniverse,
        Mockup: ReadUniverseMockup,
        Theme: "#000",
        Status: "beta",
        Link: "https://read-universe.vercel.app/",
        Source: "https://github.com/Daffariandhika/readuniverse",
        Tech: [
            TechInfo.React,
            TechInfo.TailwindCSS,
            TechInfo.Zustand,
            TechInfo.MongoDB,
            TechInfo.Node,
            TechInfo.Docker,
            TechInfo.Express,
            TechInfo.Firebase,
            TechInfo.Cloudinary,
            TechInfo.ReactQuery
        ],
        features: [
            {
                title: "Gamification",
                description: "Engage users with XP rewards, badges, and leaderboard progression for activities such as reviews, likes, and purchases."
            },
            {
                title: "Review System",
                description: "Rich review and rating features with community engagement, including the ability to like other user reviews."
            },
            {
                title: "Dynamic Catalog",
                description: "Dynamic book recommendations based on user preferred genres, trending, and bestsellers."
            },
            {
                title: "Advanced Filtering",
                description: "Search and filter options by title, category, and author for seamless book discovery."
            },
            {
                title: "Genre Specific Pages",
                description: "Displaying all related book belong to its genre in an organized and intuitive layout."
            },
            {
                title: "Transaction System",
                description: "End to end e-commerce flow with cart, checkout, and automated order handling with payment deadlines."
            },
            {
                title: "Invoice & Order Management",
                description: "Unified order detail pages with dynamic invoices, status tracking, QR code payments, proof of payment uploads, automatic cancellation timers."
            },
            {
                title: "Refund Handling",
                description: "Seamless refund system for users who cancel after payment, ensuring trust and flexibility."
            },
            {
                title: "Order History",
                description: "Full order history with status badges, detailed breakdowns for best trust and transparency."
            },
            {
                title: "Personal Library",
                description: "Organize favorite and purchased books in a personalized digital collection for easy access."
            },
            {
                title: "Profile Management",
                description: "Custom avatars, bio, preferred genres, purchase tracking, and achievement badges for active engagement."
            },
            {
                title: "Admin Dashboard",
                description: "Comprehensive analytics including revenue trends, sales performance, user activity, inventory management, and reporting."
            },
            {
                title: "Notification Center",
                description: "Alerts for order confirmations, shipping updates and other order status update for best trust and transparency."
            }, {
                title: "Cloud Media Management",
                description: "Optimized media delivery through Cloudinary integration for fast loading and high quality book covers."
            },
            {
                title: "Protected Routes & Authorization",
                description: "Token based authentication and identity validation to secure sensitive pages and prevent unauthorized access."
            },
            {
                title: "Containerized Deployment",
                description: "Docker based containerization for consistent development environments, simplified deployment, and scalability."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "PayrollKu",
        ShortDesc: "End-to-end payroll system and tax compliance platform for Indonesian businesses.",
        Desc: "PayrollKu began as a university assignment to create a simple financial application, but quickly evolved into a fully-featured payroll automation platform. Rather than building a basic calculator, I set out to solve a real-world challenge faced by Indonesian businesses: time-consuming, error-prone payroll processing and complex regulatory compliance. Built with the MERN stack, PayrollKu automates the entire payroll lifecycle — from salary calculation to tax compliance — while minimizing manual input. It accurately handles PPh 21 progressive tax, BPJS health and employment contributions, and supports highly customizable salary structures for different employee levels. The platform provides secure role-based access control, automated digital payslip generation with email distribution, advanced reporting dashboards for real-time insights, and Excel export functionality for integration with accounting workflows. The result is a scalable solution that saves HR teams hours of manual work each month, eliminates payroll errors, and ensures compliance with Indonesian tax and labor regulations — going far beyond the original scope of the academic project.",
        Shot: PayrollKu,
        Mockup: PayrollKuMockup,
        Theme: "#fff",
        Status: "development",
        Link: "https://payrollku.netlify.app/",
        Source: "https://github.com/Daffariandhika/payrollku",
        Demo: { "email": "jon@gmail.com", "password": "12345678" },
        Tech: [TechInfo.React, TechInfo.MongoDB, TechInfo.Redux, TechInfo.CSS, TechInfo.Node, TechInfo.RESTAPI],
        features: [
            {
                title: "Advanced Payroll",
                description: "Automates salary processing with PPh 21 calculation, BPJS contributions, allowances, and one off payment."
            },
            {
                title: "Employee Levels",
                description: "Define salary structures with base pay, fixed benefits, and customization applied to employees based on their level."
            },
            {
                title: "Custom Exceptions",
                description: "Easily configure bonuses, overtime, or one-time payments for individual employees, either deduction or bonus."
            },
            {
                title: "Digital Payslips",
                description: "Generate professional, detailed PDF payslips in one click and send them directly to employees via email."
            },
            {
                title: "Analytics Dashboard",
                description: "Interactive dashboard displaying active employees, total tax, bonuses, pensions, either in monthly or yearly chart."
            },
            {
                title: "Advanced Reporting & Export",
                description: "Generate payroll records by month, year, or employee, and export to Excel for audits, tax filing, and financial analysis."
            },
            {
                title: "Access Control",
                description: "Role-based permissions with Super Admin and Admin levels to maintain data security and integrity."
            },
            {
                title: "Responsive Design",
                description: "Optimized for desktop, tablet, and mobile devices, ensuring a seamless experience across all screen sizes."
            }
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "GoodReads Scraper",
        ShortDesc: "Comprehensive data scraper with multi format output and pagination handling.",
        Desc: "GoodReads Scraper is a robust Python-based data collection tool built to extract structured book metadata from Goodreads. Originally developed to seed the database for my ReadUniverse project, it automates the process of gathering large volumes of book data — including titles, authors, descriptions, ISBNs, publication dates, categories, ratings, and reviews. The scraper includes configurable options for URL batching, rate limiting, and multiple output formats, ensuring efficient, scalable, and respectful data collection. This project showcases my ability to build practical tools that support real-world development needs and streamline the process of populating complex databases with high-quality dummy data.",
        Shot: GoodReadsScraper,
        Mockup: PayrollKuMockup,
        Theme: "#000",
        Status: "completed",
        Link: "https://goodreadsscraper.vercel.app/",
        Source: "https://github.com/daffariandhika/goodreads-scraper",
        Tech: [TechInfo.Python],
        features: [
            {
                title: "Targeted URL Collection",
                description: "Gather book URLs from specific Goodreads shelves, search results, or lists with configurable limits and flexible export options."
            },
            {
                title: "Comprehensive Metadata",
                description: "Scrape detailed book data including titles, authors, descriptions, ISBNs, publication dates, genres, ratings, and reviews."
            },
            {
                title: "Ethical Scraping",
                description: "Built-in configurable delays between requests to respect Goodreads’ servers and minimize the risk of IP blocking."
            },
            {
                title: "Flexible Output",
                description: "Export results in JSON or CSV formats for seamless integration with databases, analytics pipelines, or development seeding."
            },
            {
                title: "Development-Ready Fields",
                description: "Automatically generate additional dummy fields such as price, stock, and likes to support testing and database seeding."
            },
            {
                title: "Modular Design",
                description: "Clean separation between URL collection and data extraction modules for easy customization and maintenance."
            }
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
]