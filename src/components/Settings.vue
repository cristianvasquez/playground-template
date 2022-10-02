<script setup>
import { onMounted, ref } from 'vue'
import {storeToRefs} from 'pinia'
import { defaultLayout } from '../config.js'
import { useLayoutStore } from '../store/layout.js'

const store = useLayoutStore()

const {addCurrentLayout, selectLayout, deleteLayout} = store
const {userLayouts} = storeToRefs(store)

const layouts = [
  { name: 'Default layout', data: defaultLayout },
]

onMounted(()=>{
  store.init()
})

function load (index) {
  store.loadLayoutConfig(layouts[index].data)
}

</script>

<template>
  <div class="layouts">
    <template v-for="(item, index) of layouts">
      <button @click="load(index)">{{ item.name }}</button>
    </template>
    <button @click="addCurrentLayout">Save current</button>
    <template v-for="(item, index) of userLayouts">
      <div>
        <button @click="deleteLayout(index)">X</button>
        <button @click="selectLayout(index)">{{ item.date }}</button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.layouts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
