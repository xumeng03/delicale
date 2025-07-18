<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue"/>
  <d-button size="large">按钮</d-button>
  <d-button size="medium">按钮</d-button>
  <d-button size="small">按钮</d-button>
  <br>
  <d-button type="primary">主要按钮</d-button>
  <d-button type="secondary">次要按钮</d-button>
  <d-button type="tertiary">第三按钮</d-button>
  <d-button type="warning">警告按钮</d-button>
  <d-button type="danger">危险按钮</d-button>
  <d-button type="success">危险按钮</d-button>
  <br>
  <d-button theme="light" type="primary">主要按钮</d-button>
  <d-button theme="light" type="secondary">次要按钮</d-button>
  <d-button theme="light" type="tertiary">第三按钮</d-button>
  <d-button theme="light" type="warning">警告按钮</d-button>
  <d-button theme="light" type="danger">危险按钮</d-button>
  <d-button theme="light" type="success">危险按钮</d-button>
  <br>
  <d-button theme="dark" type="primary">主要按钮</d-button>
  <d-button theme="dark" type="secondary">次要按钮</d-button>
  <d-button theme="dark" type="tertiary">第三按钮</d-button>
  <d-button theme="dark" type="warning">警告按钮</d-button>
  <d-button theme="dark" type="danger">危险按钮</d-button>
  <d-button theme="dark" type="success">危险按钮</d-button>
  <br>
  <d-button type="primary" status="disabled">主要按钮</d-button>
  <d-button type="secondary" status="disabled">次要按钮</d-button>
  <d-button type="tertiary" status="disabled">第三按钮</d-button>
  <d-button type="warning" status="disabled">警告按钮</d-button>
  <d-button type="danger" status="disabled">危险按钮</d-button>
  <d-button type="success" status="disabled">危险按钮</d-button>
  <br>
  <d-button theme="light" type="primary" status="disabled">主要按钮</d-button>
  <d-button theme="light" type="secondary" status="disabled">次要按钮</d-button>
  <d-button theme="light" type="tertiary" status="disabled">第三按钮</d-button>
  <d-button theme="light" type="warning" status="disabled">警告按钮</d-button>
  <d-button theme="light" type="danger" status="disabled">危险按钮</d-button>
  <d-button theme="light" type="success" status="disabled">危险按钮</d-button>
  <br>
  <d-button theme="dark" type="primary" status="disabled">主要按钮</d-button>
  <d-button theme="dark" type="secondary" status="disabled">次要按钮</d-button>
  <d-button theme="dark" type="tertiary" status="disabled">第三按钮</d-button>
  <d-button theme="dark" type="warning" status="disabled">警告按钮</d-button>
  <d-button theme="dark" type="danger" status="disabled">危险按钮</d-button>
  <d-button theme="dark" type="success" status="disabled">危险按钮</d-button>
  <br>
  <d-button theme="dark" type="primary" display="block" @click="()=>{console.log('hello button click!')}">主要按钮
  </d-button>
  <br>
  <d-icon></d-icon>
  <d-icon name="alert"></d-icon>
  <d-icon name="bell"></d-icon>
  <d-icon name="bookmark"></d-icon>
  <d-icon name="calendar"></d-icon>
  <d-icon name="camera"></d-icon>
  <d-icon name="cart"></d-icon>
  <d-icon name="clock"></d-icon>
  <d-icon name="close"></d-icon>
  <d-icon name="cloud"></d-icon>
  <d-icon name="comment"></d-icon>
  <d-icon name="copy"></d-icon>
  <d-icon name="spin" spin></d-icon>
</template>

<style>
.d-button {
  margin-top: 10px;
  margin-right: 8px;
}
</style>
