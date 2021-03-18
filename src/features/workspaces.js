import { createSlice } from '@reduxjs/toolkit';

export const workspacesFeature = createSlice({
    name: 'workspaces',
    initialState: {
        workspaces: [],
    },
    reducers: {
        createWorkspace: (state, { payload }) => {
            state.workspaces.push(payload.data);
        },
        changeWorkspace: (state, { payload }) => {
            state.workspaces = state.workspaces.map((item) => {
                if (item.statusId._id === payload._id) {
                    item.statusId = payload;
                    return item;
                }
                return item;
            });
        },
        deleteWorkspace: (state, { payload }) => {
            state.workspaces = state.workspaces.filter((item) => item._id !== payload._id);
        },
    },
});

export const {
    createWorkspace,
    changeWorkspace,
    deleteWorkspace
} = workspacesFeature.actions;
export default workspacesFeature.reducer;

