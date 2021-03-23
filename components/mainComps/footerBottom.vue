<template>
  <div class="footer-bottom">
    <div class="friend-link">
      <p><i class="el-icon-link"></i> 友情链接</p>
      <ul>
        <li v-for="item in friendlinks" :key="item.linksName">
          <a :href="item.links" :title="item.linksName">{{ item.linksName }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            friendlinks:[{
                linksName:"百度",
                links: "/"
            },{
                linksName:"阿里巴巴",
                links: "/"
            },{
                linksName:"爱采购",
                links: "/"
            },{
                linksName:"全球塑胶网",
                links: "/"
            }]
        }
    }
};
</script>

<style lang="scss" scoped>
    .footer-bottom{
        margin-bottom: 20px;
        .friend-link{
            text-align: left;
            p{
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 15px;
            }
            ul{
                li{
                    display: inline-block;
                    margin-right: 60px;
                    a{
                        font-size: 13px;
                        color: #fff;;
                    }
                }
            }
        }
    }
</style>