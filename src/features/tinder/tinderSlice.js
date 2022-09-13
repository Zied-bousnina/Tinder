import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const port = "https://tinder-ap-backend.herokuapp.com/tinder/card"
export const getAll= createAsyncThunk("tinder/getAll", async (_, thunkAPI)=>{

    const {rejectWithValue} = thunkAPI
    try {
        // "http://localhost:8001/tinder/card"
        const res = await fetch(port)

        const data = await res.json()
        return data
        
    } catch (error) {
        return rejectWithValue(error)
        
    }

})

const tinderSlice = createSlice({
    name: 'tinder',
    initialState: {
        people: [],
        isLoading: false,
        error: null
    },
    reducers :{},
    extraReducers: {
        [getAll.pending]: (state, action)=>{
            state.isLoading= true;
            state.error = null
            console.log(action)
        },

        [getAll.fulfilled]: (state, action)=>{
            state.isLoading= false
            state.error = null
            state.people = action.payload
            console.log(state.people)
            console.log(action)

        },
        
        [getAll.rejected]: (state, action)=>{
            console.log(action)

            state.error = action.error
        }
    }
    


})

export default tinderSlice.reducer