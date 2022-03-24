<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Header/>
  <HeaderMobile/>
  <router-view/>
</template>

<script>
import HeaderMobile from '@/components/HeaderMobile.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderMobile,
    Header
  }
}

</script>



