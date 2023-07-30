const form = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  const educationItems = document.querySelectorAll('.education-item');
  let educationHTML = '';
  educationItems.forEach(function(item) {
    const degree = item.querySelector('input[type="text"][id^="eduDegree"]').value;
    const institution = item.querySelector('input[type="text"][id^="eduInstitution"]').value;
    const startDate = item.querySelector('input[type="text"][id^="eduSdate"]').value;
    const endDate = item.querySelector('input[type="text"][id^="eduEdate"]').value;


    educationHTML += `
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Institution:</strong> ${institution}</p>
      <p><strong>Start Date:</strong> ${startDate}</p>
      <p><strong>End Date:</strong> ${endDate}</p>
      <hr>
    `;
  });

  const experienceItems = document.querySelectorAll('.experience-item');
  let experienceHTML = '';
  experienceItems.forEach(function(item) {
    const title = item.querySelector('input[type="text"][id^="expTitle"]').value;
    const company = item.querySelector('input[type="text"][id^="expCompany"]').value;
    const duration = item.querySelector('input[type="text"][id^="expDuration"]').value;
    const notice = item.querySelector('input[type="text"][id^="expNotice"]').value;


    experienceHTML += `
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Duration:</strong> ${duration}</p>
      <p><strong>Notice:</strong> ${notice}</p>
      <hr>
    `;
  });

  const skills = document.getElementById('skills').value;
  const summary = document.getElementById('summary').value;


  const resumeHTML = `
    <h2>Resume</h2>
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${firstName}</p>
    <p><strong>Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>

    <h3>Education</h3>
    ${educationHTML}

    <h3>Experience</h3>
    ${experienceHTML}

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Professional Summary</h3>
    <p>${summary}</p>
  `;

  resumeOutput.innerHTML = resumeHTML;
});


const addEducationBtn = document.getElementById('addEducationBtn');
const educationSection = document.getElementById('educationSection');

let educationCount = 1;
addEducationBtn.addEventListener('click', function() {
  educationCount++;
  const newEducationItem = document.createElement('div');
  newEducationItem.className = 'education-item';
  newEducationItem.innerHTML = `
    <label for="eduDegree${educationCount}">Degree</label>
    <input type="text" id="eduDegree${educationCount}" required>
    <label for="eduInstitution${educationCount}">Institution</label>
    <input type="text" id="eduInstitution${educationCount}" required>
    <label for="eduSdate${educationCount}">Start Date</label>
    <input type="text" id="eduSdate${educationCount}" required>
    <label for="eduEdate${educationCount}">End Date</label>
    <input type="text" id="eduEdate${educationCount}" required>
  `;
  educationSection.appendChild(newEducationItem);
});

const addExperienceBtn = document.getElementById('addExperienceBtn');
const experienceSection = document.getElementById('experienceSection');

let experienceCount = 1;
addExperienceBtn.addEventListener('click', function() {
  experienceCount++;
  const newExperienceItem = document.createElement('div');
  newExperienceItem.className = 'experience-item';
  newExperienceItem.innerHTML = `
    <label for="expTitle${experienceCount}">Title</label>
    <input type="text" id="expTitle${experienceCount}" required>
    <label for="expCompany${experienceCount}">Company</label>
    <input type="text" id="expCompany${experienceCount}" required>
    <label for="expDuration${experienceCount}">In Months/Years</label>
    <input type="text" id="expDuration${experienceCount}" required>
    <label for="expNotice${experienceCount}">Notice Period</label>
    <input type="text" id="expNotice${experienceCount}" required>
  `;
  experienceSection.appendChild(newExperienceItem);
});

const addCertificationBtn = document.getElementById('addCertificationBtn');
const certificationsSection = document.getElementById('certificationsSection');

let certificationCount = 1;
addCertificationBtn.addEventListener('click', function() {
  certificationCount++;
  const newCertificationItem = document.createElement('div');
  newCertificationItem.className = 'certification-item';
  newCertificationItem.innerHTML = `
    <label for="certName${certificationCount}">Certification Name</label>
    <input type="text" id="certName${certificationCount}" required>
    <label for="certOrganization${certificationCount}">Organization</label>
    <input type="text" id="certOrganization${certificationCount}" required>
    <label for="certDate${certificationCount}">Issue Date</label>
    <input type="text" id="certDate${certificationCount}" required>
  `;
  certificationsSection.appendChild(newCertificationItem);
})