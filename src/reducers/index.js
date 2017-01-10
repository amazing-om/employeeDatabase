import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import employeeFields from './employeeFields';
import employeeRecords from './employeeRecords';

export default combineReducers({
	employeeFields,
	employeeRecords,
	routing
});