<template>
  <div id="app" class="flex bg-grey-lightest text-grey-darkest w-full h-screen subpixel-antialiased">
    <div v-if="browsing">
      <navigation @browsing="toggleBrowsing"></navigation>
      <div class="p-4">
        <router-view />
      </div>
    </div>
    <dashboard v-else @browsing="toggleBrowsing"></dashboard>
  </div>
</template>

<script>
import './assets/main.css'
import Dashboard from './views/Dashboard'
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {Navigation, Dashboard},
  data () {
    return {
      browsing: false
    }
  },
  methods: {
    toggleBrowsing (payload) {
      this.browsing = payload
    }
  }
}
</script>