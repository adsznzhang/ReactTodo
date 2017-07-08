import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCKif6PLvUNN967ppcWzcv5l7-smP5TySs",
    authDomain: "react-todo-1df41.firebaseapp.com",
    databaseURL: "https://react-todo-1df41.firebaseio.com",
    projectId: "react-todo-1df41",
    storageBucket: "react-todo-1df41.appspot.com",
    messagingSenderId: "640284898680"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    appName: 'TODO App'
})
