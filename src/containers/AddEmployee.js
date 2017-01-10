import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

//local modules
import EmployeeForm from '../components/EmployeeForm';
import { addEmpAction } from '../actions';


let AddEmployee = ( props )=>{
	return <section>
		<Link to={'/'} >Home</Link>
		<h1>Add Employee Detail</h1>
		<EmployeeForm formData={(fields)=>{ props.collectFields(fields); }} />
	</section>
};
let mapStateToProps = ( state, ownProps )=>{
	return {}
}
let mapDispatchToProps = ( dispatch, ownProps )=>{
	return {
		collectFields(fields){
			dispatch( addEmpAction(fields) );
		}
	}
}

export default connect( 
	mapStateToProps, 
	mapDispatchToProps 

	)(AddEmployee);