# test_frontend_den

to run the App:

1. install dependencies with yarn install
2. yarn start to run the App

Persisted users for the app are located here "src/shared/users.js":

Comments for not completed part of the project:
* For main page there should be two additional pages: Home and Workspaces with routes '/home' and 'workspaces' respectively, that are rendered according to what NavLink was hit in Sidebar component, also it contains Header and Sidebar mentioned above 
* For Workspaces component we render all workspace elements that persisted in the store, every Workspace item has its unique id? that is saved in its props, and when want delete or modify data in the Workspace item we use this id to find appropriate item in the store 
* When we want to logout we hit button in header, clear local storage, and set user data in redux to empty object and also set isUserLoggedIn to false and also also use history.push('auth')


