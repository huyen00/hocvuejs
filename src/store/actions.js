
import axios from "axios"
export default {
   pushsinhvien(content,data){
    console.log('pushsinhvien content',content)
   
    content.commit('PushSinhVien', data)
    
   },
   editsv(content,data){
     content.commit('editDataSV', data)
       console.log('editsv content',content)
      console.log('editsv data',data)

   },
   deletesv(content, data){
      
      content.commit('deletesinhvien', data)

   },
   // dùng api 
   getEntries({commit}){
      axios.get('https://63e0d0e359bb472a74297298.mockapi.io/api/v1/user')
      .then(response => {
         // console.log("user1",response)
         commit('SET_ENTRIES', response.data);
      })
   },
   addUser({commit},list_user){
      // console.log("addUser1:", commit)

      // console.log("list_user:", list_user)
      axios.post('https://63e0d0e359bb472a74297298.mockapi.io/api/v1/user',{
         name: list_user.name,
         avatar: list_user.avatar
      })
      .then(response => {
         // console.log("user1",response)
         commit('ADD_USER', response.data);
      })
   },
   editDataUser({commit},list_user){
      console.log("addUser1:", commit)

      console.log("list_user:", list_user)
      axios.put(`https://63e0d0e359bb472a74297298.mockapi.io/api/v1/user/${list_user.id}`,{
         name: list_user.name,
         avatar: list_user.avatar
      })
      .then(response => {
         // console.log("user1",response)
         commit('EDIT_USER', response.data);
      })
   },
   deleteUser({commit},id){
      console.log("idd:", id)

      console.log("idd:", commit)
      axios.delete(`https://63e0d0e359bb472a74297298.mockapi.io/api/v1/user/${id}`)
      .then(response => {
         // console.log("user1",response)
         commit('DELETE_USER', response.data);
      })
   }

};
