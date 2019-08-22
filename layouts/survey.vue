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
// #header {
//   position: absolute;
//   z-index: 2;
//   width: 86.62%;
//   margin: 0 7.54% 1vh 4.04%;
//   height: 4.4vh;
//   padding-top: 5.3vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background: rgba(253, 253, 253, 0.01);
// }
#header {
  display: flex;
  width: 86.62%;
  margin: 0 7.54% 1vh 4.04%;
  height: 4.4vh;
  padding-top: 5.3vh;

  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // background: rgba(253, 253, 253, 0.01);
}
@media (max-width: 1000px) {
  #header {
    width: 100%;
    margin: unset;
    height: 60px;
    padding-top: unset;
  }
}
main {
  position: unset;
}
</style>
