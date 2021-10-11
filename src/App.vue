<template>
  <div id="app">
   <router-view/>
  </div>
</template>
<style script> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
ul {
  list-style: none;
  padding: 0;
}
/*#quiz(beginner.vue, intermediate.vue, advanced.vue)*/ 
#quiz {
  margin-top: 40px;
}
#quiz .totalSum > ul #liFirst {
  color: red;
  transform: rotate( 15deg);
}
#quiz .totalSum > ul #liSecond {
  color:rgb(0, 36, 77);
  margin-top: 50px;
}
.totalSum ul > #liSecond span {
  font-size: 30px;
}
.back {
  font-size: 20px;
}
.back input[type="button"] {
  display: inline-block;
  background-color: rgba(234, 241, 234, 0.678);
}
/*MainDat.vue*/
/*全体*/
#MainData {
  margin: 0 40px;
}
#MainData h1 {
  margin: 5px 0 35px;
}
#MainData form  {
  font-size: 30px;
}
#MainData .toNext > input[type="button"] {
  color:rgb(71, 71, 71);
  background-color: rgb(226, 230, 247);
  margin: 20px 0;
}
#MainData .select {
  margin: 25px 0;
}
#MainData .select > input[type="button"] {
  padding: 5px 10px;
  background-color: rgb(246, 250, 245);
}
#MainData .answer {
  color: red;
  font-size: 40px;
}
/*960~*/
@media screen and (min-width: 960px) {
  #quiz h1 {
    font-size:  30px;
  }
  #MainData .select {
    font-size: 35px;
  }
  #quiz .totalSum > ul #liFirst {
    font-size: 50px;
    padding-left: 580px;
  }
  #quiz .totalSum > ul #liSecond {
    font-size: 90px;
  }
}
/*481~959*/
@media screen and (min-width: 481px) and (max-width: 959px) {
  #quiz h1 {
    font-size:  25px;
  }
  #MainData .select {
    font-size: 25px;
  }
  #quiz .totalSum > ul #liFirst {
    font-size: 40px;
    padding-left: 280px;
  }
  #quiz .totalSum > ul #liSecond {
    font-size: 60px;
  }
}
/*~480*/
@media screen and (max-width: 480px) {
  #quiz h1 {
    font-size:  25px;
  }
  #MainData .select {
    font-size: 20px;
  }
  #quiz .totalSum > ul #liFirst {
    font-size: 30px;
    padding-left: 240px;
  }
  #quiz .totalSum > ul #liSecond {
    font-size: 50px;
  }
}
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>