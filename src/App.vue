<script setup lang="ts">
</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}
html, body{
  width: 100%;
  height: 100%;
  background-color: #000;
  min-width: 1280px;
  min-height: 720px;
}
#app {
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar {
    // display: none;
    // -ms-overflow-style: none;
    // scrollbar-width: none;
}
.v-enter-active, .v-leave-active {
  transition: 0.25s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.v-enter-to, .v-leave-from {
  opacity: 1;
}
a{
  color: #000;
  text-decoration: none;
}
img, canvas, iframe, a{
  display: block;
  max-width: 100%;
}
.pointer{
  cursor: pointer;
}
</style>