<template>
  <div>
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="postcss">
@import '../assets/global.pcss';

</style>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

export default {
  components : {
    Nav,
    Footer
  }
}
</script>
