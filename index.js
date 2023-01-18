// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will the project be used for?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How does the user contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What should the user know about tests for the project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache', 'GPL', 'MIT', 'Mozilla', 'None']
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`Success! Your README.md file has been created.`)
    );
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then ((answers) => {
        const data = generateMarkdown(answers);
        writeToFile('professionalREADME.md', data);
        console.log(answers);
    })
}

// Function call to initialize app
init();