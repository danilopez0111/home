// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Daniel",
  middleName: "",
  lastName: "Lopez",
  message: " Passionate about helping others through meteorology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/danilopez0111",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.linkedin.com/in/dl14urbana/",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.linkedin.com/in/dl14urbana/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dl14urbana/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.linkedin.com/in/dl14urbana/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.png"),
  imageSize: 375,
  message:
    "My name is Daniel. I am a senior undergraduate in atmospheric sciences at the University of Illiniois at Urbana-Champaign. I am interested in research using machine learning to solve earth science problems.",
  resume: "https://drive.google.com/file/d/1gYIHOOI1Me-kalwJtUOmqbw-jN3piViZ/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "danilopez0111", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Research Description",
  message:
    "UIUC: \nUses the information in the observed multi-channel brightness temperature fields from GMI to reconstruct the vertical profiles of radar reflectivity observed by CloudSat.\nAerospace Corporation: \nUses GOES-16 ABI CONUS imagery and lightning occurrence data to create a U-net based lightning prediction algorithm to support vehicle launches",
  images: [
    { 
      img: require('../assets/img/cgan.png'), 
      label: " ", 
      paragraph: " " 
    },
    { 
      img: require('../assets/img/lightning.png'), 
      label: " ", 
      paragraph: " " 
    },
  ],
  imageSize: {
    width:"932",
    height:"544"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking at applying to graduate school. If you want to learn more about my research, feel free to contact me! ",
  email: "danilopz0111@gmail.com",
};

const experiences = {
  show: true,
  heading: "Research Projects",
  data: [
    {
      role: 'Generating CloudSat Reflectivity Profiles using Global Precipitation Measurement Satellite and cGANs',// Here Add Company Name
      companylogo: require('../assets/img/uiuc.png'),
      date: 'May 2020 – Present',
    },
    {
      role: 'Predicting Lightning Strikes using GOES-16 and Semantic Segmentation',
      companylogo: require('../assets/img/aerospace.png'),
      date: 'June 2021 – August 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
