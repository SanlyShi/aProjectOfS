<script>
// 执行顺序：extends  > mixins > 组件
export default {
  name: "extendsS",
  data() {
    return {
      name: 'extendsS'
    }
  },
  methods: {
    extendsSConsole() {
      console.log("输出了extendsS")
    }
  },
  mounted() {
    console.log('extendsS say hi')//最先输出
  }
}
</script>

<style scoped>

</style>