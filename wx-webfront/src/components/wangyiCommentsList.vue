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
        background: #3a3737;
        font-size: 13px;
        color: #c3c1c1;
        width: 70%;
        padding: 15px 30px;
        margin-top: 40px;
        border-radius: 20px;
        ul{
            li{
                list-style: none;
                text-align: left;
            }
        }
        .info{
             border-bottom: 1px solid #e4d6d6;
             p{
                text-indent: -50px;
                line-height: 18px;
             }
             span{
                color: #7b809e;
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
