<template>
  <div class="home">
    <AppHeader msg="Welcome to Your Vue.js App" />
    <LoginForm />
    <MessageDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import LoginForm from '@/components/LoginForm.vue'
import MessageDisplay from '@/components/MessageDisplay.vue'
export default {
  name: 'Home',
  components: {
    AppHeader,
    LoginForm,
    MessageDisplay
  }
}
</script>
