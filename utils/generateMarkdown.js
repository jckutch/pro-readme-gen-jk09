// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    GPL: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
    Mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    None: '', 
     }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
  const licenseLinks = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)', 
    GPL: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)', 
    Mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)', 
    None: ''

  }
  console.log(licenseLinks[license]);
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return`Licensed under the ${renderLicenseLink(license)}`
      }else{
        return '';
      }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ##Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Testing](#test)
  * [License](#license)
  * [Contributing to This Repo](#contributing)
  * [Questions / Contact Details](#questions)
  
  <a name='description'></a>
  ## Description
  ${data.description}

  <a name='usage'></a>
  ## Usage
  ${data.usage}

  <a name='installation'></a>
  ## Installation
  ${data.installation}

  <a name='test'></a>
  ## Testing
  ${data.test}

  <a name='license'></a>
  ## License
  The application is covered under a ${data.license} license.

  <a name='contributing'></a>
  ## Contributing to This Repo
  ${data.contributing}
  ${data.email}

  <a name='questions'></a>
  ## Questions
  Contact Me at Github:  
  ${data.github}

  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
