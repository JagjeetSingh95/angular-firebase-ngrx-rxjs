// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCkD98Ot6zFb2guWNFzI_fi4ALHIwNpSmE",
    authDomain: "fitnessapp-angular.firebaseapp.com",
    databaseURL: "https://fitnessapp-angular.firebaseio.com",
    projectId: "fitnessapp-angular",
    storageBucket: "fitnessapp-angular.appspot.com",
    messagingSenderId: "683329771627"
  }
};
