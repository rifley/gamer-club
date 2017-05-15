# Licious Indeed

##### By _Riley Watts_ 05/15/17

## Description
A club page dedicated to League of Legends players in the Licious Indeed Club.

## Installation

* In your terminal, run `$ git clone https://github.com/rifley/gamer-club.git`
* navigate to the gamer-club repository
* Once inside the repository, run `$ npm install` followed by `$ bower install`
* Create a new file called `api-keys.ts` in the gamer-club/src/app directory.
* This file should look like this:

  _export let masterFirebaseConfig = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: ''
    };_

    You will then need to create a firebase database and populate these fields with your specific database information.

* When done you can run `$ ng serve` in your terminal, building and deploying your app.

* Visit the web-app at this link [http://localhost:4200](http://localhost:4200)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## License
This software is licensed under the MIT license. Copyright (c) 2017 Riley Watts
