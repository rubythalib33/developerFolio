
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hello World my name is Ruby Abdullah",
  subTitle: emoji("I'm Currently work as Head of Artificial Intelligence at Widya Robotics 🚀 I'm now looking for a new opportunity to work in the field of Artificial Intelligence 🤖 and data science 📊 also software development 💻"),
  resumeLink: "https://www.linkedin.com/in/ruby-abdullah-2134a4176/"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/rubythalib33",
  linkedin: "https://www.linkedin.com/in/ruby-abdullah-2134a4176/",
  gmail: "rubyabdullah14@gmail.com",
  gitlab: "https://gitlab.com/rubythalib33",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "I am an AI and Data Scientist, I have experience in building and deploying ML models, and I am also familiar with the following technologies:",
  skills: [
    emoji("⚡ Develop ML models using Tensorflow, Pytorch, and Scikit-learn for help companies"),
    emoji("⚡ Develop Software using Python, JavaScript for help companies"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pyTorch",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "keras",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Computer Vision",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "NLP",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "70%"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "rubythalib33"
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://next.widya.ai/wp-content/uploads/2021/09/Widya-Logo-Full.png",
      link: "https://widya.ai/"
    },
    {
      image: "https://www.aiforindonesia.org/static/iaiprofile/assets/img/iai-logo.png",
      link: "https://www.aiforindonesia.org/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+62-37847819",
  email_address: "rubyabdullah14@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "rubythalib33"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, contactInfo , twitterDetails};
