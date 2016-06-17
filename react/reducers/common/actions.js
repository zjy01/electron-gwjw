/**
 * Created by carvenzhang on 2016/6/17.
 */
export const REQUEST_ACTION = 'REQUEST_ACTION';
export const RECEIVE_ACTION = 'RECEIVE_ACTION';

export function action_request() {
	return{
		type: REQUEST_ACTION
	}
}

export function action_receive() {
	return{
		type: RECEIVE_ACTION
	}
}
