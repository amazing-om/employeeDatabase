import React, { Component } from 'react';

class EmployeeForm extends Component{

	constructor( props ){
		super( props );

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(evt){
		//console.log(arguments);
		evt.preventDefault();
		this.props.formData({
			name: this.refs.employeeNameInp.value,
			designation: this.refs.employeeDesignationInp.value,
			company: this.refs.employeeCompanyInp.value
		});
		this.refs.employeeNameInp.value = '';
		this.refs.employeeDesignationInp.value = '';
		this.refs.employeeCompanyInp.value = '';
	}

	render(){ 
		return <form >
				<label htmlFor="employeeName">
					Name: 
					<input id="employeeName" type="text" ref="employeeNameInp" />
				</label>
				<label htmlFor="employeeDesignation">
					Designation: 
					<input id="employeeDesignation" type="text" ref="employeeDesignationInp" />
				</label>
				<label htmlFor="employeeCompany">
					Company: 
					<input id="employeeCompany" type="text" ref="employeeCompanyInp" />
				</label>
				<button onClick={this.onFormSubmit} >Submit</button>
				<br></br>
				<br></br>
			</form>;
	}
}
export default EmployeeForm;