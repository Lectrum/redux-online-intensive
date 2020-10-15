import { socket } from '../init/socket';
import { uiActions } from '../ui/actions';

export const socketActions =  {
    listenConnection: () => (dispatch) => {
        socket.on('connect', () => {
            dispatch(uiActions.setOnlineState());
        });

        socket.on('disconnect', () => {
            dispatch(uiActions.setOfflineState());
        });
    },
    listenPosts: () => (dispatch) => {
        socket.on('create', (event) => {
            console.log(event);
        });
    },
};
