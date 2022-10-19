const { rejects } = require('assert');
const fs = require('fs');
const { off } = require('process');

function empProfile(profileObject) {
    let otherItem,{name, id, email, officeNumber, github, school} = profileObject;

    if (officeNumber) {
        otherItem = `Office Number: ${officeNumber}`
    } else if (github) {
        otherItem = `GitHub: <a href = "https://github.com/${github}" target="_blank"> ${github}</a>`
    } else {
        otherItem = `School: ${school}`
    }

    return `
    <div class="employee-card">
            <div class="header">
                <div class="name">
                    ${name}
                </div>
                <div class="title">
                    ${profileObject.constructor.name}
                </div>
            </div>
            <div class="body">
                <div class="id">
                    ID: ${id}
                </div>
                <div class="email">
                    Email: <a href="mailto:${email}">${email}</a>
                </div>
                <div class="other">
                    ${otherItem}
                </div>
            </div>
        </div>
    `
}

function totalProfiles(profileObjectArray) {
    let cnt = '';
    console.log(profileObjectArray);
    for (i=0; i<profileObjectArray.length; i++) {
        cnt += empProfile (profileObjectArray[i])
    }
    return cnt;
}

module.exports = function (profileObjectArray) {
    let pg = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <header>My Team</header>
            <main>
                ${totalProfiles(profileObjectArray)}
            </main>
        
        </body>
    </html>
    `
    new Promise((resolve,reject) => {
        fs.writeFile('./dist/index.html', pg, err => {
            if (err) {
                reject(err);
                return;
            } resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
}