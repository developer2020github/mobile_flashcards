//This file contains hard-coded definition of initial decks to be loaded,
//for initial testing and development puproses

export const newDeck = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
                isCorrect: true
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event', 
                isCorrect: true 
            }
        ]
    },
}

export const Decks = {
    
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment', 
                isCorrect: true
            }
        ]
    }, 

    Python: {
        title: 'Python',
        questions: [
            {
                question: 'Is Python cool?',
                answer: 'It is!', 
                isCorrect: true
            }
        ]
    }, 

    Java: {
        title: 'Java',
        questions: [
            {
                question: 'Is Java cool?',
                answer: 'It is!', 
                isCorrect: true
            }
        ]
    }, 

    Beer: {
        title: 'Beer',
        questions: [
            {
                question: 'Is Beer cool?',
                answer: 'It is!', 
                isCorrect: true
            }
        ]
    }
}