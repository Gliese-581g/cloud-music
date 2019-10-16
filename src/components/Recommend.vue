<template>
    <div>
        <banner></banner>
      <song-list></song-list>
    </div>
</template>

<script>
  import Banner from "./Banner"
  import SongList from "./SongList"

    export default {
        name: "Recommend",
        components: {
            Banner,
            SongList
        }
    }
</script>

<style scoped lang="scss">

</style>
