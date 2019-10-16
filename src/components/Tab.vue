<template>
  <div class="tabs">
    <router-link v-for="tab in tabs" :key="tab.key" :to="tab.route" class="tab"
                 :class="{active: active === tab.route}" tag="span">{{tab.title}}
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Tab",
        computed: {
            active() {
                return this.$route.path.slice(1)
            }
        },
        data: function () {
            return {
                tabs: [
                    {title: '推荐', key: 0, route: 'recommend'},
                    {title: '排行榜', key: 1, route: 'toplist'},
                    {title: '歌手', key: 2, route: 'singer'},
                ],
            }
        },
    }
</script>

<style scoped lang="scss">
  @import "../common/scss/variable";

  .tabs {
    margin: 10px 25px;
    .tab {
      font-size: $font-size-medium;
      display: inline-block;
      margin-right: 25px;
      transition: transform .1s ease-in;
    }
    .active {
      transform: scale(1.7) translate(1px, -3px);
    }

  }
</style>
