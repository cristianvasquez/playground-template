
<script setup>
import { ref } from 'vue'
import Glayout from './components/layout/Glayout.vue'
import { miniRowLayout } from './layouts/predefined-layouts'

const rootLayoutRef = ref(null)

const onClickInitLayoutMinRow = () => {
  if (!rootLayoutRef.value) return
  console.log('onClickInitLayoutMinRow')
  rootLayoutRef.value.loadGLLayout(miniRowLayout)
}

const onClickAddGLComponent1 = () => {
  if (!rootLayoutRef.value) return
  rootLayoutRef.value.addGLComponent('Content1', 'Title 1st')
}

const onClickAddGLComponent2 = () => {
  if (!rootLayoutRef.value) return
  rootLayoutRef.value.addGLComponent('Content2', 'I\'m wide')
}

const onClickAddGLComponent3 = () => {
  if (!rootLayoutRef.value) return
  rootLayoutRef.value.addGLComponent('Content3', 'I\'m high')
}

const onClickSaveLayout = () => {
  if (!rootLayoutRef.value) return
  const config = rootLayoutRef.value.getLayoutConfig()
  localStorage.setItem('gl_config', JSON.stringify(config))
  console.log('saved',localStorage.getItem('gl_config'))
}

const onClickLoadLayout = () => {
  const str = localStorage.getItem('gl_config')
  if (!str) return
  if (!rootLayoutRef.value) return
  const config = JSON.parse(str)
  rootLayoutRef.value.loadGLLayout(config)
}
</script>

<template>
  <div class="full-height">
    <div id="nav" style="height: 90px">
      <h1 style="margin: 0">Golden Layout Demo</h1>
      <button @click="onClickInitLayoutMinRow">Init Layout MinRow</button>
      <div style="width: 20px; display: inline-block"></div>
      <button @click="onClickAddGLComponent1">
        Add Simple Component
      </button>
      <button @click="onClickAddGLComponent2">
        Add Widest Component
      </button>
      <button @click="onClickAddGLComponent3">
        Add Highest Component
      </button>
      <div style="width: 20px; display: inline-block"></div>
      <button @click="onClickSaveLayout">Save Layout</button>
      <div style="width: 20px; display: inline-block"></div>
      <button @click="onClickLoadLayout">Load Layout</button>
    </div>
    <glayout
        ref="rootLayoutRef"
        glc-path="./"
        style="width: 100%; height: calc(100% - 90px)"
    ></glayout>
  </div>
</template>

<style>
@import "golden-layout/dist/css/goldenlayout-base.css";
@import "golden-layout/dist/css/themes/goldenlayout-dark-theme.css";

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.full-height, #app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  text-align: center;
}
</style>


