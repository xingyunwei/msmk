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
                    <div @click="$router.push('/login')">
                        <img src="http://120.53.31.103:86/img/avatar.71c6d2b4.png" alt="">
                    </div>
                </div>
                <p>
                    <span @click="$router.push('/login')">登录</span>/
                    <span>注册</span>
                </p>
            </div>
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
.ding {
  position: absolute;
  top: 20%;
  left: 42%;
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
