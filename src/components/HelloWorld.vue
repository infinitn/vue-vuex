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
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    addLog(){
      this.$store.commit('GET_USERNAME',this.msg);
      console.log(this.$store.state.username);
    },
    setUsername(){
      this.$store.dispatch('saveName',this.msg);
      console.log(this.$store.state.username);
    }
  },
  computed:{
    ...mapGetters(['getData']),
    showData(){
      return this.$store.state.username;
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
