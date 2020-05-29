<template>
  <fragment>
    <div class="container"></div>
    <v-container class="fill-height mt-n10">
      <v-row align="center" justify="center">
        <v-col cols="12" lg="8">
          <v-card
            class="elevation-12 login-card round-corner matches-linear-gradient d-flex align-stretch"
            height="520px"
          >
            <!-- <v-row>
              <v-col>
                <v-sheet color="darkCardBg" width="25%" height="100%">
                  <div class="pt-12 accent--text text-center title">
                    登录账号<v-icon class="arrow-icon">$arrowDown</v-icon>
                  </div>
                </v-sheet>
              </v-col>
            </v-row> -->

            <v-sheet color="darkCardBg" width="25%">
              <div class="pt-12 accent--text text-center title">
                登录账号<v-icon class="arrow-icon">$arrowDown</v-icon>
              </div>
            </v-sheet>
            <v-container class="mt-4">
              <v-form>
                <v-row>
                  <v-col cols="3" offset="1">
                    <v-subheader class="title primary--text"
                      >用户名</v-subheader
                    >
                  </v-col>
                  <v-col cols="7">
                    <v-text-field
                      class="form-input primary--text"
                      color="accent"
                      rounded
                      flat
                      outlined
                      placeholder="请输入用户名称"
                      clearable
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3" offset="1">
                    <v-subheader class="title primary--text"
                      >用户密码</v-subheader
                    >
                  </v-col>
                  <v-col cols="7">
                    <v-text-field
                      class="form-input primary--text"
                      color="accent"
                      rounded
                      flat
                      outlined
                      placeholder="请输入密码"
                      suffix="忘记？"
                      clearable
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row class="bottom-text">
                  <v-col cols="3" class="title">
                    <div class="headline-1 primary--text">
                      第三平台登录：
                    </div>
                    <div class="primary--text mt-2">
                      <u> 顺体育</u><span class="ml-4"><u>顺TV直播</u></span>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="headline-1 primary--text text-center ml-12">
                      <v-btn
                        class="gradient-button button-radius-2x button-size"
                      >
                        立即登录
                      </v-btn>
                      <div class="text-outside title">
                        没有账号？立即注册
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  components: { Fragment },
};
</script>

<style style="scss" scoped>
/* .container {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/img/super6_web_loginbg.png");
} */

.arrow-icon {
  position: absolute;
  left: 17%;
  height: 35px;
  width: 35px;
  transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
}

.bottom-text {
  left: 30%;
  width: 100%;
  position: absolute;
  bottom: 10px;
}

.button-size {
  margin-left: 20px;
  width: 300px;
  height: 60px !important;
  font-size: 15px;
}

.text-outside {
  position: absolute;
  margin-left: 90px;
  margin-top: 80px;
}

.form-input >>> .v-input__slot {
  border: 0.5px solid #aabbd0;
}

.form-input >>> .v-text-field__slot input::placeholder {
  color: #aabbd0;
}
.form-input >>> .v-text-field__slot input {
  color: #aabbd0;
  size: 25px;
}
</style>
