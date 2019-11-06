<template>
  <view class="dnns_login">
    <view class="logo_sec">
      <image src="../../static/login/dnns_logo.png" class="dnns_logo"></image>
    </view>
    <view class="login_form">
			<view class="uni-form-item uni-column">
				<view class="title">邮箱</view>
				<input class="uni-input" focus placeholder="请输入邮箱" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">密码</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="请输入密码" :password="showPassword"/>
					<view class="uni-icon" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword">
            <image src="../../static/icons/icon_logon_close.png" v-if="showPassword" class="icon_eye"></image>
            <image src="../../static/icons/icon_logon_open.png" v-else class="icon_eye"></image>
          </view>
				</view>
			</view>
      <view class="uni-form-item uni-column">
				<view class="title">推荐人ID (选填）</view>
				<input class="uni-input" focus placeholder="请输入推荐人ID" />
			</view>
      <view class="register_check">
        <label class="check_label">
          <span class="checkImg" @click="selectedCheck()">
            <image v-if="!selected" src="../../static/icons/icon_logon_select.png" class="icon_select"></image>
            <image v-else src="../../static/icons/icon_logon_selected.png" class="icon_select"></image>
          </span>
          <span>我同意Dnns交易所的</span>
          <span class="lopgin_span" @click="login()">服务协议</span>
        </label>
      </view>
      <view class="logon_btnSec">
        <button class="logon_btn" @click="register_code()" type="default">登录</button>
      </view>
      <view class="logon_click">
        <view class="log_reg">已有账户 <span @click="login()">去登录</span></view>
      </view>
		</view>
  </view>
</template>
<script>
export default {
  data(){
    return{
      showPassword: true,
      selected: true,
    }
  },
  methods:{
    login(){
      uni.navigateTo({
        url: 'login'
      })
    },
    register_code(){
      uni.navigateTo({
        url: 'register_code'
      })
    },
    changePassword: function() {
      this.showPassword = !this.showPassword;
    },
    selectedCheck(){
      this.selected = !this.selected;
    }
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
      &:nth-child(3){
        .uni-input{
          margin-bottom: 16px;
        }
      }
    }
    .register_check{
      .check_label{
        font-weight:300;
        color:rgba(102,102,102,1);
        font-size: 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .checkImg{
          display: flex;
          .icon_select{
            width: 12px;
            height: 12px;
            margin-right: 6px;
          }
        }
        span.lopgin_span{
          color:rgba(0,101,147,1);
          margin-left: 6px;
        }
      }
    }
    .logon_btnSec{
      padding-top: 24px;
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
      margin-top: 16px;
      .log_reg{
        font-size:14px;
        font-weight:300;
        color:rgba(102,102,102,1);
        span{
          color:rgba(0,101,147,1);
          margin-left: 6px;
        }
      }
    }
  }
  
}
</style>
