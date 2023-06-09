# SVG Logo Maker

This is a command-line application that generates an SVG logo based on user input. The logo can be customized with a text string, text color, and background shape color. The available background shapes are triangle, square, and circle.


## Installation

To use this application, you must have Node.js installed on your computer. Once you have Node.js installed, follow these steps:

1.  Clone the repository to your local machine.

2.  Navigate to the root directory of the project in your terminal.

3.  Run the following command to install the necessary dependencies:

npm install


## Usage

To use the Logo Maker, navigate to the root directory of the project in your terminal and run the following command:

node index.js

This will start the application and prompt you for input to generate a logo. Follow the prompts to enter your desired text, text color, background shape, background color, and filename for your logo. Once you have entered all the required information, the application will generate an SVG file with your logo.

## Live Demonstration of Application Functionality

https://drive.google.com/file/d/1YHk7RWOjwuJlJB7t6oI-Yo7xeXDo3C8d/view

## Sample Logos Created with the Application

![alt Image of the application](https://github.com/ShahnazAfreen9849/svg-logo/blob/main/images/Circle.png)


![alt Image of the application](
    https://github.com/ShahnazAfreen9849/svg-logo/blob/main/images/Square.png
)


![alt Image of the application](https://github.com/ShahnazAfreen9849/svg-logo/blob/main/images/Triangle.png)

## Running Tests

To run the unit tests for this application, navigate to the root directory of the project in your terminal and run the following command:

npm test -- --testPathPattern=Shapes.test.js

This will run the test suite using Jest. The tests include unit tests for the Shape class, which is used to generate the background shapes for the logos.

![alt Image of the application](https://github.com/ShahnazAfreen9849/svg-logo/blob/main/images/Test.png)

## Contributing

This project is open to contributions from anyone. If you have an idea for a feature or improvement, please open an issue or submit a pull request.


## License

This project is licensed under the terms of the MIT license.

