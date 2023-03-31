<template>
  <div class="marquee-wrapper">
    <div class="marquee-inner">
      <div class="marquee-embed">
        <marquee scrollamount="10"><strong>Внимание!</strong> При покупке 2-х товаров, 3-й за 1 рубль, вне зависимости от
          его стоимости</marquee>
      </div>
    </div>
  </div>
</template>

<style>
.marquee-wrapper {
  padding: 1%;
  background-color: #d6c9a2;
}
.marquee-inner {
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}
.marquee-embed {
  color: #252423;
  font-size: 22px;
}

@media (max-width: 900px) {
  .marquee-embed {font-size: 19px;}
}
@media (max-width: 700px) {
  .marquee-embed {font-size: 18px;}
}
@media (max-width: 600px) {
  .marquee-embed {font-size: 16px;}
}
</style>