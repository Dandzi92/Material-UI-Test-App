import { createSlice } from '@reduxjs/toolkit';

export const workspacesFeature = createSlice({
    name: 'workspaces',
    initialState: {
        workspaces: [],
    },
    reducers: {
        createWorkspace: (state, { payload }) => {
            state.workspaces.push(payload);
        },
        changeWorkspace: (state, { payload }) => {
            state.workspaces = state.workspaces.map((item) => {
                if (item.id === payload.id) {
                    return {...item, ...payload};
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

