/**
 * Created by carvenzhang on 2016/6/17.
 */
import { action_request, action_receive } from '../common/actions'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export function action_login(username, password) {
	return dispatch =>{
		dispatch(action_request());
		const option = {
			method:"POST",
			headers:{
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body:querystring.stringify({username:this.state.username, password: this.state.password})
		};

		fetch(__HOST__ + "/users/login", option)
			.then((res) => {
				console.log(res);
				if(res.ok){
					return res.json()
				}
				else{
					throw "网络请求失败";
				}
			})
			.then(json=>{
				console.log(json);
				if(json.status){
					this.props.doLogin(json.data);
				}
				else{
					this.toastShow("帐号或密码不正确");
				}
			})
			.catch(err =>{

			})
	}
}

function login_success(user) {
	return{
		type: LOGIN_SUCCESS,
		user
	}
}


function login_error(err) {
	return{
		type: LOGIN_ERROR,
		err
	}
}
