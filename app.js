const profileDataArgs = process.argv.slice(2, process.argv.length);

const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
console.log(generatePage('Jane', 'janehub'));




// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('==============');

//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
    
// };

// printProfileData(profileDataArgs);