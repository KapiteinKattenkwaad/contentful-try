<template>
<div>
    <HeroHome></HeroHome>

  <section class="container">

     <!-- <Cards /> -->

 <!--  <div v-for="post in posts" v-bind:key="post.id">
      <h2> {{ post.fields.title }} </h2>
      <h3> {{ post.fields.slug }} </h3>
      <h3> {{ post.fields.content }} </h3>
    </div>
-->

   <div class="row" id="cards" v-for="post in posts" v-bind:key="post.id">
     <div class="column">
      <div class="card">
        <img src="" alt="" class="card-image">
          <h3 class="card-title">{{ post.fields.title }}</h3>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde quod minima. Quibusdam
          sunt quis harum repellat id provident temporibus!</p>
        <nuxt-link to="/services">
          <button class="button header-button2 card-button">Meer weten?</button>
        </nuxt-link>
      </div>
    </div>
  </div>
   

  </section>
  </div>
</template>

<script>
  import Cards from '~/components/Cards.vue'
  import HeroHome from '~/components/HeroHome.vue'
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

  export default {
     data: function () {
      return {
        image: "posts.fields.file.url"
      };
    },
    transition: "default",
    components: {
      Cards,
      HeroHome
    },
      async asyncData({
      env
    }) {
      try {
        let getPosts = await client.getEntries({
          content_type: 'blogPost',
          order: '-sys.createdAt'
        });
        return {
          posts: getPosts.items
        };
      } catch (e) {
        console.error(e)
      }
    },
  }
</script>

<style scoped lang="scss">

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 900ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}



//cards

$color-main-black: #242424;

  .card-title,
  .card-text,
  .card-button {
    margin-top: 1.2rem;
    padding: 0 1rem 1rem 1rem;
  }

  .card-button {
    padding-top: 1rem;
    margin-top: 1rem;
    color: $color-main-black;
  }

  .card-image {
    width: 100%;
    border-radius: 10px;
  }

  .column:nth-child(2) {
    margin-top: -15px;
  }


  /* Float four columns side by side */
  .column {
    float: left;
    width: 33%;
    padding: 0;
  }

  /* Remove extra left and right margins, due to padding in columns */
  .row {
    margin: 0 -5px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Style the counter cards */
  .card {
    margin: 8rem 1rem 3rem 2rem;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    /* this adds the "card" effect */
    padding: 0rem 0rem 2rem 0rem;
    text-align: center;
    background-color: #f1f1f1;

    &:hover {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.20);
      transform: translateY(-5px);
      transition: all .3s ease-in;
    }
  }

  /* Responsive columns - one column layout (vertical) on small screens */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }

</style>
