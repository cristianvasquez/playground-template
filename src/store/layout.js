import { defineStore } from 'pinia'
import { ref } from 'vue'

const LOCAL_STORAGE_KEY = 'saved_layouts'
export const useLayoutStore = defineStore('layout-store', () => {

  const rootLayoutRef = ref(null) // Reference to the current golden layout

  const userLayouts = ref([])

  function _getSavedLayouts () {
    const str = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!str) return []
    return JSON.parse(str)
  }

  function init () {
    userLayouts.value = _getSavedLayouts()
  }

  function addCurrentLayout (additionalState) {
    if (!rootLayoutRef.value) return
    userLayouts.value.push({
      date: new Date(),
      layout: rootLayoutRef.value.getLayoutConfig(),
      ...additionalState,
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userLayouts.value))
  }

  function loadLayoutConfig (config) {
    if (!rootLayoutRef.value) return
    rootLayoutRef.value.loadGLLayout(config)
  }

  function selectLayout (index) {
    if (!rootLayoutRef.value) return
    const { layout } = userLayouts.value[index]
    loadLayoutConfig(layout)
  }

  function deleteLayout (index) {
    if (!rootLayoutRef.value) return
    userLayouts.value.splice(index, 1);
  }

  function addInstance (component) {
    if (!rootLayoutRef.value) return
    rootLayoutRef.value.addGLComponent(component)
  }

  return {
    rootLayoutRef,
    addInstance,
    userLayouts,
    addCurrentLayout,
    selectLayout,
    deleteLayout,
    loadLayoutConfig,
    init
  }
})


