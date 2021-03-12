<template>
  <div class="component_div">
    <component-S :Pdata="data" @clickEmitToP="clickEmitOfP"></component-S>
  </div>
</template>

<script>
import componentS from "./componentS"

export default {
  name: "componentP",
  components: {
    componentS
  },
  data() {
    return {
      data: "P_message_to_S"
    }
  },
  methods: {
    clickEmitOfP(value) {
      console.log("click click click", value)
    }
  }
}
</script>

<style scoped>
.component_div {
  background-color: coral;
}
</style>