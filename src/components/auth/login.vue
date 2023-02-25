<template>
    <div class="bg-gray-200 fixed w-full h-full">
        <!-- {{ errors }} -->
        <!-- {{ msg }} -->
        <div class="bg-white w-1/4 p-8 m-0  rounded-md absolute top-1/2 left-1/2 "
            style="transform: translate(-50%, -50%);box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
            <h2 class="text-3xl text-center mb-4">Login</h2>
            <div class="text-red-500">{{ msg }}</div>
            <form @submit.prevent="handleSubmit">
                <div class="form-group mb-4">
                    <label for="username" class="block mb-2" :class=" errors&& errors.email ? 'border-red-500':'' ">Email</label>
                    <input type="text" class="w-full" v-model="email">
                    <div class="text-red-500">{{ errors? errors.email[0]:'' }}</div>
                </div>
                <div class="form-group mb-4">
                    <label htmlFor="password" class="block mb-2" >Password</label>
                    <input type="text" class="w-full" v-model="password">
                    <div class="text-red-500">{{ errors? errors.password[0]:'' }}</div>
                    
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                        me</label>
                </div>
                <div class="text-right">
                    <a href="" class="">Register?</a>
                    <a href="" class="ml-4">Forgot your password</a>
                    <button type="submit" class=" uppercase ml-4 bg-blue-700 p-2 rounded-md text-white ">log in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login-component',
    data() {
        return {
            email: '',
            password: '',
            errors: null

        }
    },
    computed:{
        msg(){
            return  this.$store.state.stores.auth.msg
        }
    },
    // created () {
    //     this.logout();
    // },
    methods: {

        // ...mapActions('account', ['login', 'logout']),
        handleSubmit() {
            this.$store.dispatch('stores/auth/Login', { email: this.email, password: this.password }).then(response => {
                    this.$store.commit('stores/auth/LOGIN_SUCCESS',response.data)
                    this.$router.push({name: "contact"})
            }).catch(error => {
                    console.log(error.response.status ==422)
                    if(error.response.status ==422){
                        this.errors =error.response.data
                    }
                    else{
                        console.log("erroe", error)
                        this.$store.commit('stores/auth/LOGIN_FAIL',error.response.data)
                    }
                    
            })

        }
    }
}
</script>

<style></style>