roject Name Description This project covers various topics and features of ECMAScript 6 (ES6), also known as ECMAScript 2015. It provides an overview of the new features introduced in ES6 and covers concepts such as constants, variables, block-scoped variables, arrow functions, default parameters, rest and spread function parameters, string templating, object creation and their properties, iterators, and for-of loops.

Table of Contents Resources Learning Objectives Requirements Setup Configuration Files Usage Testing Linting Contributing License Resources To learn more about the topics covered in this project, you can refer to the following resources:

ECMAScript 6 - ECMAScript 2015 Statements and declarations Arrow functions Default parameters Rest parameter Javascript ES6 — Iterables and Iterators Learning Objectives By the end of this project, you will be able to explain the following concepts without the help of Google:

What ES6 is New features introduced in ES6 The difference between a constant and a variable Block-scoped variables Arrow functions and function parameters default to them Rest and spread function parameters String templating in ES6 Object creation and their properties in ES6 Iterators and for-of loops Requirements General All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x Allowed editors: vi, vim, emacs, Visual Studio Code All files should end with a new line A README.md file, at the root of the project folder, is mandatory Code should use the .js extension Code will be tested using the Jest Testing Framework Code will be analyzed using the ESLint linter with specific rules provided All functions must be exported Setup

Install NodeJS 12.11.x: curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh sudo bash nodesource_setup.sh sudo apt install nodejs -y
Verify the installation: nodejs -v npm -v

Install Jest, Babel, and ESLint in your project directory: npm install --save-dev jest npm install --save-dev babel-jest @babel/core @babel/preset-env npm install --save-dev eslint
Configuration Files The project includes the following configuration files:

package.json: Includes project metadata and dependencies. babel.config.js: Babel configuration file. .eslintrc.js: ESLint configuration file.

Usage To start using this project, follow these steps:

Clone the repository: git clone https://github.com/your-username/your-project.git

Change into the project directory: cd your-project

Install the project dependencies: npm install
