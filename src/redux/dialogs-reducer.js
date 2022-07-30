const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
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
    ]
};  

const dialogsReducer = (state = initialState, action) => {
switch (action.type) {
    case SEND_MESSAGE:
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages, { id: 7, message: body }]
        };
    case UPDATE_NEW_MESSAGE_BODY:
        return {
            ...state,
            newMessageBody: action.body
        };
    default: return state;
}
};


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;