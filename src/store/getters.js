
export default {
   list_game(state){
     return state.user_profile.list_game      
   },
   list_dataDemo(state){
    return state.data_demo.sinhvien
   },
   editDataDemos: (state)=>(id) => {
    return state.data_demo.sinhvien.find(sv => sv.id ===id)
   }
};