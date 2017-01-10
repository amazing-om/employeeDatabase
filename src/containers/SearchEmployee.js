import React from 'react';
import {connect} from 'react-redux';

//local modules

import EmployeeSearch from '../components/EmployeeSearch.js';
import { searchEmployeee } from '../actions';

let SearchEmployee = (props) =>{
	return <EmployeeSearch searchEmployeeField={(data)=>{ props.searchEmployeeField(data)

	}}/>
}
let mapStateToProps = (state, ownProps) =>{
	return{}
}

let mapDispatchToProps =(dispatch, ownProps) =>{
	return{

		searchEmployeeField(data){
			dispatch( searchEmployeee(data));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchEmployee);