/**
 * Created by carvenzhang on 2016/6/17.
 */
import { LOGIN_SUCCESS, LOGIN_ERROR } from './actions'
export default function (state={
	isLogin: false,
	user:{}
}, action) {
	switch (action.type){
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {isLogin: true, user:action.user});
	}
}
