/**
 * Created by carvenzhang on 2016/6/17.
 */
import { RECEIVE_ACTION, REQUEST_ACTION } from './actions'

export default function (state = {
	isFetching: false
}, action) {
	switch (action.type) {
		case REQUEST_ACTION:
			return Object.assign({}, state, {isFetching: true});
		case RECEIVE_ACTION:
			return Object.assign({}, state, {isFetching: false});
		default:
			return state;
	}
}
