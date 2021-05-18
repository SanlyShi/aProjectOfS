<template>
  <div class="component_S">
    component_S
    <p>{{ Pdata }}</p>
    <p @click="clickEmit">click me</p>
  </div>
</template>

<script>
export default {
  name: "componentsS",
  props: ["Pdata"],
  data() {
    return {
      value: "shishishi"
    }
  },
  methods: {
    clickEmit() {
      this.$emit("clickEmitToP", this.value)
    }
  }
}
</script>

<style scoped>
.component_S {
  background-color: brown;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
}

p {
  background-color: darkcyan;
  width: 300px;
}
</style>