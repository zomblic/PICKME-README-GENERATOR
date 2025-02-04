// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';
import colors from 'colors';
import { type } from 'os';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: colors.cyan("What is the title of your project?")
    },
    {
        type: "input",
        name: "description",
        message: colors.white("Please provide a description of your project, including the what it is and why did you create it.")
    },
    {
        type: "input",
        name: "installation",
        message: colors.magenta("Please provide step by step installation requirements and instructions. Please include any dependencies that are required.")
    },
    {
        type: "input",
        name: "usage",
        message: colors.yellow("How do we use your project? Provide detailed instructions and, if possible, include screenshots.")
    },
    {
        type: "input",
        name: "credits",
        message: colors.blue("Please list any collaborators and include their links, any third-party assets, or tutorials that you used.")
    },
    {
        type: "list",
        name: "license",
        message: colors.magenta("Please choose your license."),
        choices: ["MIT", "Apache", "GPL", "I don't want one <-never the answer","None"]
    },
     
        {
        type: "input",
        name: "tests",
        message: colors.red("There are currently no tests for this project, although there might be in future. Please press enter.")
    },
    { 
        type: "input",
        name: "reportingIssue",
        message: colors.yellow("Please be aware bugs and issues may appear. Please report them via the contact info in the Questions section. Please press enter.")
    },
    {
        type: "input",
        name: "issuesReporting",
        message: colors.yellow("Please provide the trigger and event for the issue.")    
    },
    {
        type: "input",
        name: "questions",
        message: colors.red("Press enter to add your Github username and/or email.")
    },
    {
        type: "input",
        name: "name",
        message: colors.rainbow("What is your name?")
    },
    {
        type: "input",
        name: "github",
        message: colors.rainbow("What is your GitHub username?")
    },
    { type: "input",
        name: "githublink",
        message: colors.rainbow("Please provide a link to your GitHub profile.")
    },
    {
        type: "input",
        name: "yourEmail",
        message: colors.rainbow("What is your email??")

    },
    {type: "input",
    name: "Other",
    message: colors.rainbow("Please write any additional ways to reach out to you.")
    },
    {
        type: "input",
        name: "additionalInfo",
        message: colors.magenta("Write any other additional information for your README.")
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Congrats on creating your README!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        });

};

// Function call to initialize app
init();
