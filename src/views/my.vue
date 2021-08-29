<template>
    <div class="my">
        <div class="top-box">
            <div class="mine">
                <div class="mine-item my-study">
                    <p>0</p>
                    <p>我的学习</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss" >
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
