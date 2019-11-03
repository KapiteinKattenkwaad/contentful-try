<template>
  <section class="container">
    <div class="intro"> </div>
    <div class="intro__card">
      <div>
        <h1> {{ services.fields.titel }} </h1>
        <div> {{ services.fields.uitleg }} </div>
        <img :src="services.fields.image.fields.file.url" :alt="services.fields.titel" v-if="services.fields.image" />
      </div>
    </div>
  </section>
</template>

<script>
  import {
    createClient
  } from '~/plugins/contentful.js'
  const client = createClient()

  export default {
    data: function () {
      return {
        title: "Vuejs",
        image: "services.fields.file.url"
      };
    },

    async asyncData({
      env
    }) {
      try {
        let getServices = await client.getEntries({
          content_type: 'services',
          order: '-sys.createdAt'
        });
        return {
          services: getServices.items[0]
        };
      } catch (e) {
        console.error(e)
      }
    },
  }
</script>

<style scoped lang="postcss">
     .page-enter-active {
      animation: acrossIn .40s ease-out both;
    } 
    .page-leave-active {
      animation: acrossOut .60s ease-in both;
    } 
    @keyframes acrossIn {
      0% {
        transform: translate3d(-100%, 0, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes acrossOut {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(100%, 0, 0);
      }
    }
</style>