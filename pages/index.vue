<template>
  <div>
    <div class="mb-2">
      <div class="container">
        <!-- <VueSlickCarousel :arrows="true" :dots="true"> -->
          <div class="carousel1">
            <div class="title">판을갈자!</div>
            <div class="sub1">내 삶을 위해!</div>
            <div class="sub2">노동을 위해!</div>
            <img src="~/static/images/크리스마스.jpg" style="width:100%">
          </div>
          <!-- <div class="carousel2"><img src="~/static/images/크리스마스.jpg"></div> -->
        <!-- </VueSlickCarousel> -->
      </div>
    </div>
    <div class="container">
      <b-row  class="m-0 ">
        <b-col cols=12 class="mb-2">
          <div>
            <b-img class="youtubeLogo" left src="~/static/images/YouTube-logo.png" fluid alt="Responsive image"></b-img>
          </div>
          <div class="youtubeMore" style="float: right;">
            <a class="text-muted" style="font-size: 18px; font-weight: 500;" href="https://www.youtube.com/channel/UC75n1YQodpOupIzTes2njMA" target="_blank">더보기</a>
          </div>
        </b-col>
        <!-- <b-col cols=2 style="text-align:end">
          더보기
        </b-col> -->
      </b-row>
      <b-row >
        <b-col cols-3 sm="12" md="4" class="mb-2">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/EthQVg1ayfo"
            allowfullscreen
          ></b-embed>
        </b-col>
        <b-col cols-3 sm="12" md="4" class="mb-2">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/5t_BvoIXmQM"
            allowfullscreen
          ></b-embed>
        </b-col>
        <b-col cols-3 sm="12" md="4" class="mb-2">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/5pDYBBM4whc"
            allowfullscreen
          ></b-embed>
        </b-col>
      </b-row>
    </div>
    <div class="container">
      <b-row>
        <b-col sm="12" md="6" class="p-0 mb-2">
          <div style="overflow:hidden; margin: 0 0 0 10px;">
            <a href="https://www.facebook.com/Kimyunki" target="_blank">
              <b-img left src="~/static/images/f_logo-Blue_100.png" fluid alt="facebook image" width="30px"></b-img>
              <div style="font-weight: 700; color:#0058a3;margin-left: 10px;font-size: 23px;display:inline-block;float:left">김윤기</div>
              <b-img left src="~/static/images/facebook-logo.png" fluid alt="facebook image" width="150px"></b-img>
            </a>
          </div>
          <div style="height:100px;border: solid 2px #7ac4fa; border-radius: 8px; margin: 5px;" v-for="post in data.data">
            <div style="font-weight: 500;height:110%; display:inline-block; width:15%; font-size:9px; vertical-align: middle;">{{dateFormet(post.created_time)}}</div>
            <div class="faceContent" style="height:100%; overflow:scroll;overflow-x: hidden; display:inline-block; width:80%; padding: 10px;">{{post.message}}</div>
          </div>
        </b-col>
        <b-col sm="12" md="6" class="mb-2" style="border:#000000 solid 1px">
          공약이 들어갈 자리
        </b-col>
      </b-row>
    </div>
    <div class="container" style="margin-top: 10px">
      <b-row style="height:300px">
        <b-col cols="12"  style="border:#000000 solid 1px">
          활동 사진이 들어갈 자리
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import VueSlickCarousel from 'vue-slick-carousel'
import axios from 'axios'
import moment from 'moment'

export default {
  components: {
  },
  layout: 'main',
  asyncData ({ params }) {
    return axios.get(`http://211.230.82.118:8080/facebookPosts`)
      .then((res) => {
        // console.log(res)
        return { data: res.data }
      })
  },
  methods: {
    dateFormet (date) {
      return moment(String(date)).format('YYYY년MM월DD일\n hh시mm분')
    }
  }
}
</script>

<style>
.youtubeLogo {height:60px}
.youtubeMore {line-height: 60px;}

{scrollbar-face-color: #e0e0e0;
scrollbar-track-color: #fff;
scrollbar-arrow-color: none;
scrollbar-highlight-color: #e0e0e0;
scrollbar-3dlight-color: none;
scrollbar-shadow-color: #e0e0e0;
scrollbar-darkshadow-color: none;}

.faceContent::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  border: 3px solid #eee;
}
.faceContent::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
  display: block;
  height: 5px;
  background: #eee;
}
.faceContent::-webkit-scrollbar-track {
  background: #eee;
  -webkit-border-radius: 10px;
  border-radius:10px;
}
.faceContent::-webkit-scrollbar-thumb {
  height: 50px;
  width: 50px;
  background: rgba(0,0,0,.2);
  -webkit-border-radius: 8px;
  border-radius: 8px;
}

[class^=carousel] {position: relative}
.carousel1 .title{position: absolute; top: 70px; left: 50px; font-size: 100px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both; margin-left: 50%; color:#868686}
.carousel1 .sub1{position: absolute; top: 250px; left: 100px; font-size: 50px; animation: slide-left 2s;animation-delay: 1.2s; animation-fill-mode: both; margin-left: 50%; color:#868686}
.carousel1 .sub2{position: absolute; top: 350px; left: 150px; font-size: 50px; animation: slide-left 2s;animation-delay: 1.5s; animation-fill-mode: both; margin-left: 50%; color:#868686}
@keyframes slide-left {
  from {
    margin-left: 50%;
  }
  to {
    margin-left: 0%;
  }
}

@media (max-width: 1200px) {
  .youtubeLogo {height:30px;}
  .youtubeMore {line-height: 30px;}
  .carousel1 .title{position: absolute; top: 50px; left: 50px; font-size: 70px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
  .carousel1 .sub1{position: absolute; top: 200px; left: 100px; font-size: 30px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
  .carousel1 .sub2{position: absolute; top: 280px; left: 150px; font-size: 30px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
}
@media (max-width: 960px) {
  .youtubeLogo {height:30px;}
  .youtubeMore {line-height: 30px;}
  .carousel1 .title{position: absolute; top: 50px; left: 50px; font-size: 50px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
  .carousel1 .sub1{position: absolute; top: 150px; left: 100px; font-size: 20px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
  .carousel1 .sub2{position: absolute; top: 200px; left: 150px; font-size: 20px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
}

@media (max-width: 768PX) {
  .carousel1 .title{position: absolute; top: 30px; left: 50px; font-size: 30px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
  .carousel1 .sub1{position: absolute; top: 110px; left: 100px; font-size: 15px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
  .carousel1 .sub2{position: absolute; top: 150px; left: 150px; font-size: 15px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
}

@media (max-width: 576px) {
  .carousel1 .title{position: absolute; top: 30px; left: 50px; font-size: 30px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
  .carousel1 .sub1{position: absolute; top: 100px; left: 100px; font-size: 15px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
  .carousel1 .sub2{position: absolute; top: 140px; left: 150px; font-size: 15px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both;}
}
</style>
