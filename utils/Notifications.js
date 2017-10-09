
//========================================================================================
//Mobile flashcards: a mobile application built with React Native 
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================================================

//========================================================================================
//Tthis module handles local notifications
//refer to 
//https://github.com/udacity/reactnd-UdaciFitness-complete/blob/8c4b20d9620970e475806bfe8f61308bc336b465/utils/helpers.js
//(was used as an expample used to build this functionality)
//========================================================================================
import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'MobileFlashCards:notifications'
const DEBUG_ON = false  //sets module into debug and testing mode; 


function createNotification () {
  return {
    title: 'Do a quiz every day',
    body: "👋  Don't forget to do a quiz today!",
    
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}


export function clearNoticationPermission(){
    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(null))
}


export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function reScheduleNotification(){
    //this function should be called once action for today is completed to 
    //clear current notification and re-schedule it for tomorrow
    clearLocalNotification()
	.then(setLocalNotification)
}
function getNotificationDateAndTime(debugOn=DEBUG_ON){ 
    //this function suspports two modes: 
    //1. Normal - set notification for tomorrow at 21:00
    //2. Debug - set notificatio 10 seconds from now (for debugging)
    let notificationDate = new Date()
    if (debugOn){
        notificationDate.setSeconds(notificationDate.getSeconds()+10)
    }else{
        notificationDate.setDate(notificationDate.getDate() + 1)
        notificationDate.setHours(21)
        notificationDate.setMinutes(0)
    }
    
    return notificationDate
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
 
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = getNotificationDateAndTime()
                
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }

          })
      }
    })
}