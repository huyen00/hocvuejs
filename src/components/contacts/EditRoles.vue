<template>
    <div class="bg-gray-200 pt-8">
      <div class="container mx-auto">
          <div class="w-5/6">
            
              <div class="flex">
                  <h2 class="text-2xl text-green-700">Edit Roles</h2>
              </div>
              <span class="italic ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias amet debitis error explicabo, facilis nemo non placeat qui repudiandae. Aperiam aut expedita inventore magnam nostrum, obcaecati officia perspiciatls quibusdam?</span>
          </div>
          <form>
              <div class="mt-5">
                  <ul class="">
                      <li>
                          <input type="text" class="w-2/6" placeholder="Name" v-model="list_roles.name">
                      </li>
                  </ul>
                  <div class="flex mt-5 pb-5">
                      <button class="bg-green-500 p-2 rounded-md text-lg  mr-3 cursor-pointer" @click.prevent="saveEdit()">Save changes</button>
                      <a @click="$router.back()"  class="bg-red-700 text-white p-2 rounded-md text-lg cursor-pointer">Back</a>
                  </div>
                  
              </div>
          </form>
     </div>
    </div>
  </template>
  
  <script>


  export default {
      name: 'editRoles',
      data(){
          return{
              list_roles:{
                  name:null,      
              }
          }
      },
      mounted(){
        this.getDataEdit()
      },
      computed:{
          editMode(){
          return  this.$store.state.stores.contacts.editMode
          
        },
      },
      methods:{
        getDataEdit(){
            this.$store.dispatch('stores/contacts/getEditRolesId', this.$route.params.id).then(Response=>{
                this.list_roles.name = Response.data.name
            })
        },
        saveEdit(){
            this.$store.dispatch('stores/contacts/editDataRoles',{id:this.$route.params.id,list_roles: this.list_roles}).then(response=>{
                this.$router.push({name: 'roles'})
                console.log("responsive", response)
              })
            console.log("savechanges:", this.list_roles)
        }
      }
  }
  </script>
  
  <style>
  
  </style>