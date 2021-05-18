<template>
  <div class="store-page">
    <!-- vue的vuex -->
     <p>{{ numer }}</p>
     <p @click="increaseNumer">值increase1</p>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      numer: 0
    }
  },
  methods:{
    increaseNumer(){
      this.$store.commit('increaseNum', 1)
      this.numer = this.$store.state.numer
    }
  }
}
</script>

<style scoped>
.store-page{
  background: darkcyan;
  color: #FFF
}

</style>