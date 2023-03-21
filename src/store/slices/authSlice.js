import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: {
        id: 1,
        name: 'Dung',
        isAdmin: true,
    },
    loading: false,
    error: {},
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});
export const {} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
