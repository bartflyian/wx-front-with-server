<template>
  <div id="comments-list">
       <ul>
           <li>
               <div class="pic"></div>
               <div class="info" v-for="item in commentsData"> 
                   <p><b><img :src="item.avatarUrl" alt="touxiang"></b><span>{{item.userName}} : </span>{{item.content}}</p>
               </div>
           </li>
       </ul>
  </div>
</template>

<script> 

export default {
  name: 'comments-list',
  components: { 
  },
  data () {
      return {
          commentsData: []
      }
  },
  mounted(){ 
      this.getWYComments();
  },
  methods:{ 
        getWYComments(){         //获取用户列表
            this.$axios.get('/comments').then((res) => {
                console.log(res.data) 
                
                this.commentsData = res.data;
            });
        }, 
    }
}
</script>

<style lang="less" scoped>
    #comments-list{
        position: relative;
        background: #eee;
        font-size: 13px;
        color: #999;
        ul{
            li{
                list-style: none;
                text-align: left;
            }
        }
        .info{
             border-bottom: 1px solid #999;
             span{
                color: rgb(105, 105, 236);
             }
            img{
                height: 40px;
                width: 40px; 
                border-radius: 50%;
                vertical-align: middle;
                margin-right: 15px;
                border: 1px solid #696868;
            }
         }
    }
</style>
