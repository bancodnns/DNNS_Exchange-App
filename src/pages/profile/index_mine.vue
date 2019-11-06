<template>
  <view class="dnns_indexView">
    <view class="dnns_profileAvtr">
      <view class="top">
        <span class="left"><image src="../../static/icons/img_photo_default.png" class="user_avtr"></image><span class="usr_mail">123456789@qq.com</span></span>
        <image src="../../static/icons/icon_user_prohibit.png" class="user_prhbt"></image>
      </view>
      <view class="bottom">
        <span>使用DNNS支付交易手续费(25%折扣)</span>
        <span class="switch" @click="changeIndicator()">
          <image v-if="!switched" src="../../static/icons/icon_user_close.png" class="icon_switch"></image>
          <image v-else src="../../static/icons/icon_user_open.png" class="icon_switch"></image>
        </span>

        <!-- <switch :checked="indicatorDots" @change="changeIndicatorDots" /> -->
      </view>
    </view>

    <view class="profile_list mt-10">
      <view class="firstlist">
        <view class="list_item br-b">
          <span>
            <image src="../../static/icons/icon_user_rebate.png" class="icon_lft"></image>
            <span class="text">超级返利</span>
          </span>
          <span>
            <span class="ryt_txt clr_g">ID:124825</span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
        <view class="list_item">
          <span>
            <image src="../../static/icons/icon_user_rate.png" class="icon_lft"></image>
            <span class="text">费率</span>
          </span>
          <span>
            <span class="ryt_txt clr-b">VIP 0</span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
      </view>
    </view>

    <view class="profile_list mt-10">
      <view class="firstlist">
        <view class="list_item br-b">
          <span>
            <image src="../../static/icons/icon_user_store.png" class="icon_lft"></image>
            <span class="text">申请商家</span>
          </span>
          <span>
            <span class="ryt_txt clr_b">已申请</span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
        <view class="list_item br-b">
          <span>
            <image src="../../static/icons/icon_user_center.png" class="icon_lft"></image>
            <span class="text">商家中心</span>
          </span>
          <span>
            <span class="ryt_txt clr_g"></span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
        <view class="list_item">
          <span>
            <image src="../../static/icons/icon_user_bitcoin.png" class="icon_lft"></image>
            <span class="text">法币设置</span>
          </span>
          <span>
            <span class="ryt_txt clr-b"></span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
      </view>
    </view>

    <view class="profile_list mt-10">
      <view class="firstlist pb-10">
        <view class="list_item br-b">
          <span>
            <image src="../../static/icons/icon_user_status.png" class="icon_lft"></image>
            <span class="text">身份认证</span>
          </span>
          <span>
            <span class="ryt_txt clr_b"></span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
        <view class="list_item br-b">
          <span>
            <image src="../../static/icons/icon_user_help.png" class="icon_lft"></image>
            <span class="text">帮助中心</span>
          </span>
          <span>
            <span class="ryt_txt clr_g"></span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
        <view class="list_item br-b">
          <span>
            <image src="../../static/icons/icon_user_service.png" class="icon_lft"></image>
            <span class="text">客服热线</span>
          </span>
          <span>
            <span class="ryt_txt clr_g"></span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
        <view class="list_item br-b">
          <span>
            <image src="../../static/icons/icon_user_set.png" class="icon_lft"></image>
            <span class="text">设置</span>
          </span>
          <span>
            <span class="ryt_txt clr-b"></span>
            <image src="../../static/icons/icon_next.png" class="icon_ryt"></image>
          </span>
        </view>
      </view>
    </view>

  </view>
</template>
<script>
export default {
  data() {
    return {
      indicatorDots: true,
      switched: true,
    }
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots
    },
    changeIndicator(){
      this.switched = !this.switched
    }
  }
}
</script>
<style lang="scss" scoped>
.dnns_indexView{
  background:rgba(236,236,236,1);
  height: 100%;
  .dnns_profileAvtr{
    height:auto;
    background-color: #ffffff;
    padding: (80px/3) (50px/3) (51px/3) (60px/3);
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        align-items: center;
        .user_avtr{
          width: (120px/3);
          height: (120px/3);
        }
        .usr_mail{
          margin-left: (36px/3);
          font-size: 18px;
          font-weight:400;
          color:rgba(51,51,51,1);
          letter-spacing: 3px;
        }
      }
      .user_prhbt{
        width: (54px/3);
        height: (54px/3);
      }
    }
    .bottom{
      margin-top: (80px/3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        font-size:(42px/3);
        font-weight:400;
        color:rgba(51,51,51,1);
      }
      .switch{
        .icon_switch{
          width: (104px/3);
          height: (64px/3);
        }
      }
    }
  }
  .profile_list{
    &.mt-10{
      margin-top: (30px/3);
    }
    .firstlist{
      .list_item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: (170px/3);
        padding-left: (56px/3);
        padding-right: (50px/3);
        background: #ffffff;
        &.br-b{
          border-bottom: 1px solid rgba(236,236,236,0.7);
        }
        span{
          display: flex;
          align-items: center;
          .icon_lft{
            width: (50px/2.5);
            height: (50px/2.5);
          }
          .text{
            font-size:(48px/3);
            font-weight:400;
            color:rgba(51,51,51,1);
            margin-left:(50px/3);
          }
          .ryt_txt{
            font-size:(48px/3);
            font-weight:400;
            margin-right:(36px/3);
            &.clr-g{
              color:rgba(51,51,51,1);
            }
            &.clr-b{
              color:rgba(0,101,147,1); 
            }
          }
          .icon_ryt{
            width: (18px/2);
            height: (32px/2);
          }
        }
      }
      &.pb-10{
        padding-bottom: (30px/3);
      }
    }
  }
}
</style>
<style lang="css">
.bottom uni-switch .uni-switch-input{
  background-color: #00D705;
  border-color: #00D705;
  width: (104px/3);
  height: (64px/3);
}
</style>
  
</style>