<template>
    <div class="my">
        <div class="top-box">
            <div class="mine">
                <div class="mine-item my-study">
                    <p>0</p>
                    <p>我的学习</p>
                </div>
                <div class="mine-item my-study">
                    <p>0</p>
                    <p>本周课时</p>
                </div>
                <div class="mine-item my-study">
                    <p>0</p>
                    <p>我的积分</p>
                </div>
            </div>
            <div class="ding">
                <div class="avatar">
                    <div>
                        <img src="http://120.53.31.103:86/img/avatar.71c6d2b4.png" alt="">
                    </div>
                    <p>176****210</p>
                </div>
            </div>
            <!---->
            <div class="yq" @click="$router.push('/Sign')">
             <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAhCAYAAADOHBvaAAAAAXNSR0IArs4c6QAAAmJJREFUSA3tlrtLXEEUh3eNBoNCREgjvhEkhYngYsAynY2l/0NKqzQKWoiltSCkSJGAIXUgqWIlSWNhEUI0+GAhLD6iYiXr91vuXGbWe2fuLl7T5MC3c87MOee3M/exWyikWLVaXYK/8BFaU9JuTSs3qlHt0q0E3wQF3WDbtC/fXqNo2i7E77bXjd9inLrxcSCuW3bCTLVpwk6nPALn2nEsnYhUk4RYU25v0po1d2j5sUttB0ERuzCTtR2zMAnfmDyDGbNYN/YR7wVQTpKp55k0pKUE3YFjjJvwUBNYO5yCdl4E2Qk8qnn+D+Wo1ph6KFZPbbIEm2iWFKyAEcUtTHAkElqACryHLzABIVPOZ1CNaheiXhI0Jq2VAuoVsO2KQKcQG3EX/LKTUnzldMWFOMRjoJ62VYqK7MTIv2Rche8wDHOQdv1YcuyASLW7oJ2qVjeXY2nCTlIeQe2uzqNxqOd/4dAJZVnX20uPktfu+qjXUBuM2PEp36XwOkKveGFcgx7HLZ+wHnCfHbD4Embh2JP4hjXzelXPp6B3c6qFhBfNt6ZDCU4TOr1lLj45/FEoJ+Q5UyHhT0ZYI5UvwN7JO+IHJgd/BI4gaCFhNVg2jSPxKebOYQPi33P8IdiHTJZFWI2cP23Ez6DNfCH8AfgNmS2rsBrOGyF7ZL4PdpXQiDUirL6v60R7mPvZiKDJbVRYdTVxxn74oYlmrNmfxTI7fwLxzWWfRBa/WeEsvb058YPvzcph8Z8K63rdt5W146/3rSpN3Vz9ONvg/C3N8cvoD/7zFn4793HG4QP8gbxMvaUxLs0bthcya1NS8hYAAAAASUVORK5CYII=" alt=""></p>
             <span>已签到</span>
            </div>
            <!---->
        </div>
        <div class="di" v-for="(item,index) in list" :key="index">
            <div>
                <div class="di_1" @click="t(k)" v-for="(it,k) in item" :key="k">
                    <div>
                        <van-icon :name="it.icon"/>
                        {{it.name}}
                    </div>
                    <p>></p>
                </div>
            </div>
        </div>
        <div class="di_di"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        [
          {
            name: "我的作业",
            icon: "description",
            url: "Homework"
          },
          {
            name: "我的社区",
            icon: "friends-o",
            url: "MyCommunity"
          }
        ],
        [
          {
            name: "课程订单",
            icon: "newspaper-o",
            url: "Order"
          },
          {
            name: "图书订单",
            icon: "idcard",
            url: "Order"
          }
        ],
        [
          {
            name: "优惠券",
            icon: "coupon-o",
            url: "Coupon"
          },
          {
            name: "学习卡",
            icon: "debit-pay",
            url: "Card"
          },
          {
            name: "分销中心",
            icon: "peer-pay",
            url: "Distribute"
          }
        ],
        [
          {
            name: "消息中心",
            icon: "comment-o",
            url: "Message"
          },
          {
            name: "地址管理",
            icon: "location-o",
            url: "Address"
          },
          {
            name: "关于我们",
            icon: "friends-o",
            url: "About"
          },
          {
            name: "意见反馈",
            icon: "records",
            url: "Feedback"
          },
          {
            name: "设置",
            icon: "setting-o",
            url: "Options"
          }
        ]
      ]
    };
  },
  mounted() {},
  methods: {
    t(k) {
      //   console.log(k)
      if (k == 4) {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped lang="scss" >
.yq {
  position: absolute;
  display: inline-block;
  top: 30%;
  right: 0;
  transform: translateY(-50%);
  width: 18vw;
  height: 6.66667vw;
  background: linear-gradient(270deg, #6dbcff, #4e7de3);
  box-shadow: 0 0.05333rem 0.10667rem 0 rgb(0 0 0 / 20%);
  box-shadow: 0 0.53333vw 1.06667vw 0 rgb(0 0 0 / 20%);
  border-radius: 0.33333rem 0 0 0.33333rem;
  border-radius: 3.33333vw 0 0 3.33333vw;
  span{
   font-size: .32rem;
    font-size: 3.2vw;
    color: #fff;
    position: absolute;
    top: 50%;
    left: .66667rem;
    left: 6.66667vw;
    transform: translateY(-50%);
    white-space: nowrap;
  }
  img{
      width: .26667rem;
    width: 2.66667vw;
    position: absolute;
    top: 50%;
    left: .26667rem;
    left: 2.66667vw;
    transform: translateY(-50%);
  }
}
.ding {
  position: absolute;
  top: 15%;
  left: 6%;
  transform: translate(-50% -50%);
  p {
    color: white;
  }
}
.avatar {
  width: 1.68rem;
  width: 16.8vw;
  height: 1.68rem;
  height: 16.8vw;
  background-color: #bdcdf1;
  border-radius: 50%;
  display: flex;
  p {
    margin-left: 10px;
    margin-top: 15px;
  }
  img {
    width: 1.68rem;
    width: 16.8vw;
    height: 1.68rem;
    height: 16.8vw;
    border-radius: 50%;
  }
}
.di_di {
  width: 100%;
  height: 60px;
}
.di_1 {
  width: 100%;
  border: 1px solid #f7f8fa;
  padding: 0px 10px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.di {
  width: 100%;
  background: white;
  margin-top: 10px;
  .van-icon {
    width: 20px;
    height: 20px;
  }
}
.my {
  width: 100%;
  background: #f7f8fa;
}
.my {
  width: 100%;
  height: 100%;
}
.mine-item {
  width: 33%;
  text-align: center;
  position: relative;
  margin-bottom: 0.53333rem;
  margin-bottom: 5.33333vw;
}
.mine {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.top-box {
  height: 8rem;
  height: 80vw;
  background: url(http://120.53.31.103:86/img/user_bg.7d633ee2.png) no-repeat
    top;
  background-size: 100%;
  background-color: #fff;
  position: relative;
}
</style>

