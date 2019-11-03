<template>
  <section class="container">
        <div class="intro"> </div>
            <div class="intro__card">

      <h1>Contact</h1>
      <Form />
    <div>
           <div> {{ persons.fields.name }}  </div>
      </div>
            </div>
  </section>
</template>

<script>
  import Form from '@/components/Form.vue'
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

  export default {
    components: {
      Form
    },
      async asyncData({ env }) {
      try {
        let getPersons = await client.getEntries({
          content_type: 'person',
          order: '-sys.createdAt'
        });
        return {
          persons: getPersons.items[0]
        };
      } catch (e) {
        console.error(e)
      }
    },
  }
</script>

<style scoped lang="postcss">

</style>
