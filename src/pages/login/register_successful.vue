<template>
  <view class="dnns_login">
    <view class="logo_sec">
      <image src="../../static/login/img_state_success.png" class="dnns_logo"></image>
    </view>
    <view class="reg_text">
      <text class="title">恭喜您，注册成功</text>
      <text class="title_info">
        为了您更安全的进行交易，请设置资金密码，注不得与登录密码相同
      </text>
    </view>
    <view class="login_form">
			<view class="uni-form-item uni-column">
				<view class="title">资金密码</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="请设置资金密码" :password="showPasswordOne"/>
					<view class="uni-icon" :class="[!showPasswordOne ? 'uni-active' : '']" @click="password">
            <image src="../../static/icons/icon_logon_close.png" v-if="showPasswordOne" class="icon_eye"></image>
            <image src="../../static/icons/icon_logon_open.png" v-else class="icon_eye"></image>
          </view>
				</view>
			</view>
      <view class="uni-form-item uni-column">
				<view class="title">确认密码</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="请再次输入密码" :password="showPasswordTwo"/>
					<view class="uni-icon" :class="[!showPasswordTwo ? 'uni-active' : '']" @click="confirmPassword">
            <image src="../../static/icons/icon_logon_close.png" v-if="showPasswordTwo" class="icon_eye"></image>
            <image src="../../static/icons/icon_logon_open.png" v-else class="icon_eye"></image>
          </view>
				</view>
			</view>
      <view class="logon_btnSec">
        <button class="logon_btn" type="default">确认</button>
      </view>
		</view>
  </view>
</template>
<script>
export default {
  data(){
    return{
      showPasswordOne: true,
      showPasswordTwo: true,
    }
  },
  methods:{
    password: function() {
      this.showPasswordOne = !this.showPasswordOne;
    },
    confirmPassword: function() {
      this.showPasswordTwo = !this.showPasswordTwo;
    },
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
      margin-top: (90px/3);
      margin-bottom: (90px/3);
    }
  }
    .login_form{
    .uni-form-item{
      .title{
        font-size:14px;
        font-weight:300;
        color:rgba(102,102,102,1);
      }
      .uni-input{
        height:40px;
        border:1px solid rgba(153,153,153,0.7);
        border-radius:2px;
        margin-top: 8px;
        margin-bottom: 22px;
        font-size:16px;
        font-weight:300;
        color:rgba(153,153,153,1);
        padding: 0px 12px;
      }
      .with-fun{
        position: relative;
        .uni-icon{
          position: absolute;
          top: 8px;
          right: 12px;
          .icon_eye{
            width: (51px/3);
            height: (39px/3);
          }
        }
      }
    }
    .logon_btnSec{
      padding-top: (90px/3);
      .logon_btn{
        border:1px solid rgba(0,101,147,0.8);
        border-radius:2px;
        background: transparent;
        height: 42px;
        font-size:16px;
        font-weight:300;
        color:rgba(0,101,147,1);
        &::after{
          border: 0px;
        }
      }
    }
  }
}
</style>
