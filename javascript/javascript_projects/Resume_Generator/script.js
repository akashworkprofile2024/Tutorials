document.addEventListener('DOMContentLoaded', () => {

    // --- FORM INPUTS & PREVIEW MAPPING ---
    // --- FORM INPUTS & PREVIEW MAPPING ---
const formInputs = {
    nameInput: '.resume-name',
    emailInput: '.resume-email',
    phoneInput: '.resume-phone',
    summaryInput: '.resume-summary',
    experienceYearsInput: '.resume-experience-years', // <-- ADD THIS LINE
    experienceInput: '.resume-experience',
    educationInput: '.resume-education'
};
    const imageInput = document.getElementById('imageInput');

    // --- LIVE UPDATE ALL PREVIEWS ---
   // --- LIVE UPDATE ALL PREVIEWS ---
function updateAllPreviews() {
    const activeTemplate = document.querySelector('.resume-template:not(.d-none)');
    if (!activeTemplate) return;

    // Update text fields
    for (const [inputId, selector] of Object.entries(formInputs)) {
        const inputElement = document.getElementById(inputId);
        const previewElements = activeTemplate.querySelectorAll(selector);
        const value = inputElement.value;
        
        previewElements.forEach(el => {
            // Special logic for the years dropdown to show/hide the badge
            if (inputId === 'experienceYearsInput') {
                if (value && inputElement.selectedIndex > 0) {
                    el.textContent = value;
                    el.style.display = ''; // Reset display to default
                } else {
                    el.textContent = '';
                    el.style.display = 'none'; // Hide the badge
                }
            } else {
                // Original logic for other text/textarea fields
                el.textContent = value || inputElement.placeholder || '';
            }
        });
    }
    
    // Update skills separately
    const skillsPreviewElements = activeTemplate.querySelectorAll('.resume-skills');
    skillsPreviewElements.forEach(el => {
       el.textContent = skills.join(", ") || "HTML, CSS, JavaScript";
    });
}

    // --- IMAGE UPLOAD HANDLER ---
    imageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                document.querySelectorAll('.resume-profile-img').forEach(img => {
                    img.src = imageUrl;
                    img.style.display = 'block';
                });
            };
            reader.readAsDataURL(file);
        }
    });

    // --- ADD EVENT LISTENERS TO FORM FIELDS ---
    Object.keys(formInputs).forEach(inputId => {
        document.getElementById(inputId).addEventListener('input', updateAllPreviews);
    });

    // --- TEMPLATE SWITCHER LOGIC ---
    document.querySelectorAll('input[name="template-choice"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.querySelectorAll('.resume-template').forEach(tpl => tpl.classList.add('d-none'));
            document.getElementById(this.value).classList.remove('d-none');
            updateAllPreviews(); // Refresh preview with new template
        });
    });

    // --- SKILLS TAG INPUT LOGIC ---
    const skillsContainer = document.getElementById("skillsContainer");
    const skillsInput = document.getElementById("skillsInput");
    const suggestionBox = document.getElementById("suggestionBox");
    let skills = [];
    const allSkills = ["HTML", "CSS", "JavaScript", "Python", "Java", "React", "Node.js", "SQL", "Git", "AWS", "Docker"];

    skillsInput.addEventListener("input", function() {
        const query = this.value.trim().toLowerCase();
        suggestionBox.innerHTML = "";
        if (!query) {
            suggestionBox.style.display = "none";
            return;
        }
        const filtered = allSkills.filter(s => s.toLowerCase().startsWith(query) && !skills.includes(s));
        if (!filtered.length) {
            suggestionBox.style.display = "none";
            return;
        }
        filtered.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            li.className = "list-group-item list-group-item-action";
            li.onclick = () => addSkill(skill);
            suggestionBox.appendChild(li);
        });
        suggestionBox.style.display = "block";
    });

    skillsInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && this.value.trim()) {
            e.preventDefault();
            addSkill(this.value.trim());
        }
        if (e.key === "Backspace" && this.value === "" && skills.length > 0) {
            skills.pop();
            updateSkillsDisplay();
        }
    });

    function addSkill(skill) {
        if (skill && !skills.includes(skill)) {
            skills.push(skill);
            updateSkillsDisplay();
        }
        skillsInput.value = "";
        suggestionBox.style.display = "none";
    }

    function updateSkillsDisplay() {
        skillsContainer.querySelectorAll(".skill-tag").forEach(tag => tag.remove());
        skills.forEach(skill => {
            const tag = document.createElement("span");
            tag.className = "skill-tag badge bg-primary me-1 mb-1";
            tag.textContent = skill;
            const removeBtn = document.createElement("span");
            removeBtn.innerHTML = " &times;";
            removeBtn.style.cursor = "pointer";
            removeBtn.onclick = () => {
                skills = skills.filter(s => s !== skill);
                updateSkillsDisplay();
            };
            tag.appendChild(removeBtn);
            skillsContainer.insertBefore(tag, skillsInput);
        });
        updateAllPreviews(); // Update the main resume preview
    }
    
    // Hide suggestion box when clicking outside
    document.addEventListener('click', function(e) {
        if (!skillsContainer.contains(e.target)) {
            suggestionBox.style.display = 'none';
        }
    });

    // --- FORM VALIDATION ---
    const nameField = document.getElementById('nameInput');
    const emailField = document.getElementById('emailInput');
    const phoneField = document.getElementById('phoneInput');

    const validators = {
        name: () => /^\D+$/.test(nameField.value.trim()),
        email: () => /^[^\s@]+@(gmail\.com|yahoo\.com)$/i.test(emailField.value.trim()),
        phone: () => /^\d{10}$/.test(phoneField.value.trim())
    };

    function validateField(field, validator) {
        if (validator()) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
            return true;
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
            return false;
        }
    }

    nameField.addEventListener('input', () => validateField(nameField, validators.name));
    emailField.addEventListener('input', () => validateField(emailField, validators.email));
    phoneField.addEventListener('input', () => validateField(phoneField, validators.phone));
    
    function isFormValid() {
        return validateField(nameField, validators.name) &&
               validateField(emailField, validators.email) &&
               validateField(phoneField, validators.phone);
    }
    
    // --- GLOBAL FUNCTIONS ---
    window.downloadPDF = function() {
        if (!isFormValid()) {
            alert('Please correct the errors in the form before downloading.');
            return;
        }
        const activeTemplate = document.querySelector('.resume-template:not(.d-none)');
        const resumeName = nameField.value.trim().replace(/\s+/g, '_') || 'resume';
        
        html2pdf().from(activeTemplate).set({
            margin: 0,
            filename: `${resumeName}.pdf`,
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        }).save();
    };

    // Initial population of the default template
    updateAllPreviews();
});