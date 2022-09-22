// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgRV3GthYnSKFwvgyCd5RhXVHQcJvBOgg",
  authDomain: "wastewatch-cea81.firebaseapp.com",
  projectId: "wastewatch-cea81",
  storageBucket: "wastewatch-cea81.appspot.com",
  messagingSenderId: "892711306862",
  appId: "1:892711306862:web:c00395e4b4bbefa85a487f",
  measurementId: "G-5J4B9LRYRB"
};

export const environment = {
  production: false,
  firebase: {
    projectId: 'wastewatch-cea81',
    appId: '1:892711306862:web:c00395e4b4bbefa85a487f',
    databaseURL: 'https://wastewatch-cea81-default-rtdb.firebaseio.com',
    storageBucket: 'wastewatch-cea81.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDgRV3GthYnSKFwvgyCd5RhXVHQcJvBOgg',
    authDomain: 'wastewatch-cea81.firebaseapp.com',
    messagingSenderId: '892711306862',
    measurementId: 'G-5J4B9LRYRB',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
