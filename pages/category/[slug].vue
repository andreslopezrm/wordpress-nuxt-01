<template>

      <div class="app">
        <h1 class="site-name">Sitio con Nuxt(Vue) 😎👍</h1>
        <h2>Categoria: {{ category.name }} </h2>
        <main class="news">
          <article class="card" v-for="post in posts" :key="post.id">
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

const route = useRoute();
const slug = route.params.slug;

const { data: categories } = await useAsyncData('categories', () => $fetch(`https://wordpressclasicouno.alrserver.online/wp-json/wp/v2/categories/?slug=${slug}`));
const category = categories[0];
const categoryId = category?.id;

const { data: posts } = await useAsyncData('posts   ', () => $fetch(`https://wordpressclasicouno.alrserver.online/wp-json/wp/v2/posts/?categories=${categoryId}&_embe`));

useMeta({
      title: "Category :: Nuxt ",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
      bodyAttrs: {
        class: 'home'
      }
})
</script>
