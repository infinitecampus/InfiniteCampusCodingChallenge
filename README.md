<p align="center">
  <a href="https://infinitecampus.com/" target="blank"><img src="assets/img/logo.png" width="200" alt="Infinite Campus Logo" /></a>
</p>

Welcome to the Infinite Campus coding challenge!

## Description

This is the code base for a small grade book!  You are an Infinite Campus developer working on making this grade book better for the customers.

Read below for instructions on setting up your development environment, then move to the "Completing the Challenge" section.

## Prerequisites

1. A computer!  This will work on any computer, whether it's running Windows, MacOS, or Linux
2. A text editor.  This is a program that will allow you to view and edit the text files in this repository.  Some options include:
  * [Notepad++](https://notepad-plus-plus.org/)
  * [Sublime Text](https://www.sublimetext.com/)
  * [Visual Studio Code](https://code.visualstudio.com/)
3. NodeJS - NodeJS is a system that runs JavaScript, which is what this application is written in.  To install:
  * For Windows click here: https://nodejs.org/dist/v16.18.0/node-v16.18.0-x86.msi and install it like any other application
  * For MacOS click here: https://nodejs.org/dist/v16.18.0/node-v16.18.0.pkg and install it like any other application
4. Your computer's [command prompt](https://towardsdatascience.com/a-quick-guide-to-using-command-line-terminal-96815b97b955)

## Structure of this code repository

This is a fully functional web application written entirely in JavaScript and TypeScript

### /assets

This folder contains all the files that make the user interface.  These are JavaScript and CSS files

### /src

This is the "server" portion of the application.  It contains the business logic.  This is the part that the user interface communicates with to fetch and write data.

## Download this code base

### Option 1 - With "Git"
Git is an application that most software professionals use to interact with code.  
It is tremendously useful, but also can be complicated to get started with.  

If you are up to the challenge, you can download this code repository by installing Git and using the "git clone" command to download it onto your computer.

See a tutorial [here](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)

### Option 2 - Directly download
If instead you don't want to learn yet another thing, you can feel free to skip the git portion and directly download the code repository.
Simply click the green "Code" dropdown in the upper right and click "Download Zip".
Locate that file in your file system and extract that zip and you have the code on your computer!

## Install dependencies

Much of the software delivered in the world doesn't live in a silo.  Programs are written with hundreds of dependencies of other programs that exist in the world in the form of open source software.
This program is no exception.  Some of the open source technologies being used here are:
| Open Source Software              | Description                                                                      |
| NodeJS                            | This is the tool that actually runs the program.                                 |
| [AlpineJS](https://alpinejs.dev/) | This is a JavaScript library that helps a developer write interactive webpages   |
| NestJS                            | This is a JavaScript library for writing the server portion of a web application [|](|)


1. Open your terminal/command prompt
2. Navigate to the downloaded code using the "cd" command
3. Then, use the "npm" command to download dependencies:

This command will automatically download all these open source dependencies and prepare them for the program to utilize
```bash
$ npm install
```

## Running the app

Once that command completes, you should be ready to start the application!

```bash
$ npm run start
```

Open up your favorite web browser and put this in the URL bar: http://localhost:3000

## The Challenge

### Intermediate Challenge

Your product manager approached you and told you that the marketing department decided to go under a company-wide rebranding!

They would like you to change the header of the webpage from the Infinite Campus green to a dark blue instead.

#### Hints/Tips
1. Most webpage styles and formats are expressed in files called Cascading Style Sheets (ending in .css).  These style sheets are where you can define things like font size, positioning, colors, etc.
2. Colors can be expressed in multiple different formats. Our colors are expressed as a 6-character hexadecimal string.  Look here for more information on defining colors in web sitesOur colors are expressed as a 6-character hexadecimal string.  Look [here](https://htmlcolorcodes.com/) for more information on defining colors in web sites.

### Hard Challenge

BUG REPORT!  Your product manager received a bug report from a customer and was able to replicate the issue on your team's test site.

REPLICATION STEPS:
1. Open the Grade Book
2. Click in any one of the score fields
3. Enter a score (or change the score if one already existed)
4. Without clicking anything else on the screen, click save
5. Refresh the screen
6. Note that the value did not save properly

NOTE: If you make a change to a field, then click away to another field, then click save then the issue does not occur.

Your job is to figure out how to fix this bug and submit the fixed code.

#### Hints/Tips
1. There are couple pieces of logic in play here.  There is the code that fires when a value on the screen changes, and the code that fires when the save button is pressed.  This is all user interface code.  Look around for a JavaScript file (.js) that may have this logic.
2. The logic relies on something called "DOM events".  These are functions that kick off when certain things on the screen happen like "Input changed" or "Button pressed".

## Submitting Your Result

Once you have made your changes you need to zip up your submission and submit it to the infinitecampus.com website.

### Create Submission

In your command prompt, run this command:
```sh
node create-submission.js
```

This will create a file called "my-submission.zip"

### Go to submissions page

Open your web browser and go to  [this](https://www.infinitecampus.com/info/careers-in-coding) page 

### Fill Out the Form

Enter your information.  Where it says "Attach your Submission" select the file "my-submission.zip"

