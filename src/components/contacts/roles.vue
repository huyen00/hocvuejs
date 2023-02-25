<template>
  <div class="bg-gray-200 h-full">
    <div class="container mx-auto p-8">
        <h2 class="text-2xl text-green-700">Roles</h2>
        <router-link to="/roles/add" class="bg-green-700 p-2 rounded-md mt-2 text-white ">Create Roles</router-link>
     
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8" v-if="permissions">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(role,index) in permissions.data" :key="index">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{ role.id }}
                </th>
                <td class="px-6 py-4">
                    {{ role.name }}
                </td>
                
                <td class="px-6 py-4 text-right">
                    <router-link :to="{
                                name: 'editRoles', params: {id:role.id}
                            }"  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</router-link>
                    <button class="ml-5 text-red-600" @click="deleteDataRoles(role.id)">Delete</button>
                </td>
            </tr>
         
                
              
        </tbody>
    </table>



</div>
 
       
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'roles_component',
    
    computed:{
        ...mapState("stores/contacts", {
            permissions: state => state.permissions
  
    })
    },
    mounted() {
        this.$store.dispatch("stores/contacts/getRoles").then(response=>{
            console.log(response)
            this.$store.commit('stores/contacts/SET_ROLES', response.data)

        })
        
    },
    methods:{
        deleteDataRoles(id){
            console.log(id);
            this.$store.dispatch('stores/contacts/deleteRoles',id).then(response =>{
                this.$store.commit('stores/contacts/DELETE_ROLES',response.data)
                console.log(response)
               
            })
        },
        // getRolesEdit(){
        //      this.$store.dispatch('stores/contacts/getEditRolesId')
        // },
       
    }
}
</script>

<style>

</style>