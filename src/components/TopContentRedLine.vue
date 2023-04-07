<template>
  <div class="top-content-red-line">
    <div class="red-line-title" v-html="title"></div>
    <a class="back-button hover" :href="link" title="НАЗАД">
      <img src="@/assets/images/back-btn.png" />
    </a>
  </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
  props: {
    link: String,
    title: String
  },
  setup(props){
    const { link, title } = toRefs(props)
    return { link, title }
  }
}
</script>

<style>
.top-content-red-line{
  background: var(--main-color);
  margin-bottom: 2%;
  padding: 1%;
  display: grid;
  grid-template-columns: 100px 1fr;
}
.red-line-title{
  color: #fff;
  font-size: 32px;
  line-height: 1.4em;
  text-align: center;
  text-transform: uppercase;
  padding-left: 50px;
  padding-right: 50px;

  grid-column: 1/3; 
  grid-row: 1/1;
}
.back-button{
  width: 42px;
  height: 42px;
  cursor: pointer;
  display: block;
  animation: inleft 2s ease-in-out;

  grid-column: 1/1; 
  grid-row: 1/1;
}
@keyframes inleft {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
}
.back-button img{
  width: 100%;
}
.hover{
  transition: all .2s;
}
.hover:hover{
  transform: scale(.95);
}

@media (max-width: 1025px) {
  .red-line-title{font-size: 30px;}
  .back-button {
    width: 40px;
    height: 40px;}
}
@media (max-width: 900px) {
  .red-line-title{font-size: 26px;}
  .back-button {
    width: 36px;
    height: 36px;}
}
@media (max-width: 700px) {
  .red-line-title{font-size: 24px;}
  .back-button {
    width: 34px;
    height: 34px;}
}
@media (max-width: 500px) {
  .red-line-title{font-size: 22px;}
  .back-button {
    width: 32px;
    height: 32px;}
}
@media (max-width: 400px) {
  .red-line-title {
    padding-left: 30px;
    padding-right: 30px;
    font-size: 19px;}
  .back-button {
    width: 28px;
    height: 28px;}
}
@media (max-width: 330px) {
  .red-line-title {font-size: 17px;}
  .back-button {
    width: 25px;
    height: 25px;}
}
</style>