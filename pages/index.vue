<template>
  <div class="HomeContainer">
    <MainSection></MainSection>
  </div>
</template>

<script lang="ts" setup>
import MainSection from '~/components/index/MainSection.vue'
</script>

<style scoped>
.HomeContainer{
  min-height: 100vh;
  width: 100%;
  position: absolute;
  top:0;
  background: inherit;
}
.buttonComponent{
  margin : 150px auto;
}
</style>