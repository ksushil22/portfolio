import React from "react";
import cn from "@/pages/utils/cn";

export const Highlight = ({
                              children,
                              className,
                          }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
      {children}
    </span>
    );
};

const Experience = ({
    heading,
    duration,
    accomplishements
}:{
    heading: string,
    duration: string,
    accomplishements: React.JSX.Element[]
}) => {
    return <div className={"rounded-2xl p-10 text-white bg-teal-800 left-[20%] min-h-[70vh]"}>
        <Heading>{heading}</Heading>
        <Duration>{duration}</Duration>
        <hr />
        <h1 className={"text-xl text-center"} style={{
            marginTop: 30
        }}>Accomplishments:</h1>
        <Accomplishments accomplishments={accomplishements} />
    </div>
};
export const Heading = ({children}: {children: React.ReactNode}) => {
    return <h1 className={"text-2xl text-center font-bold"}>{children}</h1>
};

const Duration = ({children}: {children: React.ReactNode}) => {
    return <h1 className={"text-xl text-center"}>{children}</h1>
};

export const Accomplishments = ({accomplishments}: {accomplishments: React.JSX.Element[]}) => {
    return <ol style={{
        position: 'relative',
        top: 20
    }}>
        {accomplishments?.map((accomplishment, index) => {
            return <li key={index}
                style={{
                position: 'relative',
                marginLeft: '20%',
                marginRight: '20%',
                marginTop: 10
            }}>{accomplishment}</li>
        })}
    </ol>

};
export const PRODUCTS = [
    {
        title: "C#",
        link: "https://gomoonbeam.com",
        thumbnail:
            "/cs.png",
    },
    {
        title: "Python",
        link: "https://google.com",
        thumbnail:
            "/python.png",
    },
    {
        title: "Java",
        link: "https://userogue.com",
        thumbnail:
            "/java.png",
    },
    {
        title: "JavaScript",
        link: "https://editorially.org",
        thumbnail:
            "/js.png",
    },
    {
        title: "JavaScript",
        link: "https://editrix.ai",
        thumbnail:
            "/js.png",
    },
    {
        title: "HTML",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "/html.png",
    },

    {
        title: "CSS",
        link: "https://algochurn.com",
        thumbnail:
            "/css.png",
    },
    {
        title: "React",
        link: "https://ui.aceternity.com",
        thumbnail:
            "/react.png",
    },
    {
        title: "Angular",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "/angular.svg",
    },
    {
        title: "Nodejs",
        link: "https://smartbridgetech.com",
        thumbnail:
            "/nodejs.png",
    },
    {
        title: "Spring",
        link: "https://renderwork.studio",
        thumbnail:
            "/spring.png",
    },

    {
        title: "Machine Learning",
        link: "https://cremedigital.com",
        thumbnail:
            "/ml.jpg",
    },
    {
        title: "Spring",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "/spring.png",
    },
    {
        title: "Django",
        link: "https://invoker.lol",
        thumbnail:
            "/django.png",
    },
    {
        title: "Artificial Intelligence",
        link: "https://efreeinvoice.com",
        thumbnail:
            "/ai.png",
    },
];

export const PROJECTS = [
    {
        title: "Dough Me A flavour",
        description: "E-Commerce website for a bakery shop. Used ReactJs, Spring, Bootstrap, SQL. Functionality includes" +
            ": Ordering, Cart, Live product count, and Reviews"
    },
    {
        title: "Размещения (Placement)",
        description: "A placement platform for the university to post about the upcoming placement drives and students to " +
            "discuss about the opportunity with each other and with professors."
    },
    {
        title: "Smart Switch",
        description: "A smart switch made using IOT with webapp to switch button over LAN. Could be accessed by" +
            " anyone on the network. Shows the current status of the switches at home."
    },
    {
        title: "Smart Face Detection System",
        description: "Smart face detection system that uses Reinforcement Learning and Computer vision" +
            "to automatically adjust and save the camera's properties according to the environment"
    },
    {
        title: 'News Bot',
        description: "Trained bot to reply to questions related to news with 5M+ dataset. Acted just like ChatGPT but, with " +
            "less data."
    },
    {
        title: "Smart Bot",
        description: "Used ROS(Robot operation System), and iCreate3 robot. Trained the robot to roam freely in a closed " +
            "area drawn using a marker."
    },
    {
        title: "Portfolio",
        description: "The Website that you are enjoying. Used NextJS. Try to interact with every component."
    },
    {
        title: "Chess",
        description: "Created an online multiplayer chess game for a client. Has features like: Leaderboard, " +
            "Chess engine for detecting correct moves, chat, friend requests, and player invitations via email."
    }
];

export const EDUCATION_CARDS = [
    {
        id: 1,
        title: "High School",
        duration: "2015 - 2017",
        description: (
            <p>
                Majored in <Highlight>Science</Highlight> and <Highlight>Maths</Highlight>.
            </p>
        ),
        background: '/mgn.jpg',
        institute: "MGN Public School"
    },
    {
        id: 2,
        title: "Bachelors",
        duration: "2017 - 2021",
        description: (
            <p>
                Majored in <Highlight>Computer Science and Engineering</Highlight>.
            </p>
        ),
        background: '/chitkara.jpeg',
        institute: 'Chitkara University'
    },
    {
        id: 3,
        title: "Graduate Certificate",
        duration: "2022 - 2023",
        description: (
            <p>
                Majored in <Highlight>Artificial Intelligence</Highlight>.
            </p>
        ),
        background: '/algonquin.jpg',
        institute: 'Algonquin College'
    },
];

export const PROFESSIONAL_SUMMARY = [
    {
        title: "SLiDE Lab",
        value: 0,
        content: <Experience
            heading={"Full Stack Developer"}
            duration={"January, 2023 - Current"}
            accomplishements={[
                (<p key={0}>- Represented company&apos;s projects in multiple <Highlight>Conferences</Highlight> including <Highlight>ReAction, Higher Education Summit </Highlight>, and <Highlight>CiCan</Highlight></p>),
                (<p key={1}>- Formulated <Highlight>Complex SQL Queries</Highlight> for improving the processing time from <Highlight>15-20mins to a few seconds</Highlight> by reducing DB calls and </p>),
                (<p key={2}>- Helped identify, and solve problems with the <Highlight>ML algorithms</Highlight> producing results for <Highlight>Systematic Review platform (InsightScope)</Highlight> increasing the </p>),
                (<p key={3}>- Created <Highlight>Patient Engagement Platform</Highlight> for <Highlight>CHEO (Children&apos;s Hospital of Eastern Ontario)</Highlight></p>),
                (<p key={4}>- Solely responsible for creating a big feature for <Highlight>CCCTG (Canadian Care Trials Group)</Highlight> from Information Gathering to Deployment of the application.</p>),
                (<p key={5}>- Worked closely with <Highlight>Researchers, and Doctors</Highlight> to constantly improve <Highlight>Systematic Review Platforms</Highlight> by performing multiple stress testings on the algorithms <Highlight>resulting in better outputs.</Highlight></p>),
            ]} />

    },
    {
        title: "Aspire Software",
        value: 1,
        content: <Experience
            heading={"Software Developer"}
            duration={"July, 2021 - September, 2022"}
            accomplishements={[
                (<p key={0}>- Collaborated with <Highlight>product managers, UI/UX designers, and other developers</Highlight> to design, develop, and implement features based on technical specifications.</p>),
                (<p key={1}>- Troubleshooted and resolved bugs within Spring Boot applications, ensuring smooth system operation.</p>),
                (<p key={2}>- Led the successful <Highlight>migration of desktop applications to a cloud-based architecture</Highlight> using AWS, resulting in 62% reduction in infrastructure costs and increased scalability.</p>),
                (<p key={3}>- Implemented <Highlight>Java-based Keycloak authentication</Highlight>, achieving a 70% performance improvement.</p>),
                (<p key={4}>- Developed a <Highlight>user interaction tracking</Highlight> feature to <Highlight>analyze user behavior and inform product development decisions.</Highlight></p>),
                (<p key={5}>- Led a team of 5 developers in delivering project on time and within budget.</p>),
                (<p key={6}>- <Highlight>Optimized resource allocation and system performance</Highlight> by leveraging AWS Cloud technologies, leading to cost reduction and a 50% improvement in system performance.</p>)
            ]} />

    },
    {
        title: "MFNN Games",
        value: 2,
        content: <Experience
            heading={"Project Manager"}
            duration={"January, 2023 - May, 2023"}
            accomplishements={[
                (<p key={0}>- Established and implemented <Highlight>quality assurance</Highlight> processes to ensure <Highlight>project deliverables meet quality standards and customer expectations.</Highlight></p>),
                (<p key={1}>- Creating and managing <Highlight>project budgets, allocating resources efficiently, and monitoring expenditures</Highlight> to ensure projects are delivered within financial constraints.</p>),
                (<p key={2}>- Identified, assessed, and mitigated <Highlight>project risks to minimize disruptions and ensure successful project delivery.</Highlight></p>),
                (<p key={3}>- Led and motivated <Highlight>teams, delegating tasks, fostering collaboration, and ensuring effective communication</Highlight> among team members.</p>),
                (<p key={4}>- Developed comprehensive <Highlight>project plans, defining scope, objectives, timelines, and resources</Highlight> required for successful project execution.</p>),
            ]} />

    },
    {
        title: "PlanetWalks LLC",
        value: 3,
        content: <Experience
            heading={"Software Developer Intern"}
            duration={"January, 2021 - July, 2021"}
            accomplishements={[
                (<p key={0}>- Learned and Developed <Highlight>backend APIs and application security</Highlight> focussing on <Highlight>quality, and optimized queries</Highlight> for faster data retrieving and transforming.</p>),
                (<p key={1}>- Collaborated with frontend developers to <Highlight>design APIs</Highlight> facilitating seamless communication.</p>),
                (<p key={2}>- Developed <Highlight>Streamlined Ordering System</Highlight> for the platform, <Highlight>optimizing database architecture and implementing secure authentication</Highlight> for enhanced user experience and scalability.</p>),
                (<p key={3}>- Worked in an <Highlight>Early start-up environment</Highlight>, adeptly managing tight deadlines and high-pressure situations.</p>),
                (<p key={4}>- Successfully documented backend system, <Highlight>facilitating seamless onboarding, enhancing code readability, and ensuring maintenance and troubleshooting</Highlight> of the platform.</p>),
            ]}/>

    },
];

export default Duration;
