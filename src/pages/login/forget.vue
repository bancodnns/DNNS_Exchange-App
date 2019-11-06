<template>
  <view class="dnns_login">
    <view class="login_form">
			<view class="uni-form-item uni-column">
				<view class="title">邮箱</view>
				<input class="uni-input" focus placeholder="请输入邮箱" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">验证码</view>
				<view class="with-fun">
					<input class="uni-input" type="number" placeholder="请输入验证码" />
					<view class="uni-icon">
            <button class="mini-btn" type="default" size="mini">获取验证码</button>
          </view>
				</view>
			</view>
      <view class="uni-form-item uni-column">
				<view class="title">新密码</view>
				<input class="uni-input" focus placeholder="请输入新密码" />
			</view>
      <view class="uni-form-item uni-column">
				<view class="title">确认密码</view>
				<input class="uni-input" focus placeholder="请再次输入新密码" />
			</view>
      <view class="logon_btnSec">
        <button class="logon_btn" type="default">提交</button>
      </view>
		</view>
  </view>
</template>
<script>
export default {
  data(){
    return{
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
    changePassword: function() {
      this.showPassword = !this.showPassword;
    },
  }
}
</script>
<style lang="scss" scoped>
.dnns_login{
  margin: 0px (125px/3);
  .login_form{
    margin-top: 54px;
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
          top: 4px;
          right: 0px;
          bottom: 4px;
          .mini-btn{
            background: transparent;
            font-size: 14px;
            font-weight:300;
            color:rgba(0,101,147,1);
            padding: 0px (50px/3);
            &::after{
              border-left: 1px solid rgba(153,153,153,1);
              border-radius: 0px;
            }
          }
        }
      }
    }
    .logon_btnSec{
      padding-top: 28px;
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
