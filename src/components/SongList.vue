<template>
  <div class="song-lists">
    <p>推荐歌单</p>
    <ul>
      <li v-for="list in songLists">
        <img v-lazy="list.coverImgUrl" alt="">
        <span class="name">{{list.name}}</span>
        <span class="count">
          <icon-svg icon-class="#iconbofang2" class="icon"></icon-svg>
          {{list.subscribedCount | count}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
    import getResponse from "../common/api/recommend"

    export default {
        name: "SongList",
        data: function () {
            return {
                songLists: []
            }
        },
        filters: {
            count: function (value) {
                const length = value.toString().length;
                if (length > 8) {
                    return Math.round(value/1e+8).toString() + '亿'
                } else if(length > 4) {
                    return Math.round(value/1e+4).toString() + '万'
                } else {
                    return value.toString()
                }
            }
        },
        created() {
            getResponse('/top/playlist?limit=21&order=hot')
                .then(res => {
                    this.songLists = res.data.playlists
                })
        }
    }
</script>

<style scoped lang="scss">
  @import "../common/scss/variable";
    @import "../common/scss/mixins";

  .song-lists {
    margin: 20px auto;

    p {
      margin: 2px 20px;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-flow: row wrap;
      margin: 10px auto;
      justify-content: center;

      li {
        width: 27%;
        margin: 6px;
        border-radius: 5px;
        overflow: hidden;
        position: relative;

        img {
          width: 100%;
          background-color: #cccccc;
        }

        .name {
          font-size: $font-size-small-x;
          @include ellipsis(2);
          display: inline-block;
          margin-top: 7px;
        }
        .count {
          position: absolute;
          top: 5px;
          right: 6px;
          color: white;
          font-size: $font-size-small;
          background-color: rgba(0, 0, 0, .6);
          padding: 2px 3px;
          border-radius: 3px;
        }
      }
    }
  }
</style>
