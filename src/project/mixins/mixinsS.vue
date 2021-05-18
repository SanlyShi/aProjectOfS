<script>
// 执行顺序：extends  > mixins > 组件
export default {
  name: "mixinsS",
  data() {
    return {
      "mixinData": "is a good man"
    }
  },
  mounted() {
    console.log('mixinsS say hi')//先输出
  }
}
</script>

<style scoped>

</style>