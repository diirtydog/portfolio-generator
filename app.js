const inquirer = require('inquirer');

// const generatePage = require('./src/page-template.js');

// const fs = require('fs');

// const pageHTML = generatePage(name, github);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });



// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('==============');

//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
    
// };

// printProfileData(profileDataArgs);