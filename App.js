//=======================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//=======================================================================================

//========================================================================================
//This is the main component of the application 
//========================================================================================
import React from 'react'
import { setLocalNotification }   from "./utils/Notifications"
import { AppMainStackNavigator }  from "./components/appStackNavigator"



export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return(
      <AppMainStackNavigator />
    )
  }
}

