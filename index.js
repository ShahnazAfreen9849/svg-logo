const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/Shapes");

function writeToFile(fileName, answers) {
  let svglogo= "";
  svglogo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svglogo += "<g>";
  svglogo+= `${answers.shape}`;

  let selectedShape;
  if (answers.shape === "Triangle") {
    selectedShape = new Triangle();
    svglogo += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    selectedShape = new Square();
    svglogo += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    selectedShape = new Circle();
    svglogo += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svglogo+= `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svglogo += "</g>";
  svglogo += "</svg>";

  fs.writeFile(fileName, svglogo, (err) => {
    if (err) {
      console.log("Error occurred while generating the logo SVG file.");
      console.log(err);
    } else {
      console.log(`Generated ${fileName}`);
    }
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Select the text to appear on your logo (up to three characters):",
        name: "text",
      },
      {
        type: "input",
        message:
          "Choose the color of your logo text (Enter color keyword OR a hexadecimal number):",
        name: "textColor",
      },
      {
        type: "list",
        message: "Select the shape to render in your logo:",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Select the logo color (Enter color keyword OR a hexadecimal number):",
        name: "shapeBackgroundColor",
      },
      {
        type: "input",
        message: "Enter logo name:",
        name: "fileName",
        validate: function (input) {
          if (input.length > 0 && !input.includes("/")) {
            return true;
          } else {
            return "File name";
          }
        },
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        writeToFile(answers.fileName, answers);
      }
    });

}

promptUser();