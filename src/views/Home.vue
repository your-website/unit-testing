<template>
  <div class="home">
    <AppHeader msg="Welcome to Your Vue.js App" />
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    LoginForm
  }
}
</script>
