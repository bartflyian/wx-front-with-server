<template>
  <div id="app">
    <p>添加用户</p>
     <span>
       <input type="text" name="name" class="form-control" placeholder="请输入用户名" v-model="adduserName" />  
       <button class="add-btn" @click="addUser()">提交</button>
     </span>

    <p>用户列表</p>
    <userList :userData='alluserData'></userList>

    <!-- <Wangyicommentslist></Wangyicommentslist> -->
  </div>
</template>

<script> 

import userList from './components/userList'
//import Wangyicommentslist from './components/wangyiCommentsList'
export default {
  name: 'app',
  data (){
        return {
            alluserData: [],
            adduserName: ''
        }
    },
  components: { 
    userList,
    //Wangyicommentslist
  },
  mounted(){
    this.getAllUser();
  },
  methods:{
    getAllUser(){         //获取用户列表
      this.$axios.get('/getAll').then((res) => {
        console.log(res.data)
        let userList = res.data;

        if(userList.length > 0){

        }else{
          console.log("no user");
        }
        
        this.alluserData = userList;
      });
    },
    addUser () {        //添加新用户
        if(this.adduserName == '') {
          alert("请输入新用户名")
          return;
        }
        let params = {
          name: this.adduserName
        }
        this.$axios.post('/add',params).then((res) => {
            console.log(res.data)
            if(res.status == 200 && res.statusText == "OK") {
                alert("添加成功");
                location.reload();
            } 
        });
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  p{
    text-align: left;
  }
  span {
    float: left;
    text-align: left;
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
  }
  .add-btn{
    margin-left: 10px;
  }
}
</style>
