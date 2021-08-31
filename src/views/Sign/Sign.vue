<template>
    <div class="sign">
        <div class="top-box">
            <div class="ding">
                <div class="avatar">
                    <div @click="$router.push('/login')">
                        <img src="http://120.53.31.103:86/img/avatar.71c6d2b4.png" alt="">
                    </div>
                    <div class="ming">
                        <p>176****210</p>
                        <p>积分:</p>
                    </div>
                </div>
                <div class="guiz" @click="showPopup">签到规则</div>
                <van-popup v-model="show" round>
                    签到规则:
                    1.每日签到可获得日签奖励，在单个周期内连续签到可获得连签奖励，同1个周期内最多可领取一次；
                    2.每日最多可签到1次，断签则会重新计算连签天数；
                    3.活动以及奖励最终解释归机构所有；
                </van-popup>
                <p></p>
            </div>
            <div class="dae">
                <van-calendar
                    @select="signIn"
                    :show-confirm="false"
                    :show-mark="false"
                    :lazy-render="false"
                     row-height="30px"
                    :show-title="false"
                    :poppable="false"
                />
            </div>
        </div>
        <div class="g"></div>
        <div class="js" v-for="(item,index) in list" :key="index">
            <div class="tis">
                <p class="tis_1">{{item.title}}</p>
                <p class="tis_2">更多></p>
            </div>
            <div class="tis_di">
                <div class="im">
                    <img
                        src="https://img0.baidu.com/it/u=4086653970,2392878139&fm=26&fmt=auto&gp=0.jpg"
                    >
                </div>
                <div class="di_2">
                    <p>{{item.name}}</p>
                    <span>0积分</span>
                </div>
                <p class="pp">去兑换</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      uid: '',
      list: [
        {
          title: "好课推荐",
          name: "渣男的自我修养"
        },
        {
          title: "热门图书",
          name: "渣男的自我修养"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    signIn() {
     console.log('111')
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style scoped lang="scss" >
.pp {
  border: 1px solid #cccccc;
  font-size: 12px;
  width: 50px;
  text-align: center;
  border-radius: 10px;
  height: 20px;
  margin-top: 70px;
  margin-right: 20px;
}
.sign {
  background: #fefefe;
}

.dae {
  width: 80%;
  height: 230px;
  position: absolute;
  top: 115px;
  margin-left: 10%;
  border-radius: 5px;
}
.g {
  width: 100%;
  height: 110px;
}
.guiz {
  width: 65px;
  color: white;
  font-size: 12px;
  border: 1px solid white;
  border-radius: 20px;
  text-align: center;
  position: absolute;
  left: 260px;
  top: 15px;
}
.ming {
  margin: 10px 10px;
}
.ding {
  position: absolute;
  top: 5%;
  left: 5%;

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
  img {
    width: 1.68rem;
    width: 16.8vw;
    height: 1.68rem;
    height: 16.8vw;
    border-radius: 50%;
  }
}

.di_2 {
  flex: 1;
  height: 100%;
  line-height: 40px;
  padding: 0px 10px;
  font-size: 14px;
  p {
    margin-top: 10px;
  }
  span {
    color: red;
  }
}
.im {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 30px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.tis_di {
  width: 90%;
  height: 100px;
  margin-left: 5%;
  display: flex;
  border-radius: 5px;
  padding: 0 5px;
  border: 1px solid #cccccc;
}
.tis {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  line-height: 40px;
  font-size: 15px;
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
  height: 250px;
  background: #e54754;
  position: relative;
}
</style>
