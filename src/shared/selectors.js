export const checkIsAuthenticated = (state) => state.auth.isUserLoggedIn;
export const getUsers = (state) => state.users.users;
export const getLoggedInUser = (state) => state.auth.userData;
