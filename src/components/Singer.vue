<template>

</template>

<script>
  import getResponse from "../common/api/recommend"
    export default {
        name: "Singer",
        created() {
            getResponse('/top/artists?offset=0&limit=30')
                .then(res => {
            console.log(res.data)
                })
        }
    }
</script>

<style scoped>

</style>
