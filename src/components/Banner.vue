<template>
  <div>
    <Swiper v-if="banners.length > 0" class="slide">
      <Slide v-for="(banner,index) in banners" :key="index">
        <div class="banner">
        <img :src="banner.imageUrl">
          <span :style="{ backgroundColor: banner.titleColor}">{{banner.typeTitle}}</span>
        </div>
      </Slide>
    </Swiper>
  </div>
</template>

<script>
  import getResponse from "../common/api/recommend"
    import {Swiper, Slide} from 'vue-swiper-component';

    export default {
        name: "Banner",
        components: {
            Swiper,
            Slide
        },
        data: function () {
            return {
                banners: []
            }
        },
        methods: {
            get() {
                getResponse('/banner').then(res => {
                    this.banners = res.data.banners;
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        created() {
            this.get();
        }

    }
</script>

<style lang="scss">
  @import "../common/scss/variable";
  .slide {
    position: relative;
    overflow: hidden;
    width: 90%;
    border-radius: 8px;
    margin: 20px auto;
    .banner {
      position: relative;
      span {
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: 4px;
        padding: 5px 7px;
        margin-bottom: 2px;
        font-size: $font-size-small-x;
        color: white;
      }
    }
    img {
      width: 100%;
      display: inline-block;
    }

    .wh_indicator_item {
      display: inline-block;
      width: 8px;
      height: 8px;
      margin: 1px 3px;
      cursor: pointer;
      border-radius: 100%;
      background: #aaa;
    }

    .wh_show_bgcolor {
      background: $color-background;
    }

  }
</style>
