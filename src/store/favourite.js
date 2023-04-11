import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const favslice= createSlice({
    name:"fav",
    initialState:{
         count: 0
    },
    reducers:{
        changeFavCount : (state, action) => {
            state.count = action.payload
        }     
    }
    })
    // config the store 
    const store= configureStore({
       reducer: {
          fav: favslice.reducer
       }
    })
    
    // export default the store 
    export default store
    
    // export the action
    export const favAction = favslice.actions