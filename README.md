# Learn The MERN Stack - (MongoDB, Express, React, Node.js)

In this series we will build a full stack application with MERN (MongoDB, Express, React, Node.js). We will also implement Redux for state management and some other things like Reactstrap and React Transitions. Wel will also deploy to Heroku at the end.

Author's Repository: https://github.com/rishipr/mern-auth

### Based on: "Learn The MERN Stack" YouTube tutorial series

https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE

### More info as the tutorials progress

Install Postman App for API testing: https://www.postman.com/downloads/.  
Go to https://www.mongodb.com/ and create the free account for the database to be used with the API.

### P1 Introduction

Just watch and enjoy.

### P2 Express API & MongoDB

IMPORTANT!!! During P2 make sure to add config/\* to your .gitignore before digging into the video so your MongoDB URI user/pass combo is not visible if you have this repo set to public.

MongoDB is now on port 3500 not 5000 as stated in mLab db section.

### P3 Notes

During P3 you will most likely get a Deprecated warning on findDOMNode. If you find a fix for this please add it to the repo with an update to this readme. Otherwise you can set the '<React.StrictMode>' tag to '<React.Fragment>' for the coding/build of the app/project. You can periodically set it back as a final check at the end of the project knowing there will be at least the one warning.

The import of uuid ( in ShoppingList.js ) will cause compile errors, use '{ v4 as uuid }' instead.

### Developer Notes

- The project allows for easy migration from server to server and install dependencies, or when someone clones your repo, by untilizing ( cli: 'npm run client-install' ) after file migration.
- The project allows for server and client sides to be run concurrently on development/localhost by untilizing ( cli: 'npm run dev' ).
