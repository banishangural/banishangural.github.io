/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Banish Angural",
  title: "Hi all, I'm Banish",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with C# / SQL / JavaScript / VueJS / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ptUJfSvZ7MPT2SLTg2uL20oh6b_n0jtq/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/banishangural",
  linkedin: "https://www.linkedin.com/in/banishangural/",
  gmail: "anguralbanish2@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/8826141/banish-angural",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A PASSIONATE DEVELOPER & MARKETER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front / Back end Interfaces for your web and mobile applications"
    ),
    emoji("⚡ C# (.NET) and Databases (SQL, MongoDB, Oracle) Skills"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Google Analytics"
    ),
    emoji(
      "⚡ Google Ads, Facebook Ads, SEO, PPC Specialist"
    )
  ],


  softwareSkills: [
    {
      skillName: "c#",
      fontAwesomeClassname: "csharp-custom-icon"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "vuejs-custom-icon"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "sql-custom-icon"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "js-custom-icon"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "nodejs-custom-icon"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "html-custom-icon"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "css-custom-icon"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "mongodb-custom-icon"
    },
    {
      skillName: "oracle",
      fontAwesomeClassname: "oracle-custom-icon"
    },
    {
      skillName: "Google Ads",
      fontAwesomeClassname: "buysellads-custom-icon"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Analyst Co-op",
      company: "CGI Canada",
      companylogo: require("./assets/images/cgilogo.png"),
      date: "September 2019 – September 2020",
      desc:
        "",
      descBullets: [
        "Collaborated with other team members to maintain several web applications.",
        "Attended meetings with the clients and wrote their requirements.",
        "Created and organized documents.",
        "Managed Incident tickets through JIRA and ITSM.",
        "Technology used: C# (ASP.NET), SQL, HTML, CSS, JS",
      ]
    },
    {
      role: "Freelancer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "September 2019 – Present",
      desc:
        "",
      descBullets: [
        "Services provided: Social Media Management, Search Engine Optimization, Content writing, etc.",
        "Hosted regular meetings with the clients to understand their expectations and the scope.",
        "Technology used: WordPress, Shopify, ahref, Google, and Facebook ads.",
      ]
    },
    {
      role: "Sales Floor Associate",
      company: "PPG",
      companylogo: require("./assets/images/ppglogo.png"),
      date: "September 2020 – March 2022",
      desc:
        "",
      descBullets: [
        "Assess customer needs and offer solutions",
        "Work in a retail store environment with store and occasional driver responsibilities"
      ]
    },
    {
      role: "Digital Marketer",
      company: "BubbleUp Marketing",
      companylogo: require("./assets/images/bubbleup.png"),
      date: "July 2021 –  Present",
      desc:
        "",
      descBullets: [
        "Work as SEO and PPC Specialist",
        "Help in getting more leads and business to my clients"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/storythumb.webp"),
      projectName: "Explore Stories",
      projectDesc: "A story sharing web application created during Captsone.",
      footerLink: [
        {
          name: "Coming soon",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ai.jpeg"),
      projectName: "Artificial Intelligence Desktop App",
      projectDesc: "An artificial intelligence desktop app which uses Windows speech synthesizer to understand voice commands.!",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/banishangural/ALERT-AI"
        }
      ]
    },
    {
      image: require("./assets/images/vedseeds.png"),
      projectName: "VedSeeds",
      projectDesc: "An ecommerce website where people can purchase astrology services.",
      footerLink: [
        {
          name: "Visit VedSeeds",
          url: "https://www.vedseeds.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northern Alberta Institute of Technology",
      logo: require("./assets/images/naitlogo.png"),
      subHeader: "Digital Media and IT",
      duration: "May 2018 - Jan 2021",
      desc: "Major: Computer Software and Developer",
      descBullets: [
        "Received 3 X Dean's Honor Roll"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Digital Marketing",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Freelancer at Upwork",
      subtitle:
        "Helped clients by providing Social Media Management, Web Development and SEO services.",
      image: require("./assets/images/upwork.png"),
      footerLink: [
        {
          name: "Upwork Profile",
          url:
            "https://www.upwork.com/freelancers/~014baf3caee3fed887"
        }
      ]
    },
    {
      title: "Google Foobar",
      subtitle:
        "Succesfully completed the Google foobar Challenge",
      image: require("./assets/images/foobar.png"),
      footerLink: [
        {
          name: "Learn More about Foobar",
          url:
            "https://medium.com/plutonic-services/things-you-should-know-about-google-foobar-invitation-703a535bf30f"
        }
      ]
    },
    {
      title: "Google Ads Certification",
      subtitle:
        "Completed Google Ads Search, Video & Shopping Course",
      image: require("./assets/images/googleads.png"),
      footerLink: [
        {
          name: "Learn More Google Certifications",
          url:
            "https://support.google.com/google-ads/answer/9702955?hl=en"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://anguralbanish2.medium.com/top-5-backend-frameworks-2021-de4ad9568c11",
      title: "Top 5 Backend Frameworks in 2021",
      description:
        "In this blog, I will look at the top five backend frameworks to give you an insight into what you can start learning in 2021."
    },
    {
      url: "https://anguralbanish2.medium.com/why-react-is-the-best-e3cd517743ff",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://anguralbanish2.medium.com/quick-enable-dark-mode-for-whatsapp-on-iphone-d2815fb8c284",
      title: "Enable Dark Mode for Whatsapp on iPhone",
      description:
        "This post clearly describes how to enable dark mode on WhatsApp on an iPhone."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(431) 335-9907",
  email_address: "anguralbanish2@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "banishangural", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
