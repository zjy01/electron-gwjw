/**
 * Created by carvenzhang on 2016/6/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/app.jsx' //ui视图
import Login from '../containers/login.jsx' //ui视图


const routes = (state) => {
	function loginRequireAuth() {
		return state.isLogin;
	}
	return (
		<Route path="/" component={App}>
			<Route path="/login" component={Login} onEnter={loginRequireAuth}/>
		</Route>
	)
};

export default routes;
