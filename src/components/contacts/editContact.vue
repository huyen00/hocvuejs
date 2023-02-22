<template>
    <div class="bg-gray-200 pt-8" >
      <div class="container mx-auto">
          <div class="w-5/6">
            
              <div class="flex">
                  <h2 class="text-2xl text-green-700">edit Contact</h2>
              </div>
              <span class="italic ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias amet debitis error explicabo, facilis nemo non placeat qui repudiandae. Aperiam aut expedita inventore magnam nostrum, obcaecati officia perspiciatls quibusdam?</span>
          </div>
          <div class="flex mt-8">
              <ul class="w-2/6">
                  <li class="w-full mb-4">
                      <input type="text" class="w-full" placeholder="avata" v-model="list_contact.avata">
                  </li>
                  <li class="w-full mb-4">
                      <input type="text" class="w-full" placeholder="Name" v-model="list_contact.name">
                  </li>
                  <li class="w-full mb-4">
                      <input type="text" class="w-full" placeholder="Phone" v-model="list_contact.phone">
                  </li>
                  <li>
                      <input type="text" class="w-full" placeholder="Email" v-model="list_contact.email">
                  </li>
                  
              </ul>
              <div class="">
                  <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" class="ml-8 w-1/2" alt="">
              </div>
          </div>
          <button class="bg-green-700 px-4 py-2 rounded-md text-white" @click="saveChange()">Save Change</button>
      </div>
  
    </div>
  </template>
  
  <script>


  

  export default {
      name: 'editContact',
      props:{
          mgs:String
      },
      
      data(){
          return{
              list_contact:{
              
                  name:null,
                  phone: null,
                  email:null,
                  avata: null
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
              this.$store.dispatch('stores/contacts/getEditContact',this.$route.params.id).then(response=>{
                this.list_contact.name = response.data.name
                this.list_contact.phone = response.data.phone
                this.list_contact.email = response.data.email
                this.list_contact.avata = response.data.avata
              })
             
            
          },
          saveChange(){
            this.$store.dispatch('stores/contacts/editDataContact',{id:this.$route.params.id,list_contact: this.list_contact}).then(response=>{
                this.$router.push({name: 'home'})
                console.log("responsive", response)
              })
            console.log("savechanges:", this.list_contact)
          }

      }
  }
  </script>
  
  <style>
  
  </style>