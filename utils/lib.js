//========================================================
//
//2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================

//========================================================================================
//Library of generic functions used by application
//========================================================================================

export function listOfObjectsToArray(listOfObjects){
	//this function converts a list of objects into an array 
	  return Object.keys(listOfObjects).map((key)=>{
		return listOfObjects[key]; 
	  })
	}
