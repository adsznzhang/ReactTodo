import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCKif6PLvUNN967ppcWzcv5l7-smP5TySs",
    authDomain: "react-todo-1df41.firebaseapp.com",
    databaseURL: "https://react-todo-1df41.firebaseio.com",
    projectId: "react-todo-1df41",
    storageBucket: "react-todo-1df41.appspot.com",
    messagingSenderId: "640284898680"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo APP',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Andrew',
        age: 25
    }
});


// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('GOT entire database',snapshot.val());
// },(e) => {
//     console.log('Unable to fetch value', e);
// });



// var logData = (snapshot) => {
//     console.log('GOT value', snapshot.val())
// }

// firebaseRef.on('value', logData)

// firebaseRef.off('value',logData)

// firebaseRef.update({isRunning: false})

var logData = (snapshot) => {
    console.log('Got value', snapshot.val());
};
firebaseRef.child('user').on('value', logData);

firebaseRef.child('user').update({
    name: 'ANDRAIN'
})

firebaseRef.child('app').update({
    name: 'TODO APP'
})
