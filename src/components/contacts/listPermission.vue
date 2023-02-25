<template>
  <div class="bg-gray-200 h-full">
    <div class="container mx-auto ml-5">
        <h2 class="text-2xl text-green-700">Permissions</h2>
        <button class="bg-green-700 text-white p-2 rounded-md mt-5" @click="showModel()">Create Permission</button>
        <div id="medium-modal" v-if="showHide_Model"  tabindex="-1" class="add__sv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" >
            <div class="relative w-full h-full max-w-lg md:h-auto m-auto">
                
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white" v-if="editMode == true" >
                            Edit Permission
                        </h3>
                        <h3 v-else class="text-xl font-medium text-gray-900 dark:text-white">
                            Create Permission
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal" @click="closeModel()">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span> 
                        </button>
                    </div>
                    
                    <div class="p-6 space-y-6">
                        <div class="row flex">
                            <div class="grid-cols-6">                               
                                <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2" >name:</label>
                                <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" v-model="list_permission.name" />
                                <div class="text-red-500">{{ errors? errors.name[0]:'' }}</div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="medium-modal" type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click.prevent="savechange()" >Save changes</button>
                        <button data-modal-hide="medium-modal" type="button"  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="closeModel()">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5" v-if="permissions">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" v-for="(permission,index) in permissions.data" :key ="index">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ permission.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ permission.name }}
                        </td>
                        
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" @click="editPermission(permission)">Edit</a>
                            <a href="#" class="font-medium  dark:text-blue-500 hover:underline ml-5 text-red-500" @click="deletePermission(permission.id)">Delete</a>
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
name:'listPermission',
props:{
    msg: String,
    permissionById: Object || null
},
data(){
    return{
            list_permission:{           
                name:null,
            },
            errors: null
           
        }
},
    computed:{
        ...mapState("stores/contacts", {
            permissions: state => state.permissions}),
        // permission(){
        //     return this.$store.state.stores.contacts.permissions
        // },
        showHide_Model(){
            return this.$store.state.stores.contacts.showHide_Model
        },
        editMode(){
            return this.$store.state.stores.contacts.editMode
         }
    },
    mounted(){
        this.$store.dispatch("stores/contacts/getRoles").then(response=>{
            console.log(response)
            this.$store.commit('stores/contacts/SET_ROLES', response.data)

        })
    },
    methods:{
        showModel(){
            this.$store.commit('stores/contacts/showFormModel')
           
        },
        closeModel(){
            this.$store.commit('stores/contacts/closeFormMode')
        },
        editPermission(permission){
            this.$store.commit('stores/contacts/editFormPermission',permission)
            this.list_permission.name = permission.name
        },
        savechange(){
            if(this.editMode){
                this.$store.dispatch('stores/contacts/editDataPermission', this.list_permission)
            }else{
                this.$store.dispatch('stores/contacts/addPermission', this.list_permission)
        
            .then(response=>{
                this.$store.commit('stores/contacts/ADD_PERMISSION',response.data)
                console.log("hggg",response)
                this.list_permission={
                    name:null
                }
                this.closeModel();
                
            }).catch(error =>{
                console.log(error);
                if(error.response.status ==400){
                this.errors = error.response.data
            }
            })
                }
           
           
        },
        deletePermission(id){
            this.$store.dispatch('stores/contacts/deleteRoles',id).then(response =>{
                this.$store.commit('stores/contacts/DELETE_ROLES',response.data)
                console.log(response)
               
            })
        }
    }
}
</script>

<style>

</style>