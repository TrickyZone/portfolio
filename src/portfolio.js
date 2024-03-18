/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "MuZakkir Saifi",
  title: "Hey !!, I'm MuZakkir",
  // subTitle: emoji(
  //   "a passionate DevOps Engineer dedicated to streamlining processes and fostering collaboration between development and operations teams. With expertise in infrastructure as code, automation, and cloud technologies, I thrive in dynamic environments where innovation and efficiency are paramount. From small startups to large enterprises, I've led transformative initiatives to accelerate software delivery and enhance reliability. Let's embrace the principles of DevOps together and pave the way for a brighter future in technology."
  // ),
  subTitle: emoji(
    "Your go-to DevOps enthusiast! I live for optimizing workflows, automating processes, and bringing teams together for seamless software delivery. Let's revolutionize development and operations, one deployment at a time!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/muzakkirsaifi123",
  linkedin: "https://www.linkedin.com/in/mohd-muzakkir-s-b89755175/",
  gmail: "muzakkirsaifi8@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS ENTHUSIAST! WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Write the CI/CD pipeline with the different tools like Jenkins, GitHub Action, Azure DevOps, Concourse and many more"
    ),
    emoji("⚡ Can automate the complete infrastructure using the terraform"),
    emoji("⚡ Worked on the diffrent clouds like AWS, AZURE and GCP")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-sharp fa-solid fa-dharmachakra"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dr. APJ Abdul Kalam University, Lucknow",
      logo: require("./assets/images/logo.png"),
      subHeader: "Bachelor of technology in Computer Science",
      duration: "August 2017 - May 2021",
      desc: "I have developed a IOT project in my final year where i can enable the irrigation with the help of the driness of the soil and once it is wet then irrigation will stop. With the help of this project, we can reduce the water waste.",
      descBullets: [
        "My final project was consider in the top-3 project in our college",
        "I have earn a reward in my course to secure a good percentage in class and maintain a great attendace [98%] with a certificate and 5000 rupe check."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Infra Automation - Terraform", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CI/CD",
      progressPercentage: "70%"
    },
    {
      Stack: "Kubernetes",
      progressPercentage: "60%"
    },
    {
      Stack: "Ansible",
      progressPercentage: "60%"
    },
    {
      Stack: "Chef",
      progressPercentage: "60%"
    },
    {
      Stack: "Linux",
      progressPercentage: "60%"
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    },
    {
      Stack: "Azure",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    {
      role: "DevOps Engineer Intern",
      company: "Knoldus",
      companylogo: require("./assets/images/knol.png"),
      date: "July 2021 – Jan 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "DevOps Engineer",
      company: "Nashtech",
      companylogo: require("./assets/images/nash.png"),
      date: "Jan 2021 – Jan 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Senior DevOps Engineer",
      company: "Nashtech",
      companylogo: require("./assets/images/nash.png"),
      date: "Jan 2022 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  title: "Big Project",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",

  projects: [
    {
      image: require("./assets/images/DCT.webp"),
      projectName: "EMS - Duck Creek ",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/3TL.png"),
      projectName: "3TL",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Associate Certificate",
      subtitle:
        "My first certificate towords the cloud- Google Associate certification",
      image: require("./assets/images/GCP_associate_certficate.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credential.net/f369f9dd-f59a-40f2-8caa-8694d93630af#gs.6kblel"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      subtitle: "Microsoft Certified: DevOps Engineer Expert",
      image: require("./assets/images/badge-devops-expert.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/MohdMuzakkirSaifi-2544/DB01AAA6EA1B3A00?sharingId=4755FCAB157CB4FB"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Database Administrator Associate",
      subtitle: "Microsoft Certified: Azure Database Administrator Associate",
      image: require("./assets/images/microsoft-certified-associate.webp"),
      imageAlt: "Microsoft Certified: Azure Database Administrator Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/MohdMuzakkirSaifi-2544/FA2F834F64B0CAF5?sharingId=4755FCAB157CB4FB"
        }
      ]
    },

    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Microsoft Certified: Azure Fundamentals",
      image: require("./assets/images/azure_fun.webp"),
      imageAlt: "Microsoft Certified: Azure Fundamentals",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/MohdMuzakkirSaifi-2544/BBB0B1C599C43D3C?sharingId=4755FCAB157CB4FB"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title:
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      subtitle:
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      image: require("./assets/images/azure_fun.webp"),
      imageAlt:
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/MohdMuzakkirSaifi-2544/87EA72ADDAB79C7F?sharingId=4755FCAB157CB4FB"
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.knoldus.com/how-to-perform-different-operations-on-aws-s3-bucket-using-boto3/",
      title:
        "How to perform different operations on  AWS S3 bucket using Boto3",
      description:
        "We need to know about boto. What is boto??  Boto3 is the Amazon Web Services (AWS) Software Development Kit (SDK) for Python"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
  number: "+91-9104234211",
  email_address: "muzakkirsaifi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};

// /* Change this file to get your personal Portfolio */

// // To change portfolio colors globally go to the  _globalColor.scss file

// import emoji from "react-easy-emoji";
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// // Splash Screen

// const splashScreen = {
//   enabled: true, // set false to disable splash screen
//   animation: splashAnimation,
//   duration: 2000 // Set animation duration as per your animation
// };

// // Summary And Greeting Section

// const illustration = {
//   animated: true // Set to false to use static SVG
// };

// const greeting = {
//   username: "Saad Pasta",
//   title: "Hi all, I'm Saad",
//   subTitle: emoji(
//     "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
//   ),
//   resumeLink:
//     "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
//   displayGreeting: true // Set false to hide this section, defaults to true
// };

// // Social Media Links

// const socialMediaLinks = {
//   github: "https://github.com/saadpasta",
//   linkedin: "https://www.linkedin.com/in/saadpasta/",
//   gmail: "saadpasta70@gmail.com",
//   gitlab: "https://gitlab.com/saadpasta",
//   facebook: "https://www.facebook.com/saad.pasta7",
//   medium: "https://medium.com/@saadpasta",
//   stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
//   // Instagram, Twitter and Kaggle are also supported in the links!
//   // To customize icons and social links, tweak src/components/SocialMedia
//   display: true // Set true to display this section, defaults to false
// };

// // Skills Section

// const skillsSection = {
//   title: "What I do",
//   subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
//   skills: [
//     emoji(
//       "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
//     ),
//     emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
//     emoji(
//       "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
//     )
//   ],

//   /* Make Sure to include correct Font Awesome Classname to view your icon
// https://fontawesome.com/icons?d=gallery */

//   softwareSkills: [
//     {
//       skillName: "html-5",
//       fontAwesomeClassname: "fab fa-html5"
//     },
//     {
//       skillName: "css3",
//       fontAwesomeClassname: "fab fa-css3-alt"
//     },
//     {
//       skillName: "sass",
//       fontAwesomeClassname: "fab fa-sass"
//     },
//     {
//       skillName: "JavaScript",
//       fontAwesomeClassname: "fab fa-js"
//     },
//     {
//       skillName: "reactjs",
//       fontAwesomeClassname: "fab fa-react"
//     },
//     {
//       skillName: "nodejs",
//       fontAwesomeClassname: "fab fa-node"
//     },
//     {
//       skillName: "swift",
//       fontAwesomeClassname: "fab fa-swift"
//     },
//     {
//       skillName: "npm",
//       fontAwesomeClassname: "fab fa-npm"
//     },
//     {
//       skillName: "sql-database",
//       fontAwesomeClassname: "fas fa-database"
//     },
//     {
//       skillName: "aws",
//       fontAwesomeClassname: "fab fa-aws"
//     },
//     {
//       skillName: "firebase",
//       fontAwesomeClassname: "fas fa-fire"
//     },
//     {
//       skillName: "python",
//       fontAwesomeClassname: "fab fa-python"
//     },
//     {
//       skillName: "docker",
//       fontAwesomeClassname: "fab fa-docker"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Education Section

// const educationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   schools: [
//     {
//       schoolName: "Harvard University",
//       logo: require("./assets/images/harvardLogo.png"),
//       subHeader: "Master of Science in Computer Science",
//       duration: "September 2017 - April 2019",
//       desc: "Participated in the research of XXX and published 3 papers.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       schoolName: "Stanford University",
//       logo: require("./assets/images/stanfordLogo.png"),
//       subHeader: "Bachelor of Science in Computer Science",
//       duration: "September 2013 - April 2017",
//       desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
//       descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
//     }
//   ]
// };

// // Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend/Design", //Insert stack or technology you have experience in
//       progressPercentage: "90%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "70%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "60%"
//     }
//   ],
//   displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
// };

// // Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
// };

// /* Your Open Source Section to View Your Github Pinned Projects
// To know how to get github key look at readme.md */

// const openSource = {
//   showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
//   display: true // Set false to hide this section, defaults to true
// };

// // Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Achievement Section
// // Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// const contactInfo = {
//   title: emoji("Contact Me ☎️"),
//   subtitle:
//     "Discuss a project or just want to say hi? My Inbox is open for all.",
//   number: "+92-0000000000",
//   email_address: "saadpasta70@gmail.com"
// };

// // Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

// const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// export {
//   illustration,
//   greeting,
//   socialMediaLinks,
//   splashScreen,
//   skillsSection,
//   educationInfo,
//   techStack,
//   workExperiences,
//   openSource,
//   bigProjects,
//   achievementSection,
//   blogSection,
//   talkSection,
//   podcastSection,
//   contactInfo,
//   twitterDetails,
//   isHireable
// };
