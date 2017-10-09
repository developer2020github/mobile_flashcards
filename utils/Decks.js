
//========================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================================================

//========================================================================================
//This file contains hard-coded definition of initial decks to be loaded,
//for initial testing and development puproses
//========================================================================================

import * as api from "./api" 
import * as lib from "./lib" 

//sample new deck object to test interaction with async storage
export const newDeck = {
    
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
               
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event', 
               
            }
        ]
    
}



export const Decks = {
    
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment', 
               
            }
        ]
    }, 

    Python: {
        title: 'Python',
        questions: [
            {
                question: 'Is Python cool?',
                answer: 'It is!', 
               
            }
        ]
    }, 

    Java: {
        title: 'Java',
        questions: [
            {
                question: 'Is Java cool?',
                answer: 'It is!', 
               
            }
        ]
    }, 

    Beer: {
        title: 'Beer',
        questions: [
            {
                question: 'Is Beer cool?',
                answer: 'It is!', 
               
            }
        ]
    }
}

//this function will populate local storage with the hard coded list of decks 
//defined above
export function populateLocalStorage(){
   const listOfDecks = lib.listOfObjectsToArray(Decks)
   for (let deck of listOfDecks) {
    api.AddDeck(deck)
  }
}