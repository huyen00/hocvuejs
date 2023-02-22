<template>
  <div>
        <h2>Login</h2>
        <form >
            <div class="form-group">
                <label for="username">Username</label>
                
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                
            </div>
            <div class="form-group">
                
                
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'login-component',
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>