<template>
  <div id="app">
    <div>
      <top-bar></top-bar>
      <tab></tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
    import TopBar from "./components/TopBar"
    import Tab from "./components/Tab"

    import axios from "axios"

    export default {
        name: 'app',
        components: {
            TopBar,
            Tab
        },
        data: function () {
            return {
                value: '',
            }
        },
        methods: {
            getValue() {
                axios.get('http://localhost:4000/artist/list?cat=1001')
                    .then(res => {
                        this.value = res.data;
                        console.log(res.data)
                    }).catch(error => console.log(error))
            },
        }

    }
</script>
<style lang="scss">
  @import "common/scss/style";
  /** {*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*}*/
</style>
