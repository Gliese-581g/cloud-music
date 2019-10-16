<template>
  <div v-if="topLists">
    <h3>{{topLists.official.title}}</h3>
    <ul class="official">
      <li v-for="(list, index) in topLists.official.lists" :key="index" class="official-list">
        <div>
          <img :src="list.coverImgUrl" alt="">
          <span>{{list.updateFrequency}}</span>
        </div>
        <ol>
          <li v-for="(item, index) in list.tracks" class="song-list">
            {{item | merge}}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
    import getResponse from "../common/api/recommend"

    export default {
        name: "TopList",
        data: function () {
            return {
                topLists: {
                    official: {
                        title: '官方榜',
                        lists: []
                    },
                    recommend: {
                        title: '推荐榜',
                        lists: []
                    },
                    global: {
                        title: '全球榜',
                        lists: []
                    },
                    more: {
                        title: '更多榜单',
                        lists: []
                    },
                }
            }
        },
        filters: {
            merge(value) {
                return value.first + ' - ' + value.second;
            }
        },
        created() {
            getResponse('/toplist/detail').then(res => {
                res.data.list.forEach((item, index) => {
                    if (index < 4) {
                        this.topLists.official.lists.push(item)
                    }
                })
                console.log(res.data)
            })
        }
    }
</script>

<style scoped lang="scss">
  @import "../common/scss/variable";
  @import "../common/scss/mixins";

  h3 {
    padding-left: 10px;
  }

  .official {
    margin: 5px 10px;

    .official-list {

      display: flex;
      flex-flow: row;
      margin-bottom: 10px;


      div {
        width: 100px;
        position: relative;

        span {
          position: absolute;
          bottom: 8px;
          left: 6px;
          color: white;
          font-size: $font-size-small;
        }

        img {
          width: 100px;
          border-radius: 5px;
        }
      }

      ol {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        margin-left: 20px;
        list-style-type: decimal;
      }

      .song-list {
        @include ellipsis(1);
        font-size: $font-size-small-x;
        /*display: -webkit-box;*/
        /*-webkit-box-orient: vertical;*/
        /*-webkit-line-clamp: 1; // 限制快级元素的文本行数*/
        /*overflow: hidden;*/
      }
    }
  }
</style>
