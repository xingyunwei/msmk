<template>
    <div class="shouy">
        <div class="box">
            <img class="sign" src="http://120.53.31.103:86/img/icon-sign.96f11c58.png" alt="">
            <van-search shape="round" background="#ffffff" placeholder="请输入搜索关键词"/>
            <i class="message"></i>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img
                    class="img2"
                    src="https://img2.baidu.com/it/u=1605987499,4009355285&fm=26&fmt=auto&gp=0.jpg"
                    alt=""
                >
            </van-swipe-item>
            <van-swipe-item>
                <img
                    class="img2"
                    src="https://img1.baidu.com/it/u=3766151103,2483188409&fm=26&fmt=auto&gp=0.jpg"
                    alt=""
                >
            </van-swipe-item>
            <van-swipe-item>
                <img
                    class="img2"
                    src="https://img0.baidu.com/it/u=3998012246,2453684564&fm=26&fmt=auto&gp=0.jpg"
                    alt=""
                >
            </van-swipe-item>
        </van-swipe>
        <!---->
        <van-grid square border="">
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
            <van-grid-item icon="photo-o" text="文字"/>
        </van-grid>
        <!---->
        <div class="js" v-for="(item,index) in good" :key="index">
            <div class="tis">
                <p class="tis_1">{{item.channel_info.name}}</p>
                <p class="tis_2">更多></p>
            </div>
            <div class="tis_di" v-for="(it,k) in item.list" :key="k">
                <div class="di_1">
                    <div class="im">
                        <img
                            :src="it.teacher_avatar"
                            alt=""
                        >
                    </div>
                    <div class="di_2">
                        <p>{{it.introduction}}</p>
                        <span>{{it.teacher_name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!---->
        
        
        <div class="tb"></div>
    </div>
</template>

<script>
import { banner } from "@/http/api";
import {appIndex } from "@/http/api";

export default {
  data() {
    return {
        good:[]
    };
  },
   async created() {
    let res = await banner();
    console.log(res);
    let list = await appIndex()
    console.log(list.data.data)
    this.good=list.data.data
  },
  
  mounted() {},
  methods: {}
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
.img2 {
  width: 100%;
  height: 200px;
}
.shouy {
  width: 100%;
  background: #f7f8fa;
}
.sign {
  width: 7.46667vw;

  height: 7.2vw;
  margin-left: 0.4rem;
  margin-left: 4vw;
  padding-bottom: 0.06667rem;
  padding-bottom: 0.66667vw;
}
.my-swipe .van-swipe-item {
  color: #fff;
  background: white;
  text-align: center;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  i {
    text-align: center;
  }
}
.message {
  display: inline-block;
  width: 0.61333rem;
  width: 6.13333vw;
  height: 0.48rem;
  height: 4.8vw;
  margin-right: 0.4rem;
  margin-right: 4vw;
  position: relative;
  background: url(data:image/png;base64,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)
    no-repeat 50%;
  background-size: 100% 100%;
}
.tb {
  width: 100%;
  height: 40px;
}
</style>
