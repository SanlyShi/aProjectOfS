<template>
  <div class="slotP_div">
    <p>我是父组件内容</p>
    <slot-S>
      <!--        1.常用slot-->
      <p class="slotP_P">我是父组件插槽内容</p>


      <!--      2.命名slot-->
      <!--      <template v-slot:one="slotone">-->
      <!--        {{ slotone.value1 }} ## 通过v-slot的语法 将子组件的value1值赋值给slotone(子传父)-->
      <!--      </template>-->
      <!--      <template v-slot:default="slottwo">-->
      <!--        {{ slottwo.value2 }} ##同上，由于子组件没有给slot命名，默认值就为default(子传父)-->
      <!--      </template>-->
    </slot-S>
  </div>
</template>

<script>
import slotS from "./slotS";

export default {
  name: "slotP",
  components: {
    slotS
  }
}
</script>

<style scoped>
.slotP_div {
  background-color: #42b983;
}

.slotP_P {
  margin: 0;
  padding: 0;
  background-color: darksalmon;
}
</style>