import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reduser";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: "like: 53" },
                { id: 2, message: "It's my first post", likesCount: "like: 99" },
            ],
            newPostText: "Sanka.com"
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Alexander" },
                { id: 2, name: "Max" },
                { id: 3, name: "Kirill" },
                { id: 4, name: "Vadim" },
                { id: 5, name: "Oksana" },
                { id: 6, name: "Alina" }
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Yes" },
                { id: 4, message: "Yes" },
                { id: 5, message: "Yes" },
                { id: 6, message: "Yes" }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {

    },
    updateNewPostText(newText) {

    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;