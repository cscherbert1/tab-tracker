<template>
  <div>
    <h1>Register</h1>
    <input 
      type="text" 
      name="email"
      v-model="email"
      placeholder="Email">
    <br>
    <input type="text"
      name="password"
      v-model="password"
      placeholder="Password">
    <br>
    <input type="text"
      name="confirmPassword"
      v-model="confirmPassword"
      placeholder="Confirm Password">
    <br>
    <button
      @click="register">Register</button>

  </div>
</template>

<script lang = "ts">
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: '', 
      password: '',
      confirmPassword: ''
    }
  }, 
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
