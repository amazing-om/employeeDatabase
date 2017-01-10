 

export let ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export let SEARCH_EMPLOYEE = 'SEARCH_EMPLOYEE';

export function addEmpAction(fields){

 	return{
 		type:ADD_EMPLOYEE,
 		payload:{...fields, id:new Date().getTime()
 		}
 	}
 }

 export function searchEmployeee(filteredFields){

 	return{
 		type:SEARCH_EMPLOYEE,
 		payload:{...filteredFields}
 	}
 }