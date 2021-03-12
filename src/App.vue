<template>
  <div id="app">
    <slot-P></slot-P>
    <br>
    <br>
    <mixins-P></mixins-P>
    <br>
    <br>
    <component-P></component-P>
    <br>
    <br>
    <extends-P></extends-P>
    <router-view/>
  </div>
</template>

<script>
import slotP from "@/demo/slot/slotP";
import mixinsP from "@/demo/mixins/mixinsP";
import componentP from "@/demo/components/componentP"
import extendsP from "@/demo/extends/extendsP"

export default {
  name: "App",
  components: {
    slotP,
    mixinsP,
    componentP,
    extendsP
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
