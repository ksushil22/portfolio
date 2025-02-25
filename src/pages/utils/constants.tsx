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

export const CustomHeading = ({
                                  children
                              }: {
    children: React.ReactNode;
}) => {
    return <h1 className={"text-center text-7xl top-0 font-bold text-emerald-700"}>{children}</h1>
}

const Experience = ({
                        heading,
                        duration,
                        accomplishements
                    }: {
    heading: string,
    duration: string,
    accomplishements: React.JSX.Element[]
}) => {
    return <div className={"rounded-2xl p-10 text-white left-[20%] min-h-[70vh]"}>
        <Heading>{heading}</Heading>
        <Duration>{duration}</Duration>
        <hr/>
        <h1 className={"text-xl text-center"} style={{
            marginTop: 30
        }}>Accomplishments:</h1>
        <Accomplishments accomplishments={accomplishements}/>
    </div>
};
export const Heading = ({children}: { children: React.ReactNode }) => {
    return <h1 className={"text-2xl text-center font-bold"}>{children}</h1>
};

const Duration = ({children}: { children: React.ReactNode }) => {
    return <h1 className={"text-xl text-center"}>{children}</h1>
};

export const Accomplishments = ({accomplishments}: { accomplishments: React.JSX.Element[] }) => {
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
        thumbnail:
            "/cs.png",
    },
    {
        title: "Python",
        thumbnail:
            "/python.png",
    },
    {
        title: "Java",
        thumbnail:
            "/java.png",
    },
    {
        title: "JavaScript",
        thumbnail:
            "/js.png",
    },
    {
        title: "HTML",
        thumbnail:
            "/html.png",
    },

    {
        title: "CSS",
        thumbnail:
            "/css.png",
    },
    {
        title: "React",
        thumbnail:
            "/react.png",
    },
    {
        title: "Angular",
        thumbnail:
            "/angular.svg",
    },
    {
        title: "Nodejs",
        thumbnail:
            "/nodejs.png",
    },
    {
        title: "Spring",
        thumbnail:
            "/spring.png",
    },
    {
        title: "JavaScript",
        thumbnail:
            "/js.png",
    },
    {
        title: "Machine Learning",
        thumbnail:
            "/ml.jpg",
    },
    {
        title: "Spring Boot",
        thumbnail:
            "/spring.png",
    },
    {
        title: "Django",
        thumbnail:
            "/django.png",
    },
    {
        title: "Artificial Intelligence",
        thumbnail:
            "/ai.png",
    },
];

export const PROJECTS = [
    {
        title: "Get Locals",
        description: "Created a one solution for all the food business owners for website Generation, marketing, Search " +
            "Engine Optimization, Ads, and more.",
        url: "https://github.com/Get-Locals"
    },
    {
        title: "Размещения (Placement)",
        description: "A placement platform for the university to post about the upcoming placement drives and students to " +
            "discuss about the opportunity with each other and with professors.",
        url: "https://github.com/ksushil22/Placement"
    },
    {
        title: "Portfolio",
        description: "The Website that you are enjoying. Used NextJS. Try to interact with every component.",
        url: "https://github.com/ksushil22/portfolio"
    },
    {
        title: "Chess",
        description: "Created an online multiplayer chess game for a client. Has features like: Leaderboard, " +
            "Chess engine for detecting correct moves, chat, friend requests, and player invitations via email.",
        url: ""
    },
    {
        title: "Dough Me A flavour",
        description: "E-Commerce website for a bakery shop. Used ReactJs, Spring, Bootstrap, SQL. Functionality includes" +
            ": Ordering, Cart, Live product count, and Reviews",
        url: ""
    },
    {
        title: "Smart Switch",
        description: "A smart switch made using IOT with webapp to switch button over LAN. Could be accessed by" +
            " anyone on the network. Shows the current status of the switches at home.",
        url: ""
    },
    {
        title: "Smart Face Detection System",
        description: "Smart face detection system that uses Reinforcement Learning and Computer vision" +
            "to automatically adjust and save the camera's properties according to the environment",
        url: ""
    },
    {
        title: 'News Bot',
        description: "Trained bot to reply to questions related to news with 5M+ dataset. Acted just like ChatGPT but, with " +
            "less data.",
        url: ""
    },
    {
        title: "Smart Bot",
        description: "Used ROS(Robot operation System), and iCreate3 robot. Trained the robot to roam freely in a closed " +
            "area drawn using a marker.",
        url: ""
    }
];

export const EDUCATION_CARDS = [
    {
        id: 1,
        title: "High School",
        duration: "2015 - 2017",
        description: (
            <span>
                Majored in <b>Science</b> and <b>Maths</b>.
            </span>
        ),
        background: '/mgn.jpg',
        institute: "MGN Public School"
    },
    {
        id: 2,
        title: "Bachelors",
        duration: "2017 - 2021",
        description: (
            <span>
                Majored in <b>Computer Science and Engineering</b>.
            </span>
        ),
        background: '/chitkara.jpeg',
        institute: 'Chitkara University'
    },
    {
        id: 3,
        title: "Graduate Certificate",
        duration: "2022 - 2023",
        description: (
            <span>
                Majored in <b>Artificial Intelligence</b>.
            </span>
        ),
        background: '/algonquin.jpg',
        institute: 'Algonquin College'
    },
];

export const PROFESSIONAL_SUMMARY_CARDS = [
    {
        title: "SLiDE Lab",
        heading: "Full Stack Engineer",
        src: "/slide.png",
        id: 0,
        content: (
            <div>
                <ul>
                    {[
                        <p key={0}>
                            - Represented company&apos;s projects in
                            multiple <Highlight>Conferences</Highlight> including <Highlight>ReAction, Higher Education
                            Summit</Highlight>, and <Highlight>CiCan</Highlight>
                        </p>,
                        <p key={1}>
                            - Formulated <Highlight>Complex SQL Queries</Highlight> to improve processing time
                            from <Highlight>15-20 mins to a few seconds</Highlight> by reducing DB calls and improving
                            loading times.
                        </p>,
                        <p key={2}>
                            - Helped identify and solve problems with the <Highlight>ML algorithms</Highlight> for
                            the <Highlight>Systematic Review platform (InsightScope)</Highlight>, enhancing accuracy and
                            performance.
                        </p>,
                        <p key={3}>
                            - Created a <Highlight>Patient Engagement Platform</Highlight> for <Highlight>CHEO
                            (Children&apos;s Hospital of Eastern Ontario)</Highlight>.
                        </p>,
                        <p key={4}>
                            - Solely responsible for developing a major feature for <Highlight>CCCTG (Canadian Care
                            Trials Group)</Highlight>, handling everything from information gathering to deployment.
                        </p>,
                        <p key={5}>
                            - Worked closely
                            with <Highlight>Researchers</Highlight> and <Highlight>Doctors</Highlight> to
                            enhance <Highlight>Systematic Review Platforms</Highlight> by conducting multiple stress
                            tests on algorithms, leading to better outputs.
                        </p>,
                    ].map((accomplishment, index) => (
                        <li
                            key={index}
                            style={{
                                position: 'relative',
                                marginTop: 10
                            }}
                        >
                            {accomplishment}
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        title: "Aspire Software",
        heading: "Software Engineer",
        id: 1,
        src: "/oases.png",
        content: (
            <div>
                <ul>
                    {[
                        (<p key={0}>- Collaborated with <Highlight>product managers, UI/UX designers, and other
                            developers</Highlight> to design, develop, and implement features based on technical
                            specifications.
                        </p>),
                        (<p key={1}>- Troubleshooted and resolved bugs within Spring Boot applications, ensuring smooth
                            system
                            operation.</p>),
                        (<p key={2}>- Led the successful <Highlight>migration of desktop applications to a cloud-based
                            architecture</Highlight> using AWS, resulting in 62% reduction in infrastructure costs and
                            increased
                            scalability.</p>),
                        (<p key={3}>- Implemented <Highlight>Java-based Keycloak authentication</Highlight>, achieving a
                            70%
                            performance improvement.</p>),
                        (<p key={4}>- Developed a <Highlight>user interaction tracking</Highlight> feature
                            to <Highlight>analyze
                                user behavior and inform product development decisions.</Highlight></p>),
                        (<p key={5}>- Led a team of 5 developers in delivering project on time and within budget.</p>),
                        (<p key={6}>- <Highlight>Optimized resource allocation and system performance</Highlight> by
                            leveraging
                            AWS Cloud technologies, leading to cost reduction and a 50% improvement in system
                            performance.</p>)
                    ].map((accomplishment, index) => (
                        <li
                            key={index}
                            style={{
                                position: 'relative',
                                marginTop: 10
                            }}
                        >
                            {accomplishment}
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        title: "PlanetWalks LLC",
        heading: "Fresh Graduate Engineer",
        src: "/planetwalks.png",
        id: 2,
        content: (
            <div>
                <ul>
                    {[
                        (<p key={0}>- Learned and Developed <Highlight>backend APIs and application
                            security</Highlight> focussing on <Highlight>quality, and optimized queries</Highlight> for
                            faster
                            data retrieving and transforming.</p>),
                        (<p key={1}>- Developed an <Highlight>Angular 10 based rendering system</Highlight> that
                            dynamically
                            generates forms from JSON, reducing static form code by 20% and improving production speed
                            by 15%.
                        </p>),
                        (<p key={2}>- Developed <Highlight>Streamlined Ordering System</Highlight> for the
                            platform, <Highlight>optimizing
                                database architecture and implementing secure authentication</Highlight> for enhanced
                            user
                            experience and scalability.</p>),
                        (<p key={3}>- Integrated <Highlight>OAuth 2.0 with Spring</Highlight> to enable secure
                            and <Highlight>seamless
                                authentication</Highlight>, boosting user adoption by 10% through enhanced functionality
                            and
                            improved security features.</p>),
                        (<p key={4}>- Successfully documented backend system, <Highlight>facilitating seamless
                            onboarding,
                            enhancing code readability, and ensuring maintenance and troubleshooting</Highlight> of the
                            platform.</p>),
                        (<p key={5}>- Implemented <Highlight>multi-tenant authentication</Highlight> across multiple
                            applications, enabling the company to <Highlight>efficiently manage over 50 clients
                                simultaneously</Highlight>, improving organizational capability by 30%.</p>),
                    ].map((accomplishment, index) => (
                        <li
                            key={index}
                            style={{
                                position: 'relative',
                                marginTop: 10
                            }}
                        >
                            {accomplishment}
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        title: "MFNN Games",
        heading: "Project Manager",
        src: "/mfnn.png",
        id: 3,
        content: (
            <div>
                <ul>
                    {[
                        (<p key={0}>- Established and implemented <Highlight>quality assurance</Highlight> processes to
                            ensure <Highlight>project deliverables meet quality standards and customer
                                expectations.</Highlight>
                        </p>),
                        (<p key={1}>- Creating and managing <Highlight>project budgets, allocating resources
                            efficiently, and
                            monitoring expenditures</Highlight> to ensure projects are delivered within financial
                            constraints.
                        </p>),
                        (<p key={2}>- Identified, assessed, and mitigated <Highlight>project risks to minimize
                            disruptions and
                            ensure successful project delivery.</Highlight></p>),
                        (<p key={3}>- Led and motivated <Highlight>teams, delegating tasks, fostering collaboration, and
                            ensuring effective communication</Highlight> among team members.</p>),
                        (<p key={4}>- Developed comprehensive <Highlight>project plans, defining scope, objectives,
                            timelines,
                            and resources</Highlight> required for successful project execution.</p>),
                    ].map((accomplishment, index) => (
                        <li
                            key={index}
                            style={{
                                position: 'relative',
                                marginTop: 10
                            }}
                        >
                            {accomplishment}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
];

export default Duration;
