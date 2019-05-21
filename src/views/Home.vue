<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HomeIcon />
    <ExampleCard msg="Hello, world!" />
  </div>
</template>

<script>
// @ is an alias to /src
const HelloWorld = () => import("../components/HelloWorld.vue");
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
