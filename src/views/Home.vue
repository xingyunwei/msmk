<template>
    <div class="hom">
        <div class="tabs">
            <div selected @click="$router.push('/shouy')">
                <span slot="label">首页</span>
            </div>
             <div selected @click="$router.push('/kec')">
                <span slot="label">课程</span>
            </div>
             <div selected @click="$router.push('/zix')">
                <span slot="label">咨询</span>
            </div>
             <div @click="$router.push('/tushu')">
                <span slot="label">图书</span>
            </div>
             <div selected @click="$router.push('/my')">
                <span slot="label">我的</span>
            </div>
        </div>
        <router-view/>
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
.hom{
    width: 100%;
    height: 100%;
    position: relative;
}
.tabs{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid #eaeaea;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: white;
 }
</style>

