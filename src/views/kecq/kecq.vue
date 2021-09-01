<template>
    <div class="kecq">
        <!---->
        <div class="imw">
            <img :src="good.info.cover_img" alt="">
        </div>
        <!---->
        <div class="kecq_1">
            <p>{{good.info.title}}</p>
            <p class="p4">共{{good.info.status}}课时 | {{good.info.sales_num}}已报名</p>
            <p class="p4">开课时间：2021/07/08 00:00 - 2021/07/09 00:00</p>
            <p class="p5">免费</p>
        </div>
        <!---->
        <div class="fuw"  @click="show = true">
            <div>服务:售后服务</div>
            <div>详情></div>
        </div>
        <van-action-sheet v-model="show" title="售后服务">
            <div class="content">
              <p>课程售后</p>
              <p>多谢关注  新课程敬请期待</p>
            </div>
        </van-action-sheet>
        <!---->
        <div class="td">
            <div class="jx">教学团队</div>
            <div class="jx_0">
                <div class="jx_1" v-for="(item,index) in good.teachers" :key="index">
                    <div>
                        <img :src="item.avatar" alt="">
                    </div>
                    <p>{{item.teacher_name}}</p>
                </div>
            </div>
        </div>
        <!---->
        <van-tabs v-model="active">
            <van-tab title="课程介绍">
                <p>课程介绍</p>
                <p>crazy english</p>
                <p>so pretty</p>
            </van-tab>
            <van-tab title="课程大纲">内容 2</van-tab>
            <van-tab title="课程评价">内容 3</van-tab>
        </van-tabs>
        <!---->
        <div class="boam">
            <div>立即报名</div>
        </div>
    </div>
</template>

<script>
import { courseInfo } from "@/http/api";


export default {
  data() {
    return {
      basis_id: this.$route.query.basis_id,
      good: [],
      active: 2,
      show:false,
      liss:[]
    };
  },
  mounted() {},
  async created() {
    console.log(this.basis_id);
    let res = await courseInfo(this.basis_id);
    console.log(res);
    this.liss= res.data.data;
   
    // console.log(this.good);
  },
  methods: {}
};
</script>

<style scoped lang="scss" >
.content {
    padding: 16px 16px 160px;
    p{
        margin-top: 10px;
        font-size: 13px;
    }
  }
.boam {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: white;
  div {
    width: 90%;
    height: 100%;
    background: red;
    border-radius: 20px;
    margin: auto;
    text-align: center;
    line-height: 40px;
    color: white;
  }
}
.van-tabs > .van-tab {
  p {
    margin-top: 5px;
  }
}
.td {
  width: 100%;
  height: 130px;
  background: white;
  margin-top: 10px;
  padding: 10px 10px;
  margin-bottom: 10px;
  .jx {
    font-size: 15px;
  }
  .jx_0 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .jx_1 {
    width: 18%;
    height: 60px;

    text-align: center;
    p {
      font-size: 14px;
      margin-top: 3px;
    }
    div {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      border-radius: 50%;
      margin: auto;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.fuw {
  width: 100%;
  height: 40px;
  background: white;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
  font-size: 15px;
  color: #595959;
}
.kecq_1 {
  width: 100%;
  height: 150px;
  background: white;
  padding: 10px 10px;
  p {
    margin-top: 10px;
  }
  .p4 {
    font-size: 13px;
    color: #cccccc;
  }
  .p5 {
    color: red;
  }
}
.imw {
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
}
.kecq {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}
</style>
