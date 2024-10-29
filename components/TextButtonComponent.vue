<template>
  <div class="ButtonContainer">
    <div class="button roboto">{{ props.text }}</div>
  </div>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    default : 'texte par defaut'
  }
})

</script>

<style scoped>
.ButtonContainer{
  width: fit-content;
}
.button{
  background: var(--mainColor);
  width:fit-content;
  padding: 12px 20px;
  color:white;
  font-weight : bold;
  border-radius: 7px;
  transition: all 0.3s;
  cursor: pointer;
  font-size:20px
}

.button:hover{
  -webkit-box-shadow: 0px 0px 20px -4px var(--mainColor);
  -moz-box-shadow: 0px 0px 20px -4px var(--mainColor);
  box-shadow: 0px 0px 20px -4px var(--mainColor);
}
</style>