<template>
  <div class="bg-gray-200 pt-8">
    <div class="container mx-auto">
        <div class="w-5/6">
          
            <div class="flex">
                <h2 class="text-2xl text-green-700">Add Roles</h2>
            </div>
            <span class="italic ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias amet debitis error explicabo, facilis nemo non placeat qui repudiandae. Aperiam aut expedita inventore magnam nostrum, obcaecati officia perspiciatls quibusdam?</span>
        </div>
        <form @submit.prevent ="saveAddRoles()">
            <div class="mt-5">
                <ul class="">
                    <li>

                        <input type="text" class="w-2/6" placeholder="Name" :class=" errors&& errors.name ? 'border-red-500':'' " v-model="list_roles.name">
                        <div class="text-red-500">{{ errors? errors.name[0]:'' }}</div>
                    </li>
                </ul>
                <div class="flex mt-5 pb-5">
                    <button class="bg-green-500 p-2 rounded-md text-lg  mr-3 cursor-pointer" type="submit">Save changes</button>
                    <a @click="$router.back()"  class="bg-red-700 text-white p-2 rounded-md text-lg cursor-pointer">Back</a>
                </div>
                
            </div>
        </form>
   </div>
  </div>
</template>

<script>


export default {
    name: 'addRoles',
    data(){
        return{
            list_roles:{           
                name:null,
            },
            errors: null
           
        }
    },
    methods:{
        saveAddRoles(){
            this.$store.dispatch('stores/contacts/addRoles', this.list_roles)
          
            .then(response=>{
                // this.$store.commit('stores/contacts/ADD_ROLES',response.data)
                console.log("hggg",response)
                this.$router.push({name: 'roles'})
            }).catch(error=>{
                console.log("texte",error)
                if(error.response.status ==400){
                    this.errors = error.response.data
                }
            })
        }
    }
}
</script>

<style>

</style>