document.addEventListener("DOMContentLoaded", () => {
    
    const themeBtn = document.getElementById("theme-btn");
  
    // Function to apply theme
    const applyTheme = (theme) => {
      
        if (theme === "dark") {
        
            document.body.setAttribute("data-theme", "dark");
            updateImgSourceBasedOffTheme(theme);
        } else {
            
            document.body.setAttribute("data-theme", "light");
            updateImgSourceBasedOffTheme(theme);
      }
    };
  
    // Detect system preference
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    
    // Get the user's saved theme from localStorage (if available)
    const savedTheme = localStorage.getItem("theme");

    const theme = savedTheme || systemPreference;
    applyTheme(theme);
  
    // Toggle theme on button click
    themeBtn.addEventListener("click", () => {
      
      const currentTheme = document.body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme); // Save the user's theme preference
    });

  });

function updateImgSourceBasedOffTheme(theme) {

    const githubIcon = document.getElementById("githubIcon");
    const linkedinIcon = document.getElementById("linkedinIcon");
    const arrowImg1 = document.getElementById("arrow1");
    const arrowImg2 = document.getElementById("arrow2");
    // const contactLinkedInIcon = document.getElementById("contact-linkedin-icon");
    const contactEmailIcon = document.getElementById("contact-email-icon");

    if (theme === "dark") {

        githubIcon.src = "./assets/github-nightmode.png";
        linkedinIcon.src = "./assets/linkedin-nightmode.png";
        arrowImg1.src = "./assets/arrow-nightmode.png";
        arrowImg2.src = "./assets/arrow-nightmode.png";
        contactEmailIcon.src = "./assets/email-nightmode.png";
    }
    else {
        
        githubIcon.src = "./assets/github.png";
        linkedinIcon.src = "./assets/linkedin.png";
        arrowImg1.src = "./assets/arrow.png";
        arrowImg2.src = "./assets/arrow.png";
        contactEmailIcon.src = "./assets/email.png";
    }
}

function toggleMenu() {

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function goToSection() {
    
    const url = "./#contact";
    window.location.href = url;
}

function goToLinkedin() {
    
    const url = "https://www.linkedin.com/in/kevinaguirre1";
    window.location.href = url;
}

function goToGithub() {
    
    const url = "https://github.com/kevinaguirredev";
    window.location.href = url;
}

function addClickEventListener(id, eventName, functionName) {

    const element = document.getElementById(id);
    element.addEventListener(eventName, functionName);
}

function updateYearCopyright() {

    const spanYear = document.getElementById("spanYear");
    let now = new Date();
    spanYear.innerHTML = now.getFullYear();
}


addClickEventListener("hambgr-icon", "click", toggleMenu);
addClickEventListener("hamburger-about", "click", toggleMenu);
addClickEventListener("hamburger-exp", "click", toggleMenu);
addClickEventListener("hamburger-contact", "click", toggleMenu);
addClickEventListener("contactBtn", "click", goToSection);
addClickEventListener("linkedinIcon", "click", goToLinkedin);
addClickEventListener("githubIcon", "click", goToGithub);
updateYearCopyright();