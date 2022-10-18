import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

import toast from 'react-hot-toast'

const initialState = {
  lists : [],
  status :null,
  createStatus : null,
}

export const fetchStudents = createAsyncThunk(
  "students/fetchProducts",
   async () =>{
    try {
      const res = await axios.get(`http://localhost:5000/api/banks`)
      return res.data
    } catch (error) {
       console.log(error) 
    }
   }

)


export const addStudent = createAsyncThunk(
  "students/addStudent",
   async (values) =>{
    try {
      const res = await axios.post(`http://localhost:5000/api/banks`, values);
      toast.success('Student added Successfully')
      return res.data
    } catch (error) {
      toast.error(error.res?.data)
    }
   }

)



 const studentSlice = createSlice({
    name : 'students',
    initialState,
    reducers :{},
    
    extraReducers : {
      [fetchStudents.pending] : (state, action) =>{
            state.status = "pending"
      },
      [fetchStudents.fulfilled] : (state, action) =>{
        state.lists = action.payload
        state.status = "success"
      },
      [fetchStudents.rejected] : (state, action) =>{
        state.status = "rejected"      
       },
       [addStudent.pending] : (state, action) =>{
        state.createStatus = "pending"
        },
        [addStudent.fulfilled] : (state, action) =>{
          state.lists.push(action.payload)
          state.createStatus = "success"
        },
        [addStudent.rejected] : (state, action) =>{
          state.createStatus = "rejected"
        
        },

             
    }

})

export default studentSlice.reducer