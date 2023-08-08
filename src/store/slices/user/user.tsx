import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    data: []
}

export const userCreateThunk = createAsyncThunk(
    "createUser/axiosCreateUser",
    async () => {
        try {
            // const response = await 
        } catch (error) {

        }
    }
)


export const userEditThunk = createAsyncThunk(
    "editUser/axiosEditUser",
    async () => {
        try {
            // const response = await 
        } catch (error) {

        }
    }
)

export const UserSlice = createSlice({
    name: "EditUser",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(userCreateThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(userCreateThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload

            })
            .addCase(userCreateThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.data = action.payload

            })
            .addCase(EditUserThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(EditUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload

            })
            .addCase(EditUserThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.data = action.payload

            })
    },
})

export default UserSlice.reducer



