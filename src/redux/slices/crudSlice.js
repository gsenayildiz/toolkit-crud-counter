import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    tasks:[{
        title: "Navbar yapılacak",
        author: "Ali",
        assigned_to: "Veli",
        end_date: "2024-08-19",
        id: "1",
    }]
}

const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers:{
        addTask: (state, action) => {
          //console.log(action.payload);
          //oluşturduğumuz taska id ekle
          action.payload.id = v4();
          console.log(action.payload);
          //gelen veriyi task dizisine ekle
          state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
          //  alert("çalıştı");
          //1. yöntem:
          //  const filtred = state.tasks.filter((i) => i.id !== action.payload)
           //  state.tasks = filtred;
          //2.yöntem:
          //silinecek elemanın sırasını bul
         const index = state.tasks.findIndex((i) => i.id === action.payload)
        //elemanı sil
         state.tasks.splice(index, 1);
        },
        editTask: (state, action) =>{
         //alert("çalıştı");
        // console.log("çalıştı")
        //1. yöntem:map
        // const updated =  state.tasks.map((i) => i.id === action.payload.id ? action.payload : i)
        // state.tasks = updated;
        //2. yöntem:
        //düzenlenecek elemanın sırasını bul
       const index = state.tasks.findIndex((i) => i.id === action.payload.id);
     // elemanı günceller
       state.tasks.splice(index, 1, action.payload );
    
    },
    },
});

//store a tanıtmak için reducer ı export et
export default crudSlice.reducer;

export const { addTask, deleteTask, editTask } = crudSlice.actions;