function analyzeSkills() {
    let requiredSkills = ["HTML", "CSS", "JavaScript"];
    let selectedSkills = [];

    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(box => {
        if (box.checked) {
            selectedSkills.push(box.value);
        }
    });

    let missingSkills = requiredSkills.filter(
        skill => !selectedSkills.includes(skill)
    );

    let result = document.getElementById("result");

    if (missingSkills.length === 0) {
        result.innerHTML = "<h3>No Skill Gap 🎉</h3>";
    } else {
        result.innerHTML =
            "<h3>Missing Skills:</h3>" +
            missingSkills.join(", ") +
            "<br><br><b>Learning Roadmap:</b><br>" +
            "1. Learn basics<br>2. Practice projects<br>3. Advanced learning";
    }
}
