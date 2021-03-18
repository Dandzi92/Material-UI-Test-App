import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import workspace from './features/workspaces';
import auth from './features/auth';
import users from './features/users';

const reducer = {
    auth,
    workspace,
    users
};

const middleware = [...getDefaultMiddleware()];
middleware.push(logger);

const store = configureStore({
    reducer,
    middleware,
    devTools: true,
});

export default store;