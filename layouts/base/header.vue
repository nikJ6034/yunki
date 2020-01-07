<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-row class="notMobile h-100 m-0">
            <div style="display:inline-block; width: 20%;">
              <b-img class="logo" src="~/static/images/정의당_높이조절.png" alt="Responsive image"></b-img>
            </div>
            <div style="display:inline-block; width: 80%;">
              <div class="title h-100" style="display:inline-block ">
                <!-- <div class="h-100" style="display:inline-block; font-size:15px; vertical-align: middle"></div> -->
                <div class="title1" style="display:inline-block;">대전 유성구을 국회의원</div><br/>
                <div class="title2" style="display:inline-block;">예비후보</div>
                <div class="title3" style="display:inline-block;">김윤기</div>
              </div>
            </div>
            <!-- <div style="margin-right:-20px; display:inline-block">
              <b-nav class="text-muted h-100">
                <div class="h-100" style="display:inline-block; font-size:15px; vertical-align: middle"></div>
                <b-nav-item class="text-muted" href="#">홈</b-nav-item>
                <b-nav-item class="text-muted" href="#">유튜브</b-nav-item>
                <b-nav-item class="text-muted" href="#">공약</b-nav-item>
              </b-nav>
            </div> -->
          </b-row>
          <div class="mobile">
            <b-navbar toggleable="lg">
              <div style="display:inline-block; width:100%">
                <b-img class="logo w-px-100" left src="~/static/images/정의당_높이조절.png" alt="Responsive image"></b-img>
                <div class="title w-px-200" style="">
                  <div style="display:inline-block; font-size:12px;">대전 유성구을 국회의원</div><br/>
                  <div class="mr-2" style="display:inline-block; font-size:10px;">예비후보</div><div style="display:inline-block; font-size:25px;">김윤기</div>
                </div>
              </div>
              <!-- <b-navbar-brand href="#">홈</b-navbar-brand> -->
              <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item class="text-muted" href="#">홈</b-nav-item>
                  <b-nav-item class="text-muted" href="#">유튜브</b-nav-item>
                  <b-nav-item class="text-muted" href="#">공약</b-nav-item>
                </b-navbar-nav>
              </b-collapse> -->
            </b-navbar>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.logo {display:inline-block;}
.h-px-100 {height:100px;}
.w-px-100 {width:100px;}

@media (max-width: 960px) {
  .notMobile {display:none}
  div.title {font-weight: bold; text-align: end;}
}
/*피씨 버전*/
@media (min-width: 960px) {
  .mobile {display:none}
  div.title {padding:10px;text-align: end; width:100%;}
  div.title .title1 {font-size: 20px; font-weight: bold;}
  div.title .title3 {font-size: 30px; font-weight: bold;}
  div.title .title2 {font-size: 15px}
  ul {display:inline-block;}
  ul li {display:inline-block;}
}
</style>
