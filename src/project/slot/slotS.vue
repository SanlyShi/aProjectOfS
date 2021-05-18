<template>
  <div class="slotS_div">
    <!--    1.常用slot-->
    <p class="slotS_p">我是子组件内容</p>
    <slot></slot>

    <!--    2.命名slot-->
    <!--    <div class="button">-->
    <!--      <button>一个按钮</button>-->
    <!--      <br>-->
    <!--      <slot name="one" :value1="child1"> 这就是默认值1</slot> //绑定child1的数据-->
    <!--      <br>-->
    <!--      <slot :value2="child2"> 这就是默认值2 </slot>//绑定child2的数据，这里我没有命名slot-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "slotS",
  data() {
    return {
      child1: "数据1",
      child2: "数据2",
    };
  },
};
</script>

<style scoped>
.slotS_p {
  margin: 0;
  width: 300px;
  background: darkorchid;
}

.slotS_div {
  background: peru;
  width: 500px;
}
</style>
