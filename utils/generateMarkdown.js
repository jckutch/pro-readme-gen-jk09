// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt)', 
    GPL: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.txt)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)', 
    Mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)',
    None: '', 
     }
  return badges[license]
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
  const licenseLinks = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt)', 
    GPL: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.txt)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)', 
    Mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)', 
    None: '',

  }
  console.log(licenseLinks[license]);
  return licenseLinks[license];
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return`Application is covered under <br /> ${renderLicenseLink(license)}`
      }else{
        return '';
      }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge (data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
  
  <a name='description'></a>
  ## Description
  ${data.description}

  <a name='usage'></a>
  ## Usage
  ${data.usage}

  <a name='installation'></a>
  ## Installation
  ${data.installation}

  <a name='tests'></a>
  ## Tests
  ${data.tests}

  <a name='contributing'></a>
  ## Contributing
  Provide detailed instructions for contributing to project.
  ${data.contributing}
  
  <a name='questions'></a>
  ## Questions
  Github link: https://github.com/${data.github} <br /> For any additonal question, please reach me via my Email: ${data.email}

  <a name='license'></a>
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;