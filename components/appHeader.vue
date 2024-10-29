<template>
  <div class="nav-container">

    <div class="logo roboto">
      <span>K</span>
      <span>e</span>
      <span>n</span>
      <span>k</span>
      <span style="color: var(--secondColor)">ō</span>
    </div>

    <div class="nav">
      <nav>
        <ul class="roboto">
          <li ref="li" class="playright" v-for="page in pages" :key="page.name" @click="selectPage(page)" :class="{ selected : selectedPage === page.name}">
            <NuxtLink :to="page.navigateTo">{{ page.name }}</NuxtLink>
            <div class="dot" ref="dot"></div>
          </li>
        </ul> 
      </nav>
    </div>

    <CartComponent></CartComponent>

  </div>
</template>

<script setup>
const pages = [{ name : 'Découverte', navigateTo : '/'},{ name: 'Nos produits', navigateTo : '/products'},{ name: 'À propos', navigateTo : '/about'},{ name:"Contact", navigateTo :'/contact'}]
const selectedPage = ref(pages[0].name)
const navLi = useTemplateRef('li')
const dot = useTemplateRef('dot')
onMounted(() => {


  dot.value.forEach((el, index) => {
    navLi.value[index].addEventListener('mouseover', () => {

        el.classList.remove('slide-right-max'); // Retire l'animation inverse
        void el.offsetWidth; // Forcer un repaint pour réinitialiser l'animation
        el.classList.add('slide-right'); // Ajoute l'animation d'entrée
        isDebouncing = true;
        
    });

    navLi.value[index].addEventListener('mouseleave', () => {
      el.classList.remove('slide-right'); // Retire l'animation d'entrée
      void el.offsetWidth; // Forcer un repaint pour réinitialiser l'animation
      el.classList.add('slide-right-max'); // Ajoute l'animation de sortie
    });
  });
});

const selectPage = ( page ) => {
  selectedPage.value = page.name
}

</script>

<style scoped>
.nav-container{
  height: 80px;
  width:100%;
  display:flex;
  justify-content: space-between;
  padding: 50px;
  align-items: center;
  position: absolute;
  top:0;
  z-index: 100;
}
.logo{
  font-weight : bold;
  font-size: 3em;
  color:var(--mainColor)
}
ul{
  display:flex;
  flex-flow : row;
  width: fit-content;
  justify-content: space-between;
  list-style: none;
  color: var(--mainColor);
  font-size:23px;
}
li{
  margin: 0 2vw;
  cursor: pointer;
  font-size: 0.8em;
  position: relative;
  font-weight: 400;
  overflow: hidden;
}

li.selected{
  color:var(--fourthColor);
  font-weight: 600;
}

.dot{
  position:relative;
  width:100%;
  height:2px;
  background: var(--secondColor);
  transform:translateX(-100%);
}


.slide-right {
  animation: slideToRight 0.5s ease forwards;
}

.slide-right-max {
  animation: slideToRightMax 0.5s ease forwards;
}

@keyframes slideToRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slideToRightMax {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}


</style>