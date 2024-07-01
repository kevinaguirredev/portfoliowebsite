function toggleMenu() {

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function openResumeInWindow() {
    const url = "../assets/resume-example.pdf";
    window.open(url);
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
// addClickEventListener("hamburger-proj", "click", toggleMenu);
addClickEventListener("hamburger-contact", "click", toggleMenu);
// addClickEventListener("resumeBtn", "click", openResumeInWindow);
addClickEventListener("contactBtn", "click", goToSection);
addClickEventListener("linkedinIcon", "click", goToLinkedin);
addClickEventListener("githubIcon", "click", goToGithub);
updateYearCopyright();