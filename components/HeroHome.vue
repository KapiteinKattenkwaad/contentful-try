<template>
    <div class="hero">
         <h2 class="title">
            Voor al uw kraanwerken
        </h2>
        <h1 class="subtitle">
            Hijswerken Stijn
        </h1>
        <div class="buttons-wrapper">
            <nuxt-link to="/contact">
                <button class="button header-button">
                    Gratis offerte
                </button>
            </nuxt-link>
            <nuxt-link to="#cards">
                <button class="button header-button2">
                    Meer info
                </button>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss">

$color-main-yellow: #fff82b;
html {

    font-family: 'Big Shoulders Text', cursive;
    font-family: 'McLaren', cursive;
}

.hero {
    font-family: 'Big Shoulders Text', cursive;
    //font-family: 'McLaren', cursive;
  background:  linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.25)
    ), url('https://images.unsplash.com/photo-1566454789522-7a55635b75a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80') no-repeat center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
  height: 90vh;
   display: flex;
  flex-direction: column;
  transform-origin: bottom left;
            transform: skew(0, -5deg);
  

  &::before {
     content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  filter: grayscale(100%);
  }
}

.subtitle, .title {
  color: $color-main-yellow;
    font-family: 'Big Shoulders Text', cursive;
}

.subtitle {
    font-size: 2,5em;
    margin: 0;
    padding-left: 1rem;
}

.title {
    font-size: 4em;
    margin: 0;
    margin-top: 14rem;
    padding-left: 1rem;
}

.buttons-wrapper {
    margin-left: 1em;
     transform-origin: bottom left;
            transform: skew(0, 5deg);
}


    
</style>