<template>
    <div class="game">
      <h1 class="text-black text-3xl text-center pt-16 pb-16">Danh sách Game Holomia</h1>
      <button class="py-2 mb-8 ml-16 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" @click="addUser()">
          Add
      </button>
  
  <!-- Main modal -->
  <div id="medium-modal" v-if="showHide_FormUser"  tabindex="-1" class="add__sv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" >
      <div class="relative w-full h-full max-w-lg md:h-auto m-auto">
        
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white" v-if="editMode == true ">
                    Edit student
                </h3>
                <h3 v-else class="text-xl font-medium text-gray-900 dark:text-white">
                    Create student
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal" @click="closeUser()">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
             
              <div class="p-6 space-y-6">
                <div class="row flex">
                  <div class="grid-cols-6">
                      
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2" >name:</label>
                    <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" v-model="list_user.name" />
                  </div>
                  <div class="grid-cols-6 ml-12">
                    <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">avatar:</label>
                    <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white"  v-model="list_user.avatar" />
                  </div>
                  
                 </div>
                 
              </div>
              
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="medium-modal" type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="savechange()" >Save changes</button>
                  <button data-modal-hide="medium-modal" type="button"  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="closeUser()">Close</button>
              </div>
          </div>
      </div>
  </div>
  
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                   
                      <th scope="col" class="px-6 py-3">
                          ID
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Create at
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        avatar
                      </th>
                      
                      
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"  v-for ="user in users" :key="user.id" >
                      
                    
                    <td class="px-6 py-4">
                        {{ user.id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.createdAt }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.name }}
                    </td>
                    
                    <td class="px-6 py-4">
                        {{ user.avatar }}
                    </td>
                    
                    
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" @click="edit_User(user)">Edit</a>
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline pl-8" @click="deleteUser(user.id)">Delete</a>
                    </td>
                  </tr>
                 
              </tbody>
          </table>
      </div>
    </div>
  </template>
  
  <script>
// import { getEntries } from '@/store/actions';
  
//   import { mapState } from 'vuex';
  export default {
      name: 'entries-component',
      props: {
      msg: String,
      UsertbyId: Object || null
      
    },
      data(){
          return{
            list_user: {
                id:null,
                name: null,
                // createdAt: Math.floor(Math.random()*1000),
                avatar:null


            }
          }
      },
      mounted(){
       
        this.$store.dispatch("stores/getEntries");
      },
      computed:{
         users(){
            return this.$store.state.stores.users;
         },
         showHide_FormUser(){
            return this.$store.state.stores.showHide_FormUser
         },
         editMode(){
            return this.$store.state.stores.editMode
         }
      
      },
      methods:{
        addUser(){
            this.$store.commit('stores/showFormUser')
        },
        closeUser(){
            this.$store.commit('stores/hideFormUser')
        },
        edit_User(user){
            this.$store.commit('stores/edit_formUser',user)
            this.list_user.name =user.name
            this.list_user.avatar =user.avatar
            this.list_user.id =user.id
        },
        savechange(){
            if(this.editMode){
                console.log(this.editMode)
                this.$store.dispatch('stores/editDataUser',this.list_user)
            }
            else{
                this.$store.dispatch('stores/addUser', this.list_user)
                console.log("111:",this.list_user)
            }
            this.list_user={
                id:Math.floor(Math.random()*1000),
                name:null,
                avatar:null,
                
               
           }
           this.closeUser();

           
        },
        deleteUser(id){
            console.log("iiiddd",id)
           this.$store.dispatch('stores/deleteUser',id)
        }
    }
  }
  </script>
  
  <style>
  
  </style>