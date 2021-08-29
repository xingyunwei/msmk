<template>
    <div class="box1">
        <div class="im">
            <img
                class="img"
                src="https://img1.baidu.com/it/u=3218295340,4272559932&fm=253&fmt=auto&app=120&f=JPEG?w=641&h=361"
                alt=""
            >
        </div>
        <!---->
        <div class="login">
            <div class="itp_num">
                <input class="iptuser" v-model="phone" placeholder="请输入手机号">
                <div class="getCAPTCHA" @click="add">获取验证码</div>
            </div>
            <div class="itp_num">
                <input class="iptuser" placeholder="请输入短信验证码">
            </div>
            <div class="others">
                <span class="forget">*未注册的手机号将自动注册</span>
                <span class="login_CAPTCHA">使用密码登录</span>
            </div>
        </div>
        <!---->
        <div class="logins">
            <p class="p login-btn" @click="logi">登录</p>
            <div class="login-info">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzY0RTVCOTQ1QUEyMTFFQUIzQzNDMEVBNEQ3QkEyNEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzY0RTVCOTM1QUEyMTFFQUIzQzNDMEVBNEQ3QkEyNEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRDcxMEU1ODVBN0YxMUVBQjNDM0MwRUE0RDdCQTI0QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMDNCOTRDNjVBODAxMUVBQjNDM0MwRUE0RDdCQTI0QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjuKVAAAAAK7SURBVHjaxJjLaxNRFMZP7oSC8dE0CUpaKYoRF2n1H7BdiIsqrdFlWjE1VRcVFKwRXLgRX0FJ8RkUE3UhbhXjE0Wx7hRF1JVdmnRjIoEajJDoOfEMjElmOo9M/OCDLGYmv7n33Hu/M44ceMCAAugQehDdg/ajfeg8OofOomfQd9Gzeh7o/50Hhw4IgY6gp9BBA8Cf0Qn0LXTFCsQQ+iy6D8yLYGLoR2oQQuPtT/ONVgCAR+8h+gw/t0HNRmIx+g56BFqvDDqMnteaDsFFZQeAEoSKu6o2HSdtBiANo0+pTceQWvHYpK30f8rpoBH50IIiNLpq1iNEVZ6OSJsB5FUzrpyOTwY3IkNacuwwVLNzUErfbhgNHIk+wVuxbQCdyXOw9PhR6Ng00HQ05hzegJOXiz0A16bBtXcXlDNPoBg9oHZZyMmHUesBrp8H18TOGkBhZFTr0kHBp2FrAa4m9AKQegiiW/MI9a8A4enSD5C6AK59Eb0ApG5aHWX80aF2xfLZt+DweuBb/0aofM0tDBAdg/KDp1AYDuvl/iU4kKjqx+UUCHcn+D6+BmnNanWA9MUawM/7j40AkPKCE5E6xHQSivuP/AV58wyk3pUN17hvXALX7tEawPdtY0ZLKCc4kmmqdCUFxckYiC43+N69AGlV7z+rYNF4uFYDJgBIWcGZcEGVkmko7jkIAuvD9/4lONcFYFnihJFVoKYZKkzaMb/ovYM2H9qEZBkswmZaa+rsoOGnOig/fwWFzTssnaR0dsgQUXQK2q8JhEjLEBLniWAbAShPbECIipwnKhzL26mY3I8oMyZFu3ibAOLKKNksbd/jMPrf0naV+4KMjQBhGUD55vWaZ9K4DVMQUjY+Wh2YUlu4Fw1aXAWavaierlziNH7IZFd+s374zUDUf5/Yjh7gREaByGv1+8QfAQYAF+DnFinyD5YAAAAASUVORK5CYII="
                    alt=""
                >
                <p>我同意</p>
                <a @click="$router.push('/registration')">用户注册协议</a>
                <p>和</p>
                <a @click="$router.push('/agreement')">隐私保护</a>
            </div>
        </div>
        <!---->
    </div>
</template>

<script>
import { smsCode } from "@/http/api";
import { password } from "@/http/api";
export default {
  data() {
    return {
      phone: "" //手机号
    };
  },
  mounted() {
    // this.getList();
  },
  async created() {
    let res = await smsCode({ mobile: 17633344210, sms_type: "login" });
    console.log(res);
      let list = await smsCode({ mobile: 17633344210, sms_type: "login",password:"" });
    console.log(list);
  },
  methods: {
    logi() {},
    add() {
      if (!/^1[2|3|4|5|6|7]\d{9}$/.test(this.phone)) {
        this.$notify("手机号格式错误");
        return false;
      } else {
      }
    }
  }
};
</script>

<style scoped lang="scss" >
.login-info {
  display: flex;
  padding-top: 0.8rem;
  padding-top: 8vw;
  width: 7.73333rem;
  width: 77.33333vw;
  margin: -40px auto;
  align-items: center;
  img {
    width: 0.4rem;
    width: 4vw;
    height: 0.4rem;
    height: 4vw;
    margin-right: 0.13333rem;
    margin-right: 1.33333vw;
  }
  p {
    font-size: 0.32rem;
    font-size: 3.2vw;
    line-height: 0.53333rem;
    line-height: 5.33333vw;
  }
  a {
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #e60012;
    font-size: 0.32rem;
    font-size: 3.2vw;
    line-height: 0.53333rem;
    line-height: 5.33333vw;
  }
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: block;
  -webkit-margin-before: 1em;
  margin-block-start: 1em;
  -webkit-margin-after: 1em;
  margin-block-end: 1em;
  -webkit-margin-start: 0px;
  -moz-margin-start: 0px;
  margin-inline-start: 0px;
  -webkit-margin-end: 0px;
  -moz-margin-end: 0px;
  margin-inline-end: 0px;
}
.login-btn {
  display: inline-block;
  width: 7.46667rem;
  width: 74.66667vw;
  height: 1.2rem;
  height: 12vw;
  line-height: 1.2rem;
  line-height: 12vw;
  margin-top: 1.46667rem;
  margin-top: 14.66667vw;
  letter-spacing: 0.05333rem;
  letter-spacing: 0.53333vw;
  font-size: 0.37333rem;
  font-size: 3.73333vw;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #fff;
}
.logins {
  height: 4.98667rem;
  height: 49.86667vw;
  background: url("http://120.53.31.103:86/img/login-btn.cfc4f1f1.png");
  background-size: 100% 100%;
  text-align: center;
  background-color: white;
}
.others,
.forget,
.login_CAPTCHA {
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
}
.login_CAPTCHA {
  color: #999;
}
.forget {
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
}
.others {
  width: 100%;
  margin-top: 0.4rem;
  margin-top: 3vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.getCAPTCHA {
  height: 0.66667rem;
  height: 6.66667vw;
  margin-top: 0.33333rem;
  margin-top: 3.33333vw;
  margin-right: 0.13333rem;
  margin-right: 1.33333vw;
  color: #e60012;
  border-radius: 0.04rem;
  border-radius: 0.4vw;
  float: right;
  padding: 0;
  text-align: center;
  font-size: 0.32rem;
  font-size: 3.2vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  line-height: 0.66667rem;
  line-height: 6.66667vw;
}
.int_num .iptuser {
  width: 5.33333rem;
  width: 53.33333vw;
}
.itp_num {
  height: 1.33333rem;
  height: 13.33333vw;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  input {
    box-sizing: border-box;
    padding: 0.4rem 0;
    padding: 4vw 0;
    border: 0;
    height: 100%;
    font-size: 0.4rem;
    font-size: 4vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    line-height: 0.53333rem;
    line-height: 5.33333vw;
    float: left;
    outline: none;
  }
}
.login {
  padding: 0 1.06667rem;
  padding: 0 10.66667vw;
  overflow: hidden;
  background: white;
}
.img {
  width: 100%;
  height: 100%;
}
.im {
  width: 100%;
  height: 340px;
  background: white;
}
.box1 {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
