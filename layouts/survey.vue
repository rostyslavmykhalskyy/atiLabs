<template>
  <div>
    <headerTop @logined="onLogin" @clickHome="update++" />
    <nuxt />
  </div>
</template>

<script>
import headerTop from "~/components/header";

export default {
  components: {
    headerTop
  },
  data() {
    return {
      user: "",
      update: 0,
      path: ""
    };
  },
  methods: {
    onLogin(data) {
      this.user = data;
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  width: 86.62%;
  margin: 0 7.54% 7.407407407407407vh 4.04%;
  height: 4.4vh;
  padding-top: 5.3vh;
  position: absolute;
  top: 0;
}
main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
}

@media (max-width: 1000px) {
  #header {
    width: 100%;
    margin: unset;
    height: 60px;
    padding-top: unset;
    position: unset;
  }
}
main {
  position: unset;
}
</style>
