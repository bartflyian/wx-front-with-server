<template>
  <div id="user-list">
      <table>
          <tr v-for="item in userData">
              <td class="name">{{item.name}}</td>
              <td><button @click="deleteUser(item.id)">删除</button></td>
          </tr>
      </table>
  </div>
</template>

<script> 

export default {
  name: 'user-list',
  components: { 
  },
  props: ['userData'],
  mounted(){ 
  },
  methods:{ 
        deleteUser (id) {//删除user 
            let params = {
                id: id
            }
            this.$axios.post('/delete',params).then((res) => {
                console.log(res) 
                if(res.status == 200 && res.statusText == "OK") {
                    alert("删除成功");
                    location.reload();
                }
            });
        }
  }
}
</script>

<style lang="less">
    #user-list{
        td {
            border: 1px solid #333; 
            &.name{
                min-width: 200px;
            }
        }
    }
</style>
