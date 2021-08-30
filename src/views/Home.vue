<template>
    <div class="hom">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/shouy">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/kec">课程</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/zix">咨询</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/tushu">图书</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
        </van-tabbar>
        <router-view/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss" >
.hom {
  width: 100%;
  height: 100%;
  position: relative;
}
.tabs {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eaeaea;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: white;
}
</style>

