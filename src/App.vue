<template>
  <div id="app" class="flex bg-grey-lightest text-grey-darkest w-full h-screen subpixel-antialiased">
    <navigation></navigation>
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import './assets/main.css'
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {Navigation}
}
</script>