<template>
<view class="dnns_mining">
  <view class="uni-padding-wrap uni-common-mt mining_head">
    <uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
  </view>
  <view class="content dnns_cntnt">
    <view v-show="current === 0" class="dnns_show">
    </view>
    <view v-show="current === 1" class="dnns_show">
      <view class="view_tab2">
        <view class="tab_left">
          <uni-segmented-control :current="current" :values="itemsList" :style-type="styleType" :active-color="activeColor" />
        </view>
        <view class="tab_right">
          <view class="icon">
            <image src="../../static/icons/icon_trade_select.png" class="icon_trade"></image>
            <span class="text">筛选</span>
          </view>
          <view class="icon">
            <image src="../../static/icons/icon_trade_order.png" class="icon_trade"></image>
            <span class="text">订单</span>
          </view>
        </view>
      </view>
      <scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
        <view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
          <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
        </view>
      </scroll-view>
      <view class="line-h"></view>
      <swiper :current="tabIndex" class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange">
        <swiper-item class="swiper-item" v-for="(tab,index1) in newsList" :key="index1">
        </swiper-item>
      </swiper>
    </view>
  </view>
</view>
</template>
<script>
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
export default {
  components: {
    uniSegmentedControl
  },
  data() {
    return {
      items: ['币币交易', '法币交易'],
      itemsList: ['我要买', '我要卖'],
      activeColor: '#333333',
			styleType: 'text',
      current: 0,
      colorIndex: 0,

      newsList: [],
      cacheTab: [],
      tabIndex: 0,
      tabBars: [
        {
          name: 'BTC',
          id: 'guanzhu'
      }, {
          name: 'ETH',
          id: 'tuijian'
      }, {
          name: 'USDT',
          id: 'tiyu'
      }, {
          name: 'EOS',
          id: 'redian'
      }, {
          name: 'XRP',
          id: 'caijing'
      }, {
          name: 'LTC',
          id: 'yule'
      }],
      scrollInto: "",
      showTips: false,
      navigateFlag: false,
      pulling: false,
      refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
    }
  },
  methods: {
    onClickItem(index) {
      if (this.current !== index) {
        this.current = index
      }
    },
    styleChange(evt) {
      if (this.styleType !== evt.target.value) {
        this.styleType = evt.target.value
      }
    },
    colorChange(evt) {
      if (this.styleType !== evt.target.value) {
        this.activeColor = evt.target.value
      }
    },
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    },
    ontabchange(e) {
      let index = e.target.current || e.detail.current;
      this.switchTab(index);
    },
  }
}
</script>
<style lang="scss" scoped>
.dnns_mining{
  background: #f8f8f8;
  .mining_head{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: (132px/3);
    text-align: center;
    background: #ffffff;
    .text{
      .segmented-control-item{
        font-size:(48px/3);
        font-weight:400;
        color:rgba(153,153,153,1);
        &.text{
          color:rgba(153,153,153,1);
        }
        &.active{
          color: rgba(51,51,51,1);
          font-weight:600;
        }
      }
    }
  }
  .dnns_cntnt{
    .dnns_show{
      .view_tab2{
        height: (170px/3);
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tab_left{
          width: 50%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .segmented-control{
            width: 100%;
            .segmented-control-item.text.active{
              border-bottom: 0;
            }
          }
        }
        .tab_right{
          width: 50%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .icon{
            display: flex;
            flex-flow: column;
            margin-right: 12px;
            .icon_trade{
              width: (55px/3);
              height: (54px/3);
            }
            .text{
              font-size:(36px/3);
              font-weight:400;
              color:rgba(153,153,153,1);
              margin-top: 2px;
            }
          }
        }
      }
      .scroll-h {
        width: 750upx;
        height: 80upx;
        flex-direction: row;
        /* #ifndef APP-PLUS */
        white-space: nowrap;
        background: #ffffff;
        /* #endif */
        /* flex-wrap: nowrap; */
        /* border-color: #cccccc;
        border-bottom-style: solid;
        border-bottom-width: 1px; */
        .uni-tab-item {
          /* #ifndef APP-PLUS */
          display: inline-block;
          /* #endif */
          flex-wrap: nowrap;
          padding-left: 34upx;
          padding-right: 34upx;
          .uni-tab-item-title {
            color: #555;
            font-size: 30upx;
            height: 80upx;
            line-height: 80upx;
            flex-wrap: nowrap;
            /* #ifndef APP-PLUS */
            white-space: nowrap;
            /* #endif */
            &.uni-tab-item-title-active {
              color: #007AFF;
            }
          }
        }
      }
      .line-h {
        height: 1upx;
        background-color: #cccccc;
      }
      .swiper-box {
        flex: 1;
        .swiper-item {
          flex: 1;
          flex-direction: row;
        }
      }
    }
  }
}
</style>