<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-row class="notMobile h-100 m-0">
            <b-img class="logo" src="~/static/images/정의당_높이조절.png" style="margin:20px" alt="Responsive image" />
            <b-img style="height:100px; float:right" src="~/static/images/홈페이지_200_100.png"/>
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
              <div style="display:inline-block;width:100%">
                <b-img class="logo" src="~/static/images/정의당_높이조절.png" alt="Responsive image" />
                <b-img class="kimyunki" style="float:right" src="~/static/images/홈페이지_200_100.png"/>
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
.notMobile {display:inline}
@media (max-width: 960px) {
  .notMobile {display:none}
  div.title {font-weight: bold; text-align: end;}
  .kimyunki {height: 60px;}
  .logo {height: 60px;}
}
/*피씨 버전*/
@media (min-width: 960px) {
  .mobile {display:none}
  ul {display:inline-block;}
  ul li {display:inline-block;}
}
</style>
