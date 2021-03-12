<template>
  <p>{{ numer }}</p>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      numer: this.$store.state.numer
    }
  }
}
</script>

<style scoped>

</style>