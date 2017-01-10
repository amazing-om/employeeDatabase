import React, { Component } from 'react';

class EmployeeSearch extends Component{

	constructor(props) {
		super(props);
		
		this.searchEmployee = this.searchEmployee.bind(this);
	}

	searchEmployee(){
		console.log(arguments);

		let searchValue = this.refs.employeeSearch.value;
	}
	render(){
		return <div>
				<label htmlFor="employeeSearch">
					Search: 
					<input id="employeeSearch" type="text" ref="employeeSearchInp" />
					<button onClick={this.searchEmployee}>Search</button>
				</label>
				<br></br>
				<br></br>
		</div>
	}
}

export default EmployeeSearch;