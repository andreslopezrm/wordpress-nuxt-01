<script setup>


const counter = useState('counter', () => Math.round(Math.random() * 1000))
const { data } = await useAsyncData('count', () => $fetch('https://randomuser.me/api/'));
const first = data.value.results[0].name.first;
useMeta({
      title: "Acerca de :: Nuxt " + first,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
      bodyAttrs: {
        class: 'test'
      },
      link: [
        {
          rel:"stylesheet", href:"/global.css"
        }
      ]
})

</script>

<template>
  <div>
    <NuxtLink to="/">
            Home
          </NuxtLink>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
    <p>{{ first }}</p>
</div>
</template>