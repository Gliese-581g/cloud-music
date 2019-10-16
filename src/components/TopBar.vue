<template>
  <div class="top-bar">
<icon-svg icon-class="#iconcelan" class="icon" />
  <span>Music</span>
    <icon-svg icon-class="#iconsousuo1" class="icon"></icon-svg>
  </div>
</template>

<script>
    export default {
        name: "TopBar",

    }
</script>

<style scoped lang="scss">
  .top-bar {
    /*background-color: #ed4040;*/
    /*color: white;*/
    display: flex;
    align-items: center;
    height: 35px;
    font-size: 22px;
    padding: 5px 15px;
    span, .icon {
      display: inline-block;
    }
    span {
      margin: 0 auto;
    }

  }
</style>
