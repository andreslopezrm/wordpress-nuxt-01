<template>
    <div class="app">
      <h1 class="site-name">
        <NuxtLink to="/">Sitio con Nuxt(Vue) 😎👍</NuxtLink>
      </h1>

      <main class="single">
        <figure class="feature">
          <img
            :src="post['_embedded']['wp:featuredmedia'][0].source_url"
            alt=""
          />
        </figure>
        <h1 class="title">
          {{ post.title.rendered }}
        </h1>
        <div class="content" v-html="post.content.rendered"></div>
      </main>
  </div>
</template>
<script setup>
    import { removeTags } from '../../utils/clean'

    const route = useRoute();
    const slug = route.params.slug;

    const { data } = await useAsyncData('single', () => $fetch(`https://wordpressclasicouno.alrserver.online/wp-json/wp/v2/posts?_embed&slug=${slug}`));
    const post = data.value[0]
    const description = removeTags(post.excerpt.rendered);

    useMeta({
      title: post.title.rendered,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: description },
        { name: 'og:title', content: post.title.rendered },
        { name: 'og:type', content: 'article' },
        { name: 'og:image', content: post["_embedded"]["wp:featuredmedia"][0].source_url },
        { name: 'og:image:width', content: '1280' },
        { name: 'og:image:height', content: '720' },
        { name: 'og:description', content: description },
        { name: 'og:site_name', content: post.title.rendered },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: post.title.rendered },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: post["_embedded"]["wp:featuredmedia"][0].source_url },
      ],
      bodyAttrs: {
        class: 'single'
      }
})

</script>
