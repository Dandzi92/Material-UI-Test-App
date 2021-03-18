import { createSlice } from '@reduxjs/toolkit';
import { users } from '../shared/users';


export const usersFeature = createSlice({
    name: 'users',
    initialState: {
        users
    },
});

export default usersFeature.reducer;

