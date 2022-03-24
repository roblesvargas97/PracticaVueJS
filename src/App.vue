<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <HeaderMobile/>
  <router-view/>
</template>

<script>
import HeaderMobile from '@/components/HeaderMobile.vue'

export default {
  name: 'App',
  components: {
    HeaderMobile
  }
}

</script>



