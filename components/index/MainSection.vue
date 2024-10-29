<template>
  <div class="IndexMainContainer">
    <h1 class="ranchers title">
      Consommer <span class="FruitLegumeText">5 fruits <span style="color: var(--thirdColor)">&</span> légumes</span> 
      <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      n'a jamais été aussi simple !
      <img class="pinkStar1" src="~/public/pinkStar.png" alt="">
    </h1>

    <div class="circle">
      <div class="logo"></div>
      <div class="text">
        <p ref="text">FIBRES  VITAMINES  MINERAUX  </p>
      </div>
      
    </div>
    
  </div>
</template>

<script setup>

const text = useTemplateRef('text')
onMounted(() => {
  text.value.innerHTML = text.value.innerText.split("").map( (char , i) => {
    return `<span class="char" style="
      transform: rotate(${i * 13.8}deg); position : absolute;
      left: 50%;
      transform-origin: 0 100px;
      color:${i < 7 ? 'var(--mainColor)' : i < 17 ? 'var(--secondColor)' : 'var(--thirdColor)'}
      ">${char}
    </span>`
  }).join("")
  
})
</script>

<style scoped>
.IndexMainContainer{
  position: relative;
  width:100%;
  min-height:100vh ;
}
.title{
  margin-top:100px;
  text-align: center;
  color : var(--fourthColor);
  font-size: 44px;
  position: relative;
}
.FruitLegumeText{
  color: var(--secondColor)
}
.pinkStar1{
  position: absolute;
  top:35%;
  left : 40%
}
.circle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  font-family: Ranchers;
  color:var(--thirdColor);
  left:20%;
  top: 100px;
  animation: 12s rotate infinite linear;
}

.text {
  position: absolute;
  width : 100%;
  height:100%
}


@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>