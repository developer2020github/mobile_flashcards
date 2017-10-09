## Project title
###### Mobile flashcards: a quiz application

2017

Author:  developer2020 

e-mail:  dev276236@gmail.com


## Project overview
Personal project:
application built with React native for Android. It allows user to select a quiz 
from list of quizzes, go through that selected quiz and 
evaluate the answers. User can add new questions/answers (cards) 
and new quizzes (decks). Data is persistent between application 
runs; application uses AsyncStorage for saving data. 
It also provides daily reminders to do a quiz per day if used did not 
do any quiz on that day. 

## Built with (libraries/technologies/APIs used)
##### Application itself:
* React Native 
* Expo

## Tested on
* Physical Android device 
* Android version: 6.0.1

### Installing the application and running it in development mode.
0. Your Android device and computer need to be connected to the same network.
1. Ensure you have Node.js installed.
2. Install Yarn. 
3. Download the application. 
4. Install all the Node modules; navigate to the project root folder and 
run command
`npm install` 
5. On your Android device install Expo.
6. On the computer, start the project by running 
`yarn start` 
7. Start Expo on the Android device; follow the instructions to get application running.
8. Note Expo may pick a wrong IP address for the computer wireless adapter; 
in this case identify correct address by running ipconfig (192.168.0.101 in the example below), set configuration for React Native on the computer by running 
set REACT_NATIVE_PACKAGER_HOSTNAME=192.168.0.101
and restart the application.
