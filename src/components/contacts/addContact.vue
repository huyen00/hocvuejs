<template>
  <div class="bg-gray-200 pt-8">
    <div class="container mx-auto">
        <div class="w-5/6">
            <div class="flex" v-if="editMode==true">
                <h2 class="text-2xl text-green-700">Edit Contact</h2>
            </div>
            <div class="flex" v-else>
                <h2 class="text-2xl text-green-700">Add Contact</h2>
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

// import EventBus from './../../EventBus'
export default {
    name: 'addContact',
    props:{
        mgs:String,
        contactById: Object || null,
    },
    
    data(){
        return{
            list_contact:{
                id: null,
                name:null,
                phone: null,
                email:null,
                avata: null
            }
        }
    },
    mounted:{
    //     EventBus.$on( 'editSinhVien', (user)=>{
    //   console.log('editSinhVien',item)
    //     this.list_contact.id =user.id
    //     this.list_contact.name =user.name
    //     this.list_contact.phone =user.phone
    //     this.list_contact.email =user.email
    //     this.list_contact.avata =user.avata
    // })
    },
    methods:{
        saveChange(){
            this.$store.dispatch('stores/contacts/addContact', this.list_contact).then(response=>{
                this.$store.commit('stores/contacts/ADD_CONTACT',response.data)
                this.$router.push({name: 'home'})
            })
          
        }
    }
}
</script>

<style>

</style>