<template>
    <div class="bg-gray-200 h-full" >
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
                    <!-- <input type="text " v-model.trim="search" placeholder="Search Names" @keyup="getAllStarWarsPeople" class="text-gray-900 rounded-md block p-2 mt-4 w-1/3" /> -->

                    <input type="text " v-model.trim="search" placeholder="Search Names" class="text-gray-900 rounded-md block p-2 mt-4 w-1/3" />
                    <button class="btn-search Border border-gray-500 ml-4 mt-4 p-2 rounded-md">
                        Search
                    </button>
                </div>
            </div>
            <div class="container mt-6 flex mx-auto justify-center">
                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-green-100 p-4 flex mb-4 ml-2 mr-2" v-for="user in fillterContacts" :key="user.id">
                        <div class="w-2/6">
                            <img :src="user.avata" class="" alt="" />
                        </div>
                        <div class="w-5/6 ml-6 mt-3">
                            <div class="bg-white rounded-md block w-full mr-4">
                                <span class="block p-3">Name: <strong>{{ user.name }}</strong></span>
                                <span class="block border-t-2 p-3">Mobile: <strong>{{ user.phone }}</strong></span>
                                <span class="block border-t-2 p-3">
                                    Email: <strong>{{ user.email }}</strong></span>
                                    <span class="block border-t-2 p-3">
                                    Roles: <strong>{{ user.roles }}</strong></span>
                            </div>
                        </div>
                        <div class=" ml-6 mt-3">
                            <router-link :to="{name: 'ViewContact', params: {id:user.id}}" class=" bg-orange-400 px-4 py-2 mt-1 mb-1 pb-2 text-md rounded-md block"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
                            <router-link :to="{
                                name: 'ediContact', params: {id:user.id}
                            }" class="bg-blue-700 text-white p-3 pb-2 mb-1 text-md rounded-md block" ><font-awesome-icon icon="fa-solid fa-pen" /></router-link >
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
export default {
    name: "listContact",
    data(){
        return{
            contact: [],
            search: ""
        };
    },
    mounted() {
        this.$store.dispatch("stores/contacts/getContact");
    },
    computed: {
        contacts() {
            return this.$store.state.stores.contacts.contacts
        },
        fillterContacts(){
            return this.contacts ? this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.search.toLowerCase())
                ): this.contacts
        }
    },
    methods:{
    //    xóa user của contact
        deleteContact(id){
            console.log(id)
            this.$store.dispatch('stores/contacts/deleteContact',id)
        },
        // lấy dữ liệu contact vào form edit
        getContactEdit(){
             this.$store.dispatch('stores/contacts/getEditContact')
        },
        // search api
    //     getAllStarWarsPeople() {
    //         fetch("https://63e0d0e359bb472a74297298.mockapi.io/api/v1/contacts/")
    //         .then(response => response.json())
    //         .then(res => {
    //             // console.log(res)
    //         if (this.search) {
    //             this.contact = res.filter(contact =>
    //             contact.name.toLowerCase().includes(this.search.toLowerCase())
    //             );
    //             this.$store.commit('stores/contacts/SEARCH', this.contact)
    //         } else {
    //             this.$store.commit('stores/contacts/SEARCH', this.contact)
    //         }
    //     });
    //     // if(this.search){
    //     //     this.$store.commit('stores/contacts/SEARCH', this.search)
    //     // }
       
    // },
//     created() {
//     this.getAllStarWarsPeople();
//   }
    }
};
</script>

<style scoped>
.btn-search {
    border: 1px solid #80808040;
}
</style>