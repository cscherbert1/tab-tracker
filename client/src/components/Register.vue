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
    <div class="error" v-html="error"></div>
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
      confirmPassword: '', 
      error: null
    }
  }, 
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error: any) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
