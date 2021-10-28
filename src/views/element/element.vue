<template>
  <van-contact-list
    v-model="chosenContactId"
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect"
  />
</template>

<script setup>
import { ref } from "vue";
import { Toast } from "vant";

const chosenContactId = ref("1");
const list = ref([
  {
    id: "1",
    name: "张三",
    tel: "13000000000",
    isDefault: true,
  },
  {
    id: "2",
    name: "李四",
    tel: "1310000000",
  },
]);

const onAdd = () => Toast("新增");
const onEdit = (contact) => Toast("编辑" + contact.id);
const onSelect = (contact) => Toast("选择" + contact.id);
</script>

<style>
</style>