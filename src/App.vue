<template>
  <div id="app">
    <HelloWorld />
    <HomeIcon />
    <ExampleCard msg="Hello, world!" />
  </div>
</template>

<script>
const HelloWorld = () => import("./components/HelloWorld.vue");
const HomeIcon = () =>
  import("vuetify-lib-test-lib/packages/vuetify-lib-test-lib").then(
    lib => lib.HomeIcon
  );
const ExampleCard = () =>
  import("vuetify-lib-test-lib/packages/vuetify-lib-test-lib").then(
    lib => lib.ExampleCard
  );

export default {
  name: "app",
  components: {
    HelloWorld,
    HomeIcon,
    ExampleCard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
