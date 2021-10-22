<template>
  <div class="login">
    <van-cell-group>
      <van-cell :title="msg" value="内容" />
      <van-cell :title="dd.name" value="内容" label="描述信息" />
    </van-cell-group>
    <van-button @click="sd">22</van-button>
  </div>
</template>

<script setup>
import {  ref,reactive,toRefs } from 'vue'
const msg = ref('Hello')
const dd = reactive({name:'111',sex:''})
const sd = ()=> dd.name='22'
</script>
<style scoped lang="less">

</style>