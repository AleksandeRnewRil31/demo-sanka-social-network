import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


it('after deleting length of messages should be increment ', () => {
    let action = addPostActionCreator("san4es.com");
    let state = {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: "like: 53" },
            { id: 2, message: "It's my first post", likesCount: "like: 99" },
        ]
    };
    let newState = profileReducer(state, action);


    expect(newState.posts.length).toBe(3);
});



it('message of new post should be correct ', () => {
    let action = addPostActionCreator("san4es.com");
    let state = {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: "like: 53" },
            { id: 2, message: "It's my first post", likesCount: "like: 99" },
        ]
    };
    let newState = profileReducer(state, action);


    expect(newState.posts[2].message).toBe("san4es.com");
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let state = {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: "like: 53" },
            { id: 2, message: "It's my first post", likesCount: "like: 99" },
        ]
    };
    let newState = profileReducer(state, action);


    expect(newState.posts.length).toBe(3);
});
