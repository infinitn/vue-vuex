<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="setUsername">dispatch</el-button>
    <el-button type="primary" @click="addLog">commit</el-button><br>
    <p>{{showData}}</p>
    <p>{{getData}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我真的只是一条测试数据！'
    }
  },
  methods:{
    addLog(){
      this.$store.commit('GET_USERNAME',this.msg);//状态提交到mutations
      console.log(this.$store.state.username);
    },
    setUsername(){
      this.$store.dispatch('saveName',this.msg);//状态提交到actions
      console.log(this.$store.state.username);
    }
  },
  computed:{
    ...mapGetters(['getData']),//通过getters暴露拿到数据
    showData(){
      return this.$store.state.username;//在state中直接拿到数据
    }
  },
  mounted(){
    console.log('http://'+'www.baidu.com')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
