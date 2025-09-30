// Toggle "More details"
const showbtn = document.querySelector("#showbtn");
const restoption = document.querySelector(".restoption");
showbtn.addEventListener("click", function (e) {
  e.preventDefault();
  restoption.style.display =
    restoption.style.display === "block" ? "none" : "block";
});

// Create autosuggestion Job TITLE
const jobsarray = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Web Designer / UI Developer",
  "Web Accessibility Specialist",
  "Android Developer",
  "iOS Developer",
  "Flutter / Dart Developer",
  "React Native Developer",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Research Scientist",
  "Deep Learning Engineer",
  "Data Analyst",
  "NLP Engineer",
  "Computer Vision Engineer",
  "Software Engineer / Developer",
  "Embedded Systems Engineer",
  "Systems Programmer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Site Reliability Engineer",
  "Security Analyst",
  "Ethical Hacker / Penetration Tester",
  "Security Engineer",
  "Network Security Specialist",
  "Cloud Security Engineer",
  "Game Developer",
  "Game Designer",
  "Game AI Programmer",
  "VR/AR Developer",
  "Blockchain Developer",
  "Smart Contract Developer",
  "Web3 Frontend Developer",
  "Crypto Security Engineer",
  "Cloud Solutions Architect",
  "Kubernetes / Docker Specialist",
  "Quantum Computing Developer",
  "AR/VR Developer",
  "Robotics Engineer",
  "IoT Developer",
  "Automation / RPA Developer",
];

const jobtitle = document.querySelector('#jobtitle')
console.log(jobtitle)


