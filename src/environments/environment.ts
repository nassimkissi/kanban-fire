// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";


export const environment = {
  production: false,
  firebase: {
    projectId: 'kanbanfire-170d2',
    appId: '1:513751522652:web:d94f9dbc0fe35efdbb7599',
    storageBucket: 'kanbanfire-170d2.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyA8Io_lLkn7X3VzXWqAFHPU1_OcchrDevU',
    authDomain: 'kanbanfire-170d2.firebaseapp.com',
    messagingSenderId: '513751522652',
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
