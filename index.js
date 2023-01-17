// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        message: 'What should a user know about using the project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How does the user contribute to the project repo?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What should the user know about tests for the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['APACHE 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'None']
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`Success! Your ${data.title} README.md file is created.`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then ((data) => {
        const data = generateMarkdown(answers);
        writeToFile('README.md', data);
        console.log(answers);
    })
}

// Function call to initialize app
init();