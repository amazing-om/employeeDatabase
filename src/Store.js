import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let initialState = {
	employeeFields: {name: '', designation: '', company: ''},
	employeeRecords: {employees:{'1': {name: 'OM', designation: 'SE', company: 'Myntra'}}, employeeIds: ['1']}
}
let Store = createStore( reducers, initialState, applyMiddleware(thunk) );

export default Store;