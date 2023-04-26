const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of the project',
    },
    {
        type: 'list',
        message: 'What is your preferred Github license',
        name: 'version',
        choices: ['Apache 2.0', 'Gpl 3.0', 'BSD 3', 'none'],
    },
    {
      type: 'input',
      name: 'testType',
      message: 'What command should be run tests?',
      
    },
    {
        type: 'input',
        name: 'info',
        message: 'What does the user need to know about contributing to the repo?',
        
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app?',
        
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your app?',
        
      },
  ])
.then(({
    username,
    email,
    projectName,
    description,
    version,
    testType,
    info,
    repoInfo,
    installation,
    usage,

})=>{

    const template = `${projectName}

    * [Installation][#Installation]
    * [Usage][#usage]
    * [contribution][#contribution]
    * [credits][#credits]
    * [license][#license]
    * Installation
    ${installation}
    * Usage
    ${usage}
    ## Credits
    ## License
    ${version}

    # Contact
    * Github : ${username}
    * Email : ${email}`
     
writeToFile( projectName, template)





}
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`${fileName.toLowerCase().split(' ').join('')}.md`, data,(err) =>{
    if(err){
        console.log(err)    

    }
      console.log('Success!')
    ;
    }
    )}



  




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
