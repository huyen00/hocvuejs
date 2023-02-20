<template>
    <div class="bg-gray-200 h-full">
        <div class="p-8">
            <div class="w-5/6">
                <div class="flex">
                    <h2 class="text-2xl text-green-700">Contact Manager</h2>
                    <router-link to="/contact/add" class="ml-4 p-1 btn bg-green-700 text-sm text-white rounded-md" >
                        <font-awesome-icon icon="fa-solid fa-plus" /> New
                    </router-link>
                </div>
                <span class="italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    alias amet debitis error explicabo, facilis nemo non placeat qui
                    repudiandae. Aperiam aut expedita inventore magnam nostrum, obcaecati
                    officia perspiciatls quibusdam?</span>
                <div class="flex">
                    <input type="text " placeholder="Search Names" class="text-gray-100 rounded-md block p-2 mt-4 w-1/3" />
                    <button class="btn-search Border border-gray-500 ml-4 mt-4 p-2 rounded-md">
                        Search
                    </button>
                </div>
            </div>
            <div class="container mt-6 flex mx-auto justify-center">
                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-green-100 p-4 flex mb-4 ml-2 mr-2" v-for="user in contacts" :key="user.id">
                        <div class="w-2/6">
                            <img :src="user.avata" class="" alt="" />
                        </div>
                        <div class="w-5/6 ml-6 mt-3">
                            <div class="bg-white rounded-md block w-full mr-4">
                                <span class="block p-3">Name: <strong>{{ user.name }}</strong></span>
                                <span class="block border-t-2 p-3">Mobile: <strong>{{ user.phone }}</strong></span>
                                <span class="block border-t-2 p-3">
                                    Email: <strong>{{ user.email }}</strong></span>
                            </div>
                        </div>
                        <div class="w-1/5 ml-6 mt-3">
                            <router-link to="" class=" bg-orange-400 px-4 py-2 mt-1 mb-1 pb-2 text-md rounded-md block"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
                            <router-link to="/contact/edit" class="bg-blue-700 text-white p-3 pb-2 mb-1 text-md rounded-md block" @click="editContact(user)"><font-awesome-icon icon="fa-solid fa-pen" /></router-link >
                            <button @click="deleteContact(user.id)" class="
                      bg-red-700
                      text-white
                      px-4
                      py-2
                      pb-2
                      mb-1
                      text-md
                      rounded-md
                    ">
                                <font-awesome-icon icon="fa-solid fa-trash" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import EventBus from './../../EventBus'
export default {
    name: "listContact",
    mounted() {
        this.$store.dispatch("stores/contacts/getContact");
    },
    computed: {
        contacts() {
            return this.$store.state.stores.contacts.contacts;
        },
    },
    methods:{
        deleteContact(id){
            console.log(id)
            // EventBus.$emit('deleteContact', item)
            this.$store.dispatch('stores/contacts/deleteContact',id)
        },
        addContact(){

        },
        editContact(){
            
        }
    }
};
</script>

<style scoped>
.btn-search {
    border: 1px solid #80808040;
}
</style>