<template>

      <div class="app">
        <h1 class="site-name">Sitio con Nuxt(Vue) 😎👍</h1>

        <main class="news">
          <article class="card" v-for="post in data" :key="post.id">
            <figure class="feature">
              <NuxtLink :to="'/single/' + post.slug">
                <img
                  :src="post['_embedded']['wp:featuredmedia'][0].source_url"
                  alt=""
                />
              </NuxtLink>
            </figure>
            <h4 class="title">
              <NuxtLink :to="'/single/' + post.slug">{{
                post.title.rendered
              }}</NuxtLink>
            </h4>
            <time class="created">{{ post.date }}</time>
          </article>
        </main>
    </div>
</template>

<script setup>

const { data } = await useAsyncData('home', () => $fetch('https://wordpressclasicouno.alrserver.online/wp-json/wp/v2/posts?per_page=9&_embed'));

useMeta({
      title: "Inicio :: Nuxt ",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
      bodyAttrs: {
        class: 'home'
      }
})
</script>
