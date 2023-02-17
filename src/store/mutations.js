
export default {
    PushSinhVien(state, data){
        // console.log('PushSinhVienc',state)
        // console.log('PushSinhVienc',data)
        state.data_demo.sinhvien.push(data)
    },
    addSinhVien(state){
        state.sinhvienbyId = null
        state.showHide_FormCreate =true
        state.editMode = false
    },
    editSinhVien(state,id){
        // console.log(id)
        state.sinhvienbyId = state.data_demo.sinhvien.find(sv => sv.id ===id)
        state.showHide_FormCreate =true;
        state.editMode = true
    },
    closeSinhVien(state){
        
        state.showHide_FormCreate =false;
        state.editMode = false
    },
    editDataSV(state, data){
        // console.log(" commit edit sv",state)
        // console.log(" commit edit data sv",data)
        const index = state.data_demo.sinhvien.findIndex(sv=> sv.id === data.id)
        if(index !== -1){
            state.data_demo.sinhvien.splice(index,1,data)
        }
        // state.sinhvienbyId = state.data_demo.sinhvien.find(sv => sv.state ===data.id)
    },
    deletesinhvien(state, id){ 
        const index=state.data_demo.sinhvien.findIndex(sv => sv.id ===id)
        if(index !== -1){
        state.data_demo.sinhvien.splice(index,1)
        
        }
    },
    // SET_ENTRIES(state,data){
    //     console.log('SET_ENTRIES',data.entries)
    //     state.entries = data.entries;
    // }

    // show form user
    showFormUser(state){
      
        state.showHide_FormUser =true
        state.editMode = false
      
    },
    // close form user
    hideFormUser(state){
        state.showHide_FormUser =false
        state.editMode = false
    },
    // xử lý data api 
    SET_ENTRIES(state,data){
        console.log('SET_ENTRIES',data)
        state.users = data;
    },
    // xóa dl trong api
    // deleteUser(state, id){ 
    //     const index=state.user.findIndex(sv => sv.id ===id)
    //     console.log("index:",index)
    //     if(index !== -1){
    //     state.user.splice(index,1)
    //     }
    // },
    DELETE_USER(state,data){
       
        const index=state.users.findIndex(sv => sv.id ===data.id)
        console.log("index:",index)
        if(index !== -1){
        state.users.splice(index,1)
        }

    },
    ADD_USER(state, data){
        state.users.push(data)
    },
    // show form edit api
    edit_formUser(state,data){
        console.log("edit id", data)
        state.UsertbyId = state.users.find(user => user.id ==data.id)
       
        state.showHide_FormUser =true
        state.editMode = true
    },
    EDIT_USER(state, data){
        const index = state.users.findIndex(user => user.id === data.id)
        if( index !== -1){
            state.users.splice(index,1, data)
        }
    }

};
