const { Triangle, Circle, Square } = require("./lib/Shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'shape',
            message: 'What should be the shape? ',
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'What must be the text color?',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Type your name initial!',
        },
        {
            type: 'input',
            name: 'fontsize',
            message: 'What must be the fontsize?',
        },
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'What must be the Background Color?',
        },
    ])
    .then(answers => {
        if (answers.shape === 'circle') {
            const circle = new Circle(answers.shape, answers.textcolor, answers.text, answers.fontsize, answers.backgroundColor)
            console.log(circle.render())
            fs.writeFileSync('./logo.svg', circle.render())
        }
        if (answers.shape === 'square') {
            const square = new Square(answers.shape, answers.textcolor, answers.text, answers.fontsize, answers.backgroundColor)
            console.log(square.render())
            fs.writeFileSync('./logo.svg', circle.render())
        } if (answers.shape === 'triangle') {
            const circle = new Triangle(answers.shape, answers.textcolor, answers.text, answers.fontsize, answers.backgroundColor)
            console.log(circle.render())
            fs.writeFileSync('./logo.svg', circle.render())
        }

    })

