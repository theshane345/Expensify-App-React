import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider, database as default};

  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });




  // database.ref('expenses')
  //    .once('value')
  //    .then((snapshot) => {
  //      const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses);
  // });

  // database.ref('expenses').push({
  //   description:'Rent',
  //   note:'Due Monthly',
  //   amount:50000,
  //   createdAt:0
  // });



  // database.ref('notes/M0DwOjUih7i0TJLt8C_').remove()

  // database.ref('notes').push({
  //   title:'Test',
  //   body:'testinf'
  // });

 

  // database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  //   const val = snapshot.val()
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  // }, (e) => {
  //   console.log('error with data fetching', e)
  // });





  // setTimeout(() => {
  //   database.ref('age').set(27);
  // },3500)

  // setTimeout(() => {
  //   database.ref('age').set(28);
  // },7000)




  // setTimeout(() => {
  //   database.ref('age').set(23);
  // },14000)


  // database.ref('location/city')
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val();
  //   console.log(val);
  // })
  // .catch((e) => {
  //   console.log('Error fetching data', e)
  // });

//   database.ref().set({
//     name:'Shane O Riordan',
//     age:22,
//     stressLevel:6,
//     job:{
//       title:'Software Developer',
//       company:'Google'
//     },
//     isSingle:false,
//     location :{
//       city:'Kilkenny',
//       country:'Ireland'
//     }
//   }).then(() => {
//     console.log('data is saved');
//   }).catch((e) => {
//     console.log('this failed,', e)
//   });

// database.ref().update({
//   stressLevel:9,
//   'job/company':'Amazon',
//   'location/city':'Dublin'
// });


  // database.ref('isSingle')
  // .remove()
  // .then(() => {
  //   console.log('data is removed');
  // }).catch((e) => {
  //     console.log('Did not remove data,', e)
  // });;