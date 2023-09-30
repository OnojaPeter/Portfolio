const scrollButton = document.getElementById("myProjectButton");
const projectSection = document.getElementById("project-section");

scrollButton.addEventListener("click", function () {
    projectSection.scrollIntoView({ behavior: "smooth"});
});