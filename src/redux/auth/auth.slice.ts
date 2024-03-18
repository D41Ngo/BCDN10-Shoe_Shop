import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "@/services";

export const getProfileThunk = createAsyncThunk("getProfileThunk", async () => {
    const resp = await getProfile();
    return resp.data.content;
});

const initialState = {
    user: null,
};

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getProfileThunk.fulfilled, (state, { payload }) => {
            state.user = payload;
        });
    },
});

export const { setUser } = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;
