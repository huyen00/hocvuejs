
import axios from "axios"

export default{
//    goij api
getContact({commit}){
    axios.get('https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts')
      .then(response => {
         console.log("user1",response)
         commit('SET_CONTACT', response.data);
      })
},
deleteContact({commit},id){
   console.log(id)
   axios.delete(`https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts/${id}`)
      .then(response => {
        
         commit('DELETE_CONTACT', response.data);
      })
},
addContact({commit},list_contact){
   // console.log("list Contact3:",list_contact)
   console.log("list Contact4:",commit)
   return  axios.post('https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts',{
         name: list_contact.name,
         phone: list_contact.phone,

         email: list_contact.email,
         avata: list_contact.avata
      })
  
},
};