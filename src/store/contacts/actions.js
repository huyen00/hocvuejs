
import axios from "axios"
import ApiService from "@/common/apiService";

export default{
//    goij api
getContact({commit}){
    axios.get('https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts')
      .then(response => {
         console.log("user1",response)
         commit('SET_CONTACT', response.data);
      })
},
// lấy id contact edit
getEditContact({commit},id){
   console.log(commit)
   console.log(id)
 return  axios.get(`https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts/${id}`)
  
},
// xóa contact trong api
deleteContact({commit},id){
   console.log(id)
   axios.delete(`https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts/${id}`)
      .then(response => {
        
         commit('DELETE_CONTACT', response.data);
      })
},
// add contact trong api
addContact({commit},list_contact){
   // console.log("list Contact3:",list_contact)
   console.log("list Contact4:",commit)
   return  axios.post('https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts',{
         name: list_contact.name,
         phone: list_contact.phone,

         email: list_contact.email,
         avata: list_contact.avata,
         roles: list_contact.roles
      })
  
},
// sửa contact api
editDataContact({commit}, data){
   console.log("addUser1:", commit)
console.log("list_contact",data)

  return axios.put(`https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts/${data.id}`,{
      name: data.list_contact.name,
         phone: data.list_contact.phone,

         email: data.list_contact.email,
         avata: data.list_contact.avata,
         roles: data.list_contact.roles
   })
   
},

// api roles
   getRoles({commit}){
      console.log("committt",commit)
   
     return  ApiService.query('api/v1/permissions')
   
   },
   deleteRoles({commit},id){
      console.log("committt",id)
      console.log("committt",commit)
      return ApiService.delete(`api/v1/permission/delete/${id}`)

   },
   addRoles({commit},list_roles){
      console.log("committt",commit)
      return ApiService.post('api/v1/permission',{
         name: list_roles.name
      })
   },
   getEditRolesId({commit},id){
      console.log(commit)
      console.log(id)
      return ApiService.get('api/v1/permission',id)
     
   },
   editDataRoles({commit}, data){
      console.log("addUser1:", commit)
      console.log("list_contact",data.list_roles.name)
   
      return ApiService.put(`api/v1/permission/${data.id}/update`,{
         name: data.list_roles.name,
           
      })
      
   },
   getPagination({commit}, label){
      console.log("label", label)
      console.log("label", commit)
      return ApiService.get(`api/v1/permissions?page=${label}`)
   },
   // permission
   addPermission({commit},list_permission){
      console.log(commit)
      return ApiService.post('api/v1/permission',{
         name: list_permission.name
      })
   },
   editDataPermission({commit}, data){
      console.log("addUser1:", commit)
      console.log("list_contact",data.list_permission.name)
   
      return ApiService.put(`api/v1/permission/${data.id}/update`,{
         name: data.list_permission.name,
           
      })
      
   },
   
}