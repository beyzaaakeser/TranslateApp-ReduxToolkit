import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLangs = createAsyncThunk("lang/getLangs",async () => {

    return "payload"
})