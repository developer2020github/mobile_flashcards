//this file will handle interaction with local storage
export const MOBILE_FLASHCARDS_DESKS_STORAGE_KEY = "MOBILE_FLASHCARDS_DESKS_STORAGE_KEY"
import {AsyncStorage} from "react-native"

//adding a new deck; input is a deck object 
export function AddDeck(deck) {
    let deckJSON_String = JSON.stringify({[deck.title]: deck})
    return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_DESKS_STORAGE_KEY, deckJSON_String)
}

export function RemoveDeck(deckTitle){
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_DESKS_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results)
        data[deckTitle] = undefined
        delete data[deckTitle]
        AsyncStorage.setItem(MOBILE_FLASHCARDS_DESKS_STORAGE_KEY, JSON.stringify(data))
      })

}

export function getDeck(deckTitle, action){
    //get a deck with a particular title from the local storage
    //action is a function to execute after deck is extracted

    AsyncStorage.getItem(MOBILE_FLASHCARDS_DESKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      const deck = data[deckTitle]
      action(deck)
    })
}

export function getAllDecks(){
    //gets all decks from the local storage; returns a promise
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_DESKS_STORAGE_KEY)
}

//this functionk adds a new question to an existing deck, identified by deckTitle
export function AddQuestion(deckTitle, question) {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_DESKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)

      data[deckTitle].questions.push(question)
      AsyncStorage.setItem(MOBILE_FLASHCARDS_DESKS_STORAGE_KEY, JSON.stringify(data))
    })

}