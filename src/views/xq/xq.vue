<template>
    <div class="xq">
        <div class="xq_1">
            <div class="left">
                <img :src="lists.avatar">
            </div>
            <div class="right">{{lists.real_name}}</div>
        </div>
        <!---->
        <van-tabs v-model="active">
            <van-tab title="讲师介绍">
             <p class="p3">老师介绍</p>
             <p>{{lists.introduction}}</p>
            </van-tab>
            <van-tab title="主讲课程">
             <!---->
    <div class="js" v-for="(item,key) in goods" :key="key" v-if="key===1">
      <div class="tis_di" v-for="it in item.list" :key="it.id">
        <div class="di_1" @click="kecq(it.id)">
          <div class="im">
            <img :src="it.cover_img" alt="">
          </div>
          <div class="di_2">
            <p>{{it.title}}</p>
            <span>{{it.sales_num}}人已报名</span>
          </div>
        </div>
      </div>
    </div>
    <!---->
            
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { teacher } from "@/http/api";
import { appIndex } from "@/http/api";
export default {
  data() {
    return {
      good: [],
      goods:[],
      lists:[],
      id: this.$route.query.id,
       active: 2,
    };
  },
  mounted() {},
  async created() {
    console.log(this.id);
    let list = await teacher(this.id);
    console.log(list);
    this.good = list.data.data;
    this.lists = list.data.data.teacher;
     let res = await appIndex();
    console.log(res.data.data);
    this.goods = res.data.data;
    console.log(this.good);
    // console.log(this.good);
  },
  methods: {
     kecq(cid){
      // console.log(cid)
      this.$router.push('/kecq?basis_id=' + cid);

    }
  }
};
</script>

<style scoped lang="scss" >
.js {
  width: 100%;
  background: #f7f8fa;
}
.di_2 {
  flex: 1;
  height: 100%;
  line-height: 40px;
  padding: 0px 10px;
  font-size: 14px;
}
.im {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.di_1 {
  width: 80%;
  height: 80px;
  margin: 10px auto;
  display: flex;
  background: white;
  border-radius: 5px;
  align-items: center;
}
.tis_di {
  width: 100%;
  background: #f7f8fa;
}
.tis {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  line-height: 40px;
  font-size: 15px;
  background: #f7f8fa;
}
.van-tabs>p{
    margin-top: 10px;
}
.p3{
    font-size: 12px;
    color: #cccccc;
}
.left {
  width: 30%;
  height: 100%;

  img {
      width: 40px;
      height: 40px;
    margin-top: 30px;
    margin-left: 25%;
  }
}
.right {
  width: 70%;
  height: 100%;
  padding-top: 30px;
}
.xq {
  width: 100%;
  height: 100%;
}
.xq_1 {
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #cccccc;
  display: flex;
}
</style>
