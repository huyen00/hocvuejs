
export default {
    PushSinhVien(state, data){
        // console.log('PushSinhVienc',state)
        // console.log('PushSinhVienc',data)
        state.data_demo.sinhvien.push(data)
    },
    addSinhVien(state){
        state.sinhvienbyId = null
        state.showHide_FormCreate =true;
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
}

};