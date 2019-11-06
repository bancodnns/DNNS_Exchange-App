<template>
  <view class="dnns_login">
    <view class="logo_sec">
      <image src="../../static/login/img_state_send.png" class="dnns_logo"></image>
    </view>
    <view class="reg_text">
      <text class="title">验证您的电子邮件</text>
      <text class="title_info">我们向您的电子邮箱发送了一个验证信息，请输入 验证码</text>
    </view>
    <view class="reg_sendAgain">
      <span>重新发送邮件<image src="../../static/icons/icon_logon_next.png" class="icon_send"></image></span>
    </view>
    <view class="uni-flex uni-row code_sec">
      <view class="flex-item">
        <input type="number" maxlength="1" class="uni-input" focus />
      </view>
      <view class="flex-item">
        <input type="number" maxlength="1" class="uni-input" focus />
      </view>
      <view class="flex-item">
        <input type="number" maxlength="1" class="uni-input" focus />
      </view>
      <view class="flex-item">
        <input type="number" maxlength="1" class="uni-input" focus />
      </view>
      <view class="flex-item">
        <input type="number" maxlength="1" class="uni-input" focus />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.dnns_login{
  margin: 0px (125px/3);
  .logo_sec{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    margin: (120px/3) auto;
    .dnns_logo{
      // width: (613px/3);
      height: (344px/3);
      display: block;
		}
  }
  .reg_text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    .title{
      font-size:18px;
      font-weight:400;
      color:rgba(51,51,51,1);
    }
    .title_info{
      text-align: center;
      font-size: 14px;
      font-weight:300;
      color:rgba(153,153,153,1);
      margin-top: (120px/3);
    }
  }
  .reg_sendAgain{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: (80px/3);
    span{
      font-size:14px;
      color:rgba(0,101,147,1);
    }
    .icon_send{
      width: 12px;
      height: 12px;
      margin-right: 6px;
    }
  }
  .code_sec{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: (120px/3);
    .flex-item{
      display: flex;
      justify-content: center;
      margin-right: 6px;
      &:nth-child(5){
        margin-right: 0px;
      }
      .uni-input{
        height:40px;
        width: 40px;
        border:1px solid rgba(153,153,153,0.7);
        border-radius:2px;
        text-align: center;
        font-size:16px;
        font-weight:600;
        color:rgba(153,153,153,1);
      }
    }
  }
}
</style>
