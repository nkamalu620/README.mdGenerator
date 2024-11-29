// TODO: Include packages needed for this application
const inquirer = require('inquirer').default;
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project use?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
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
    }
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data.trim());
    console.log('README.md has been generated!');
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then(answers => {
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please reach out to ${answers.github} or email me at ${answers.email}.`;

        try {
            writeToFile('README.md', readmeContent);
        } catch (err) {
            console.error('Error writing to file:', err);
        }
    });
}

// Function call to initialize app
init();