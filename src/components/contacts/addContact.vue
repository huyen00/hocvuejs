<template>
  <div class="bg-gray-200 pt-8">
    <div class="container mx-auto">
        <div class="w-5/6">
          
            <div class="flex">
                <h2 class="text-2xl text-green-700">Add Contact</h2>
            </div>
            <span class="italic ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias amet debitis error explicabo, facilis nemo non placeat qui repudiandae. Aperiam aut expedita inventore magnam nostrum, obcaecati officia perspiciatls quibusdam?</span>
        </div>
        <!-- <form @submit.prevent="submit">
        <div class="w-full mb-4" :class="{ 'border-red-500': $v.name.$error }">
            <label class="form__label">Name</label>
            <input class="w-full" v-model.trim="$v.name.$model"/>
        </div>
        <div class="error text-red-500" v-if="!$v.name.required">Name is required</div>
        <div class="error text-red-500" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
        <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form> -->
    <form @submit.prevent="saveChange">
        <div class="flex mt-8">
            <ul class="w-2/6" >
                <li class="w-full mb-4" :class="{ 'form-group--error': $v.list_contact.name.$error }">
                    <input  type="text" class="w-full" placeholder="Name"  v-model.trim="$v.list_contact.name.$model" />
                    <div class="error text-red-500" v-if="!$v.list_contact.name.required">Name is required</div>
                    <div class="error text-red-500" v-if="!$v.list_contact.name.minLength">Name must have at least {{$v.list_contact.name.$params.minLength.min}} letters.</div>
                </li>
                
                <li class="w-full mb-4" :class="{ 'form-group--error': $v.list_contact.avata.$error }">
                    <input type="text" class="w-full" placeholder="avata" v-model="list_contact.avata" />
                    <div class="error text-red-500" v-if="!$v.list_contact.avata.required">Name is required</div>
                    <div class="error text-red-500" v-if="!$v.list_contact.avata.minLength">Name must have at least {{$v.list_contact.avata.$params.minLength.min}} letters.</div>
                </li>
                <li class="w-full mb-4" :class="{ 'form-group--error': $v.list_contact.phone.$error }">
                    <input type="text" class="w-full" placeholder="Phone" v-model="list_contact.phone" />
                    <div class="error text-red-500" v-if="!$v.list_contact.phone.required">Name is required</div>
                    <div class="error text-red-500" v-if="!$v.list_contact.phone.minLength">Name must have at least {{$v.list_contact.phone.$params.minLength.min}} letters.</div>
                </li>
                <li :class="{ 'form-group--error': $v.list_contact.email.$error }">
                    <input type="email" v-validate="'required|email'"  class="w-full"  placeholder="Email" v-model="list_contact.email" />
                    <div class="error text-red-500" v-if="!$v.list_contact.email.required">Name is required</div>
                    <div class="error text-red-500" v-if="!$v.list_contact.email.minLength">Name must have at least {{$v.list_contact.email.$params.minLength.min}} letters.</div>
                </li>
                <li class="w-full mb-4" :class="{ 'form-group--error': $v.list_contact.roles.$error }">
                    <input type="text" class="w-full" placeholder="avata" v-model="list_contact.roles" />
                    <div class="error text-red-500" v-if="!$v.list_contact.roles.required">Name is required</div>
                    <div class="error text-red-500" v-if="!$v.list_contact.roles.minLength">Name must have at least {{$v.list_contact.roles.$params.minLength.min}} letters.</div>
                </li>
                
            </ul>
            <div class="">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" class="ml-8 w-1/2" alt="">
            </div>
        </div>
        <button class="bg-green-700 px-4 py-2 rounded-md text-white" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
        <!-- <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p> -->
        </form>
    </div>

  </div>
</template>

<script>

// import EventBus from '../../../EventBus'

// import { defineRule } from 'vee-validate';

import { required, minLength } from 'vuelidate/lib/validators'
export default {
    name: 'addContact',
    props:{
        mgs:String,
        contactById: Object || null,
    },
    
    
    data(){
        return{
            list_contact:{
                // id: Math.floor(Math.random()*1000),
                name:null,
                phone: null,
                email:null,
                avata: null,
                roles:null,
            },
            name: '',
            age: 0,
            submitStatus: null
        }
    },
    validations: {
        list_contact:{
            name:{
                required,
                minLength: minLength(4)  
            },
            phone:{
                required,
                minLength: minLength(4)  
            },
            email:{
                required,
                minLength: minLength(4)  
            },
            avata:{
                required,
                minLength: minLength(4)  
            },
            roles:{
                required,
                minLength: minLength(4)  
            },
        }
 
  },

    mounted(){
    //     EventBus.$on( 'editContact', (user)=>{
    //   console.log('editContact',user)
    //     this.list_contact.id =user.id
    //     this.list_contact.name =user.name
    //     this.list_contact.phone =user.phone
    //     this.list_contact.email =user.email
    //     this.list_contact.avata =user.avata
    // })
    },
    computed:{
        editMode(){
        return  this.$store.state.stores.contacts.editMode
        
      },
    },
    
    methods:{

        
        saveChange(){
            //   console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    // do your submit logic here
                    this.submitStatus = 'PENDING'
                    setTimeout(() => {
                    this.submitStatus = 'OK'
                    this.$store.dispatch('stores/contacts/addContact', this.list_contact).then(response=>{
                        this.$store.commit('stores/contacts/ADD_CONTACT',response.data)
                        this.$router.push({name: 'home'})
                    })
                    }, 500)
                }
           
        },
        submit() {
        }
              
  
        
    },
    
}
</script>

<style>

</style>