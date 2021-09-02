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
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="(item,key) in goods" :key="key">
              <div class="js">
                <div class="tis_di">
                  <div class="di_1" @click="kecq(item.id)">
                    <div class="im">
                      <img :src="item.cover_img" alt="">
                    </div>
                    <div class="di_2">
                      <p>{{item.title}}</p>
                      <span>{{item.sales_num}}人已报名</span>
                    </div>
                  </div>
                </div>
              </div>
            </van-cell>
          </van-list>
        </van-pull-refresh>
        <!---->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { teacher } from "@/http/api";
import { teachers } from "@/http/api";
export default {
  data() {
    return {
      good: [],
      goods: [],
      lists: [],
      id: this.$route.query.id,
      active: 2,
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  mounted() {},
  async created() {
    console.log(this.id);
    let list = await teacher(this.id);
    console.log(list);
    this.good = list.data.data;
    this.lists = list.data.data.teacher;
    let res = await teachers();
    // console.log(res.data.data);
    this.goods = res.data.data.list;
    console.log(this.goods);
    // console.log(this.good);
  },
  methods: {
    kecq(cid) {
      // console.log(cid)
      this.$router.push("/kecq?basis_id=" + cid);
    },

    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          // this.goods = [];
          this.refreshing = false;
        }
        // for (let i = 0; i < 10; i++) {
        //   this.goods.push(this.goods[i]);
        // }
        this.loading = false;

        if (this.goods.length >= this.goods.length) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
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
  width: 100%;
  height: 80px;
  margin: 10px auto;
  display: flex;
  background: white;
  border-radius: 5px;
  align-items: center;
  padding: 10px 10px;
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
.van-tabs > p {
  margin-top: 10px;
}
.p3 {
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
