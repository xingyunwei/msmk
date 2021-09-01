<template>
    <div class="kec">
        <div class="js" v-for="(item,index) in good" :key="index" v-if="index==2">
            <div class="tis_di"  v-for="it in item.list" :key="it.teacher_id">
                <div class="di_1" @click="xqlist(it.teacher_id)">
                    <div class="im">
                        <img :src="it.teacher_avatar" alt="">
                    </div>
                    <div class="di_2">
                        <p>{{it.introduction}}</p>
                        <span>{{it.teacher_name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="dd" v-show="!good[2].lenght">到底了</div>
    </div>
</template>

<script>
import { appIndex } from "@/http/api";
export default {
  data() {
    return {
      id:this.$route.query.id,
      good: []
    };
  },
  async created() {
    let list = await appIndex(this.id);
    console.log(this.id)
    // console.log(list.data.data);
    this.good = list.data.data;
    console.log(this.good);
  },
  mounted() {},
  methods: {
     xqlist(cid) {
      // console.log(cid)
      //     // console.log(id)
      //     // this.$router.push('/xq')
      //     // this.$emit('/xq?id'+id)
      this.$router.push('/xq?id=' + cid);
    },
  }
};
</script>

<style scoped lang="scss">

.dd{
    width: 100%;
    text-align: center;
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
.kec {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
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
</style>
