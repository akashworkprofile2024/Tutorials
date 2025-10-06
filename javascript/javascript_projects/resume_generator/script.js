// Live update handler
const fields = [
  { input: 'nameInput', preview: 'namePreview' },
  { input: 'emailInput', preview: 'emailPreview' },
  { input: 'phoneInput', preview: 'phonePreview' },
  { input: 'summaryInput', preview: 'summaryPreview' },
  { input: 'skillsInput', preview: 'skillsPreview' },
  { input: 'experienceInput', preview: 'experiencePreview' },
  { input: 'educationInput', preview: 'educationPreview' }
];


fields.forEach(field => {
  const inputEl = document.getElementById(field.input);
  const previewEl = document.getElementById(field.preview);

  inputEl.addEventListener('input', () => {
    previewEl.textContent = inputEl.value || `(${field.preview})`;
  });
});

// Handle image upload
const imageInput = document.getElementById('imageInput');
const profileImage = document.getElementById('profileImage');

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
      profileImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

// PDF download function
function downloadPDF() {
  const element = document.getElementById('resume-preview');
  html2pdf().from(element).set({
    margin: 0.5,
    filename: 'resume.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
  }).save();
}
