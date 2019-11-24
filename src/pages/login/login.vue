<template>
  <view class="dnns_login">
    <view class="logo_sec">
      <image src="../../static/login/dnns_logo.png" class="dnns_logo"></image>
    </view>
    <view class="login_form">
			<view class="uni-form-item uni-column">
				<view class="title">邮箱</view>
				<input class="uni-input" focus placeholder="请输入邮箱" v-model="userPhone" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">密码</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="请输入密码" :password="showPassword" v-model="userPwd" />
					<view class="uni-icon" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword">
            <image src="../../static/icons/icon_logon_close.png" v-if="showPassword" class="icon_eye"></image>
            <image src="../../static/icons/icon_logon_open.png" v-else class="icon_eye"></image>
          </view>
				</view>
			</view>
      <view class="logon_btnSec">
        <button class="logon_btn" @click="login()" type="default">登录</button>
      </view>
      <view class="logon_click">
        <view class="log_forgot" @click="forget()">忘记密码？</view>
        <view class="log_reg">还没有账户 <span @click="register()">去注册</span></view>
      </view>
		</view>
  </view>
</template>
<script>
export default {
  data(){
    return{
      userPhone:'',
			userPwd:'',
      showPassword: true,
    }
  },
  methods:{
    forget(){
      uni.navigateTo({
        url: 'forget'
      })
    },
    register(){
      uni.navigateTo({
        url: 'register'
      })
    },
    // login(){
    //   uni.switchTab({
    //     url: '../profile/index_mine'
    //   });
    // },
    login(){
      if (this.userPhone == '') {
        uni.showToast({ title: '请输入手机号',icon:'none'});
        return false;
      }
      if (this.userPwd == '') {
        uni.showToast({ title: '请输入密码',icon:'none'});
        return false;
      }
      uni.switchTab({
        url: '../profile/index_mine'
      });
    },
    changePassword: function() {
      this.showPassword = !this.showPassword;
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
      width: (268px/3);
      height: (309px/3);
      display: block;
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
      padding-top: 12px;
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
    .logon_click{
      display: flex;
      justify-content:center;
      align-items:center;
      flex-flow:column;
      margin-top: 25px;
      .log_forgot{
        font-size:14px;
        font-weight:300;
        color:rgba(0,101,147,1);
        line-height:24px;
      }
      .log_reg{
        font-size:14px;
        font-weight:300;
        color:rgba(102,102,102,1);
        line-height:24px;
        margin-top: 12px;
        span{
          color:rgba(0,101,147,1);
          margin-left: 6px;
        }
      }
    }
  }
  
}
</style>
