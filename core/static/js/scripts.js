
const header_skill_frontend = document.getElementById("header_skill_frontend");
const container_skill_frontend = document.getElementById("container_skill_frontend");
const row_frontend = document.getElementById("row_frontend");

const container_skill_backend = document.getElementById("container_skill_backend");
const row_backend = document.getElementById("row_backend");

const container_skill_designer = document.getElementById("container_skill_designer");
const row_designer = document.getElementById("row_designer");

const studies = document.getElementById("studies");
const jobs = document.getElementById("jobs");

const container_studies = document.getElementById("container_studies");
const container_jobs = document.getElementById("container_jobs");

const header = document.getElementById("header");

const navbar = document.getElementById("navbar");
const navbarlg = document.getElementById("navbarlg");

const buttonOpenNav = document.getElementById("buttonOpenNav");
const ButtonCloseNav = document.getElementById("ButtonCloseNav");
const logo = document.getElementById("logo");

const ButtonDarkMode = document.getElementById("ButtonDarkMode");

const HtmlDocument = document.getElementById("HtmlDocument")

function openSkillsFrontend(){
    container_skill_frontend.classList.toggle("h-0")
    container_skill_frontend.classList.toggle("overflow-hidden")
    row_frontend.classList.toggle("rotate-180")
};

function openSkillsBackend(){
    container_skill_backend.classList.toggle("h-0");
    container_skill_backend.classList.toggle("overflow-hidden");
    row_backend.classList.toggle("rotate-180");
};

function openSkillsDesigner(){
    container_skill_designer.classList.toggle("h-0");
    container_skill_designer.classList.toggle("overflow-hidden");
    row_designer.classList.toggle("rotate-180");
};

function toggleExperience(){
    studies.classList.toggle("text-primary");
    jobs.classList.toggle("text-primary");
    container_studies.classList.toggle("hidden");
    container_jobs.classList.toggle("hidden");
    container_jobs.classList.toggle("flex");
};

function toggleHeader(){
    header.classList.toggle("h-18");
    header.classList.toggle("overflow-hidden");
    navbar.classList.toggle("hidden");
    buttonOpenNav.classList.toggle("hidden");
    ButtonCloseNav.classList.toggle("hidden");
    logo.classList.toggle("hidden");
    ButtonDarkMode.classList.toggle("hidden");
};

const toggleTheme = () => {
    if (HtmlDocument.classList.contains("dark")){
        HtmlDocument.classList.remove("dark");
        localStorage.setItem("theme", "light");
        return;
    }
    HtmlDocument.classList.add("dark");
    localStorage.setItem("theme", "dark");
};

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const menuLinkslg = document.querySelectorAll('.menulg a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

            const idlg = entry.target.getAttribute("id");
            const menuLinklg = document.querySelector(`.menulg a[href="#${idlg}"]`);
            
            if (entry.isIntersecting) {
                document.querySelector(".menu a.text-primary").classList.remove("text-primary");
                menuLink.classList.add("text-primary");

                document.querySelector(".menulg a.text-primary").classList.remove("text-primary");
                menuLinklg.classList.add("text-primary");
            }
        });
    },
    { rootMargin: "-40% 0px -60% 0px" }
);

menuLinks.forEach((menuLink) => {
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});

menuLinkslg.forEach((menuLinklg) => {
    const hash = menuLinklg.getAttribute("href");
    const targetlg = document.querySelector(hash);
    if (targetlg) {
        observer.observe(targetlg);
    }
});