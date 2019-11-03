<template>
    <div>
    <header id="navbar">
        <nuxt-link to="/"><img src="~assets/images/hijswerken-logo.svg" alt="logo" id="logo"></nuxt-link> 
        <nav>
            <ul>
                <li> <nuxt-link to="/about" class="nav-link">Over</nuxt-link></li>
                <li> <nuxt-link to="/services" class="nav-link">Services</nuxt-link> </li>
                <li> <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link> </li>
            </ul>
        </nav>
    </header>
    </div>
</template>

<script>

if (typeof window === 'undefined') {
  global.window = {}
}
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.width = "50px";
    document.getElementById('navbar').style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,0.3) , rgba(2, 2, 2, 0.15))";
  } else {
    //document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.width = "70px";
    document.getElementById('navbar').style.backgroundImage = "none";
  }
}

export default {

}
</script>

<style lang="scss">

    
</style>