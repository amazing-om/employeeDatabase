import App from '../containers/App';
import AddEmployee from '../containers/AddEmployee';

let AppRoutes = {
	path: '/',
	component: App,
	childRoutes: [
		{
			path: '/add',
			component: AddEmployee
		}
	]
};

export default AppRoutes;