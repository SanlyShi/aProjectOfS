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
import slotP from "@/project/slot/slotP";
import mixinsP from "@/project/mixins/mixinsP";
import componentP from "@/project/components/componentP"
import extendsP from "@/project/extends/extendsP"

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
