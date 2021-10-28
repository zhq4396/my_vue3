<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请输入正确内容' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请输入正确内容' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { useLogin } from "./hooks/login";
const { username, password, onSubmit } = useLogin();
</script>

<style scoped lang="less">
.van-field {
  padding: 20px;
}
</style>