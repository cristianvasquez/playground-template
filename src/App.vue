
<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import Glayout from './layout/Glayout.vue'
import { SETTINGS, HOME, defaultLayout } from './config.js'
import { useLayoutStore } from './store/layout.js'

const store = useLayoutStore()
const { rootLayoutRef } = storeToRefs(store)
const { addInstance, loadLayoutConfig } = store

const components = [HOME, SETTINGS]

onMounted(()=>{
  loadLayoutConfig(defaultLayout)
})

</script>

<template>
  <div class="full-height">
    <div id="nav">
      <h1>Playground</h1>
      <template v-for="component of components">
        <button @click="addInstance(component)">
          {{ component.title }}
        </button>
      </template>
    </div>
    <glayout
        ref="rootLayoutRef"
        componentPathPrefix="../"
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
</style>


