// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](./utils/MITBADGE.svg)`;
  } else if (license === 'APACHE') {
    return `![License: APACHE](./utils/APACHEBADGE.svg)`;
  } else if (license === 'GPL') {
    return `![License: GPL](./utils/GPLBADGE.svg)`;
  } else {
    return '';
  };
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
       return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === 'APACHE') {
    return `[APACHE](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPL') {
    return `[GPL](https://opensource.org/licenses/GPL-3.0)`;
  } else {
    return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under the ${license} license.`;
  } else if (license === 'APACHE') {
    return `This project is licensed under the ${license} license.`;
  } else if (license === 'GPL') {
    return `This project is licensed under the ${license} license.`;
  } else {
    return '';
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

##  <span style="color:rgb(29, 77, 159);">Table of Contents</span>
- [Description](#description)
- [License](#license)
- [Install](#install)
- [Usage](#usage)
- [Credits](#credits)
- [How to Contribute](#how-to-contribute)
- [Interested || Current Contributors](#interested-current-contributors)
- [Tests](#tests)
- [Questions](#questions)
- [Additional Info](#additional-info)

  ## <span style="color:rgb(158, 66, 160);">Description</span>
  ${data.description}


  ## <span style="color:rgb(175, 77, 136);">License</span>
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## <span style="color:rgb(104, 8, 8);">Install</span>
  ${data.installation}

  ## <span style="color:rgb(26, 46, 133);">Usage</span>
  ${data.usage}

  ## <span style="color:rgb(225, 112, 112);">Credits</span>
  ${data.credits}

  ## <span style="color:rgb(72, 12, 182);">How to Contribute</span>
  If you are interested in contributing, please see my contact information in [Questions](#questions).
  ${data.contributing}

  
  ## <span style="color:rgb(170, 14, 74);">Tests</span>
  There are currently no tests available for the project.
  I will update this section as soon as they are available.

  ## <span style="color:rgb(65, 2, 255);">Questions</span>
  Please sent any questions or report any issues to -  <span style="color:rgb(68, 0, 255);"><u>${data.name}</u></span> - via Github and/or email:

 <u>Github Username:</u> ${data.github}

 <u>Github Link:</u>

 <u>Email:</u> ${data.yourEmail}

 ## <span style="color:rgb(112, 163, 225);">Issues and Bugs</span>
 In reporting an issue, please provide as much detail as possible. Please reach out via the contact info above.
 Once resolved, they will be stricked through.
 ${data.reportingIssue}
 ${data.issuesReporting}

  ## <span style="color:rgb(225, 112, 112);">Additional Info</span>
  ${data.additionalInfo}
`;
};

export default generateMarkdown;
