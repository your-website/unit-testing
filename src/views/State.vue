<template>
  <div>
    <div v-if="!close" :style="{ width: tweenedNumber + 'px' }" class="bar">
      <span>{{ tweenedNumber.toFixed(0) }}</span>
    </div>
    <button @click="ext">close</button>
    <button @click="add">add</button>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      number: 0,
      close: false,
      tweenedNumber: 0,
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, {
        duration: 1,
        ease: 'circ.out',
        tweenedNumber: newValue,
      })
    },
  },
  methods: {
    randomNumber() {
      this.number = Math.floor(Math.random() * (800 - 0))
    },
    ext() {
      this.close = true
    },
    add() {
      this.close = false
    },
  },
  created() {
    setInterval(this.randomNumber, 1500)
  },
}
</script>

<style scoped>
.bar {
  padding: 5px;
  background-color: #2c3e50;
  border: 1px #16c0b0 solid;
  min-width: 20px;
}
.bar span {
  color: white;
}
</style>