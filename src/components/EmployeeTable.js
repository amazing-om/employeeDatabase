import React, { Component } from 'react';

let EmployeeTable = (props)=>{
		return <table>
			<thead>
				<tr>
					<td>Name</td>
					<td>Designation</td>
					<td>Company</td>

				</tr>
				</thead>
			<tbody>
			{props.rows.map(( row, index )=>{
				return <tr key={index}>
							<td>{row.name}</td>
							<td>{row.designation}</td>
							<td>{row.company}</td>
						</tr>
			})}
			</tbody>
		</table>;	
}
export default EmployeeTable;