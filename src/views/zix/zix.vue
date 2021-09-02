<template>
  <div class="zix">
    <van-tabs lazy-render @click="aa">
      <van-tab v-for="(item,index) in good" :key="index" :title="item.name">
        <div class="good_1" v-for="it in lists" :key="it.id" @click="zxq(it.id)">
          <div class="left">
            <img :src="it.thumb_img" alt="">
          </div>
          <div class="right">
            <div>{{it.title}}</div>
            <div class="right_2">{{it.description}}</div>
            <div class="right_1">
              <p>
                <img src="" alt="">
                {{it.click_rate}}
              </p>
              <p>2021/07/05 16:57</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { information } from "@/http/api";
import { informations } from "@/http/api";
export default {
  data() {
    return {
      good: [],
      lists: [],
      from: {
        page: 1,
        limit: 10,
        classify_id: 0
      }
    };
  },
  async created() {
    let list = await information();
    // console.log(list.data.data);
    this.good = list.data.data;
    this.good.unshift({
      id: 0,
      name: "全部",
      parent_id: 0
    });
    console.log(this.good);

    let res = await informations(this.from);
    this.lists = res.data.data.list;
    console.log(this.lists);
  },
  mounted() {},
  methods: {
    
    async aa(i) {
      this.from.classify_id = this.good[i].id;
      let res = await informations(this.from);
      this.lists = res.data.data.list;
      console.log(this.lists);
    },
    zxq(cid){
      this.$router.push('/zxq?id='+cid)
    }
  }
};
</script>

<style scoped lang="scss" >
.left {
  width: 30%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}
.right {
  width: 70%;
  height: 100%;
  padding: 0px 10px;
  div {
    margin-top: 10px;
  }
  .right_2 {
    font-size: 14px;
    color: grey;
  }
  .right_1 {
    font-size: 14px;
    color: grey;

    display: flex;
    justify-content: space-between;
  }
}
.good_1 {
  width: 90%;
  height: 90px;
  background: white;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: gray;
  display: flex;
}
.zix {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
}
</style>
