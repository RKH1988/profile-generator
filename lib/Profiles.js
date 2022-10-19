const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const renderPage = require("../src/template")

class Profiles {
    constructor() {
        this.profile = [];
    }

    async initializeProfiles() {
        await this.addManager();
        await this.makeChoice();
    }

    async addManager() {
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the Manager's name?`,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Manager's ID?`,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Manager's email?`,
                },
                {
                    type: `input`,
                    name: `officeNumber`,
                    message: `What is the Manager's office number?`,
                }
            ])
            .then(({name,id,email,officeNumber}) => {
                this.profile.push(new Manager(name,id,email,officeNumber));
            });
    }

    async makeChoice() {
        await inquirer.prompt({
            type: `list`,
            name: `choice`,
            message: `Choose your next step:`,
            choices: [`Add Engineer`, `Add Intern`, `Finish Building`],
        })
        .then (async({choice}) => {
            if(choice === 'Finish Building') {
                this.buildProfiles(this.profile)
                return
            } else {
                await this.addEmployee(choice)
                this.makeChoice()
            }
        })
    }

    async addEmployee(passedChoice) {
        if (passedChoice === 'Add Engineer') {
            await this.addEngineer()
        } else {
            await this.addIntern()
        }
    }

        async addEngineer() {
            await inquirer
                .prompt([
                    {
                        type: `input`,
                        name: `name`,
                        message: `What is the Engineer's name?`,
                    },
                    {
                        type: `input`,
                        name: `id`,
                        message: `What is the Engineer's ID?`,
                    },
                    {
                        type: `input`,
                        name: `email`,
                        message: `What is the Engineer's email?`,
                    },
                    {
                        type: `input`,
                        name: `github`,
                        message: `What is the Engineer's GitHub?`,
                    },
                ])
                .then(({name, id,email,github}) => {
                    this.profile.push(new Engineer(name,id,email,github));
                });
        };

        async addIntern() {
            await inquirer
                .prompt([
                    {
                        type: `input`,
                        name: `name`,
                        message: `What is the Intern's name?`,
                    },
                    {
                        type: `input`,
                        name: `id`,
                        message: `What is the Intern's ID?`,
                    },
                    {
                        type: `input`,
                        name: `email`,
                        message: `What is the Intern's email?`,
                    },
                    {
                        type: `input`,
                        name: `school`,
                        message: `Where did the Intern go to school?`,
                    },
                ])
                .then(({name,id,email,school}) => {
                    this.profile.push(new Intern(name,id,email,school));
                });
        }

        async buildProfiles(passedArray) {
            renderPage(passedArray)
        }
    }


module.exports = Profiles;