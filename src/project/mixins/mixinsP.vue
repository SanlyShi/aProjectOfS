<template>
<!-- vue的mixins -->
  <div class="mixins_P">
    <p>{{ name }} {{ firstName }} {{ mixinData }}</p>
  </div>
</template>

<script>
import mixinsS from "./mixinsS";
import extendsS from "../extends/extendsS"

export default {
  name: "mixinsP",
  //mixins可以有多个
  mixins: [mixinsS],
  extends: extendsS,
  data: function () {
    return {
      name: 'sanly',
      firstName: 'shi',
      // mixinData:"aaa"
    }
  },
  mounted: function () {
    console.log('componentsP say hi')//后输出
  }
}
</script>

<style scoped>
.mixins_P {
  background-color: darkkhaki;
}
</style>