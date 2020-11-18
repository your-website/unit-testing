<template>
  <div class="app-header">
    <button v-show="loggedIn">Logout</button>
    <RandomNumber />
  </div>
</template>

<script>
import RandomNumber from '@/components/RandomNumber.vue'
export default {
  components: {
    RandomNumber
  },
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>

<style scoped>
.app-header {
  min-height: 40px;
  padding: 0.2em 1em;
  background: white;
}
button {
  float: right;
}
</style>
