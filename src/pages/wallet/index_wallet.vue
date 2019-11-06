<template>
<view class="dnns_wallet">
  <view class="uni-padding-wrap uni-common-mt wallet_head">
    <uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
  </view>
  <view class="content dnns_cntnt">
    <view v-show="current === 0" class="dnns_show">
      <view class="dnns_btcView">
        <view class="btc_viewCard">
          <view class="top">
            <span class="left_show">
              <span class="text">资产估值（BTC）</span>
              <image src="../../static/icons/icon_logon_open.png" class="icon_eye"></image>
            </span>
          </view>
          <view class="mid">
            <span class="text">0.00000000 BTC</span>
          </view>
          <view class="btm">
            <span class="text">≈0.00000000 CNY</span>
          </view>
        </view>
        <view class="btc_arrowCard">
          <view class="view_item">
            <image src="../../static/icons/icon_optional_recharger.png" class="icon_view"></image>
            <text class="text">充值</text>
          </view>
          <view class="view_item">
            <image src="../../static/icons/icon_optional_withdraw.png" class="icon_view"></image>
            <text class="text">提现</text>
          </view>
          <view class="view_item">
            <image src="../../static/icons/icon_optional_transfer.png" class="icon_view"></image>
            <text class="text">划转</text>
          </view>
        </view>
      </view>
      <view class="dnns_btcList">
        <view class="head view_list">
          <view class="left">
            <image src="../../static/icons/icon_optional_conceal.png" class="icon_view"></image>
            <span class="text">隐藏小额资产(<0.00 BCT)</span>
          </view>
          <view class="right">
            <image src="../../static/icons/icon_optional_sort.png" class="icon_view"></image>
          </view>
        </view>
        <view class="br_b view_list" v-for="(item, index) in btcList" :key="index">
          <view class="left">
            <image :src="item.img" class="icon_currency"></image>
            <span class="title">{{item.title}}</span>
          </view>
          <view class="right">
            <span class="value">{{item.value}}</span>
          </view>
        </view>
      </view>
    </view>
    <view v-show="current === 1" class="dnns_show">
      <view class="dnns_btcView">
        <view class="btc_viewCard">
          <view class="top">
            <span class="left_show">
              <span class="text">法币总资产折合（BTC）</span>
              <image src="../../static/icons/icon_logon_open.png" class="icon_eye"></image>
            </span>
            <span class="right_show">
              <image src="../../static/icons/icon_optional_ensure.png" class="icon_dlr"></image>
              <span class="text">保证金 0 HT</span>
            </span>
          </view>
          <view class="mid">
            <span class="text">0.00000000 BTC</span>
          </view>
          <view class="btm">
            <span class="text">≈0.00000000 CNY</span>
          </view>
        </view>
        <view class="btc_arrowCard">
          <view class="view_item">
            <image src="../../static/icons/icon_optional_recharger.png" class="icon_view"></image>
            <text class="text">充值</text>
          </view>
          <view class="view_item">
            <image src="../../static/icons/icon_optional_withdraw.png" class="icon_view"></image>
            <text class="text">提现</text>
          </view>
          <view class="view_item">
            <image src="../../static/icons/icon_optional_transfer.png" class="icon_view"></image>
            <text class="text">划转</text>
          </view>
        </view>
      </view>
      <view class="dnns_btcList">
        <view class="head view_list">
          <view class="left">
            <image src="../../static/icons/icon_optional_show.png" class="icon_view"></image>
            <span class="text">显示所有资产</span>
          </view>
          <view class="right">
            <image src="../../static/icons/icon_optional_sort.png" class="icon_view"></image>
          </view>
        </view>
      </view>
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
      btcList: [
        {
        title: 'BNB',
        img: '../../static/icons/icon_currency_bnb.png',
        value: '0',
        },
        {
        title: 'BTC',
        img: '../../static/icons/icon_currency_btc.png',
        value: '0',
        },
        {
        title: 'ETH',
        img: '../../static/icons/icon_currency_eth.png',
        value: '0',
        },
        {
        title: 'QTUM',
        img: '../../static/icons/icon_currency_qtum.png',
        value: '0',
        },
        {
        title: 'LTC',
        img: '../../static/icons/icon_currency_ltc.png',
        value: '0',
        }
      ],
      items: ['币币账户', '法币账户'],
      activeColor: '#333333',
			styleType: 'text',
      current: 0,
      colorIndex: 0,
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
    }
  }
}
</script>
<style lang="scss" scoped>
.dnns_wallet{
  background: #f8f8f8;
  .wallet_head{
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
      background: #f8f8f8;
      .dnns_btcView{
        background: #ffffff;
        padding: (30px/3) (50px/3) (70px/3);
        .btc_viewCard{
          // height:(330px/3);
          background:rgba(255,255,255,1);
          box-shadow:0px 1px 2px 1px rgba(1,6,55,0.08);
          border-radius:2px;
          padding: (59px/3) (65px/3);
          margin-bottom: (80px/3);
          .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            span.left_show{
              .text{
                font-size:(42px/3);
                font-weight:400;
                color:rgba(153,153,153,1);
                margin-right: 4px;
                text-align: left;
              }
              .icon_eye{
                width: (42px/3);
                height: (31px/3);
              }
            }
            span.right_show{
              display: flex;
              align-items: center;
              justify-content: flex-end;
              .icon_dlr{
                width:(37px/3);
                height:(42px/3);
              }
              .text{
                font-size:(36px/3);
                font-weight:400;
                color:rgba(153,153,153,1);
                margin-left: 4px;
                text-align: right;
              }
            }
          }
          .mid{
            .text{
              font-size:(80px/3);
              font-weight:400;
              color:rgba(51,51,51,1);
              letter-spacing: 1px;
              text-align: left;
              margin-top: (50px/3);
            }
          }
          .btm{
            .text{
              font-size:(48px/3);
              font-weight:400;
              color:rgba(102,102,102,1);
              text-align: left;
            }
          }
        }
        .btc_arrowCard{
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-flow: row wrap;
          .view_item{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            .icon_view{
              width:(56px/2.5);
              height:(75px/3);
            }
            .text{
              font-size:(42px/3);
              font-weight:300;
              color:rgba(153,153,153,1);
              margin-top: (50px/3);
            }
            &:nth-child(3){
              .icon_view{
                height: (70px/3);
              }
            }
          }
        }
      }
      .dnns_btcList{
        margin-top: (30px/3);
        border-bottom: 1px solid rgba(236,236,236,1);
        .view_list{
          background: #ffffff;
          padding-left: (56px/3);
          padding-right: (50px/3);
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: (160px/3);
          position: relative;
          &.head{
            border-bottom: 1px solid rgba(236,236,236,1);
          }
          &.br_b{
            &::after{
              content: "";
              width: 95%;
              height: 1px;
              position: absolute;
              bottom: 0px;
              left: 2.5%;
              background: rgba(236,236,236,1);
            }
            &:nth-child(6){
              &::after{
                display: none;
              }
            }
          }
          .left{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .icon_view{
              width: (69px/3);
              height: (52px/2);
            }
            .icon_currency{
              &:nth-child(1){
                width: (64px/2);
                height: (64px/2);
              }
              &:nth-child(2){
                width: (58px/2);
                height: (58px/2);
              }
              &:nth-child(3){
                width: (40px/2);
                height: (64px/2);
              }
              &:nth-child(4){
                width: (78px/2);
                height: (79px/2);
              }
              &:nth-child(5){
                width: (58px/2);
                height: (58px/2);
              }
            }
            .text{
              margin-left: (33px/3);
              font-size:(48px/3);
              font-weight:400;
              color:rgba(0,101,147,1);
            }
            .title{
              margin-left: (33px/3);
              font-size:(56px/3);
              font-weight:400;
              color:rgba(51,51,51,1);
            }
          }
          .right{
            display: flex;
            align-items: center;
            .icon_view{
              width:(71px/3);
              height:(48px/2);
            }
            .value{
              font-size:(56px/3);
              font-weight:400;
              color:rgba(51,51,51,1);
            }
          }
        }
      }
    }
  }
}
</style>