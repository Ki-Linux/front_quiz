<template>
  <div id="app">
   <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    createTitleDesc: function(routeInstance){
      if(routeInstance.meta.title) {
        let setTitle = routeInstance.meta.title;

        document.title = setTitle;
      } else {
        document.title = 'いろいろ3択クイズ'
      }

      if(routeInstance.meta.desc) {
        let setDesc = routeInstance.meta.desc;
        document.querySelector("meta[name='description']").setAttribute('content', setDesc)
      } else {
        document.querySelector("meta[name='description']").setAttribute('content', 'description is not set')
      }
    }
  },

  mounted: function() {
    let routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },

  watch: {
    '$route' (routeInstance, from) {
      this.createTitleDesc(routeInstance);
    }
  }

}
</script>

<style script lang="scss"> 
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

button {
  -webkit-appearance: none;
}

input[type="button"] {
  -webkit-appearance: none;
} 

/*#quiz(beginner.vue, intermediate.vue, advanced.vue)*/ 
#quiz {
  padding-top: 40px;

  .totalSum ul {
    #liFirst {
      color: red;
      transform: rotate( 15deg);
    }

    #liSecond {
      color:rgb(0, 36, 77);
      margin-top: 50px;
      span {
        font-size: 30px;
      }
    }
  }

}

.back {
  font-size: 20px;

  button {
    display: inline-block;
    background-color: rgba(234, 241, 234, 0.678);
    margin-bottom: 150px;
  }

}

/*MainDat.vue*/
/*全体*/
#MainData {
  margin: 0 40px;

  h1 {
    margin: 5px 0 35px;
  }

  form {
    font-size: 30px;
  }

  .toNext input[type="button"] {
    -webkit-appearance: none;
    color:rgb(71, 71, 71);
    background-color: rgb(226, 230, 247);
    margin: 20px 0;
  }

  .select {
    margin: 25px 0;
    input[type="button"] {
      -webkit-appearance: none;
      padding: 5px 10px;
      background-color: rgb(246, 250, 245);
    }
  }

  .answer {
    color: red;
    font-size: 40px;
  }
}

$breakpoint: (
  pc: 'screen and (min-width: 960px)',
  tb_max: 'screen and (max-width: 959px)',
  tb_min: '(min-width: 481px)',
  sp: 'screen and (max-width: 480px)'
);

@mixin pc {
  @media #{map-get($breakpoint, pc)} {
    @content;
  }
}

@mixin tb_max {
  @media #{map-get($breakpoint, tb_max)} and #{map-get($breakpoint, tb_min)} {
    @content;
  }
}

@mixin sp {
  @media #{map-get($breakpoint, sp)} {
    @content;
  }
}

$h1_size: 25px;
$select_size: 5px;
$first_size: 30px;
/*960~*/
@include pc {
  #quiz h1 {
    font-size: $h1_size + 5;
  }

  #MainData .select {
    font-size: $select_size * 7;
  }

  #quiz .totalSum {
    ul {

      #liFirst {
        font-size: $first_size + 20;
        padding-left: 580px;
      }

      #liSecond {
        font-size: 90px;
      }

    }
  }
}
/*481~959*/
@include tb_max {
  #quiz h1 {
    font-size: $h1_size;
  }

  #MainData .select {
    font-size: $select_size * 5;
  }

  #quiz .totalSum {
    ul {
      #liFirst {
        font-size: $first_size + 10;
        padding-left: 280px;
      }

      #liSecond {
        font-size: 60px;
      }
    }
  }
}
/*~480*/
@include sp {
  #quiz h1 {
    font-size: $h1_size;
  }

  #MainData .select {
    font-size: $select_size * 4;
  }

  #quiz .totalSum {
    ul {
      #liFirst {
        font-size: $first_size;
        padding-left: 240px;
      }

      #liSecond {
        font-size: 50px;
      }
    }
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