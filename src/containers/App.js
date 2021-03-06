import React from 'react';
import { Link } from 'react-router';

//local imports
import EmployeeDetails from './EmployeeDetails';
//import SearchEmployee from './SearchEmployee';

let App = (props)=>{
	return <div id="react-app">
				{props.children || <Link to={'/add'} >Add employee</Link> }
				
				<EmployeeDetails />
			</div>
}

export default App;