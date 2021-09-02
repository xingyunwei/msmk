<template>
    <div class="zxq">
        <div class="ban">
            <img :src="lists.thumb_img" alt="">
        </div>
        <div class="ban_1">{{lists.title}}</div>
        <div class="ban_2">
            <p>183次预览</p>
            <p>07-05</p>
        </div>
        <div class="ban_3">
            <div>{{lists.description}}</div>
        </div>
        <div class="ban_4" v-html="lists.content"></div>
    </div>
</template>

<script>
import { informationq } from "@/http/api";

export default {
  data() {
    return {
      id: this.$route.query.id,
      lists: []
    };
  },
  mounted() {},
  async created() {
    console.log(this.id);
    let res = await informationq({ information_id: this.id });
    console.log(res);
    this.lists = res.data.data;
    console.log(this.lists);
  },
  methods: {}
};
</script>

<style scoped lang="scss" >
.zxq {
  width: 100%;
  height: 100%;
}
.ban {
  width: 100%;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
}
.ban_1 {
  width: 100%;
  height: 40px;
  font-size: 20px;
  padding: 10px 10px;
}
.ban_2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  font-size: 14px;
  color: grey;
}
.ban_3 {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: grey;
  div{
      width: 80px;
      height: 100%;
      border-bottom: 1px solid grey;
      margin: auto;
  }
}
.ban_4{
    font-size: 19px;
    padding: 10px 10px;
}
</style>
