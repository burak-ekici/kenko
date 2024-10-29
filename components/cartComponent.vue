<template>

  <div class="cartButton">
    <Icon name="uil:cart" class="roboto" style="color : var(--thirdColor); font-size: 40px"></Icon>
    <div class="productCount">5</div>
  </div>
</template>


<style scoped>
.cartButton{
  position: relative;
  cursor: pointer;
  margin-top:15px
}
.productCount{
  height:20px;
  width:20px;
  background-color: var(--secondColor);
  color:white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: relative;
  top:-20px;
  left:60%
}
</style>