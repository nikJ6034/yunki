<template>
  <div>
    <div class="mb-2">
      <div class="container">
        <div :style="{ backgroundImage: 'url('+backgroundUrl+')' }" class="carousel1" style="overflow:hidden; background-repeat: no-repeat; background-size: cover;">
          <div class="title">
            판을갈자!
          </div>
          <div class="sub1">
            내 삶을 위해!
          </div>
          <div class="sub2">
            노동을 위해!
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <b-row class="m-0">
        <b-col cols="12" class="mb-2">
          <div>
            <b-img class="youtubeLogo" left src="~/static/images/YouTube-logo.png" fluid alt="Responsive image" />
          </div>
          <div class="youtubeMore" style="float: right;">
            <a class="text-muted" style="font-size: 18px; font-weight: 500;" href="https://www.youtube.com/channel/UC75n1YQodpOupIzTes2njMA" target="_blank">바로가기</a>
          </div>
        </b-col>
        <!-- <b-col cols=2 style="text-align:end">
          더보기
        </b-col> -->
      </b-row>
      <b-row>
        <b-col cols-3 sm="12" md="4" class="mb-2">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/GQ1BF46J_8M"
            allowfullscreen
          />
        </b-col>
        <b-col cols-3 sm="12" md="4" class="mb-2">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/GsikEKuzTS8"
            allowfullscreen
          />
        </b-col>
        <b-col cols-3 sm="12" md="4" class="mb-2">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/EthQVg1ayfo"
            allowfullscreen
          />
        </b-col>
      </b-row>
    </div>
    <div class="container">
      <b-row>
        <b-col sm="12" md="6" class="p-0 mb-2">
          <div style="overflow:hidden; margin: 0 0 0 10px;">
            <a href="https://www.facebook.com/Kimyunki" target="_blank">
              <!-- <b-img left src="~/static/images/f_logo-Blue_100.png" fluid alt="facebook image" width="30px" /> -->
              <!-- <div style="font-weight: 700; color:#0058a3;margin-left: 10px;font-size: 23px;display:inline-block;float:left">김윤기</div> -->
              <b-img left src="~/static/images/facebook-logo.png" fluid alt="facebook image" width="150px" />
            </a>
            <div class="" style="float: right; line-height:35px;margin-right: 15px;">
              <a class="text-muted" style="font-size: 18px; font-weight: 500;" href="https://www.facebook.com/Kimyunki" target="_blank">바로가기</a>
            </div>
          </div>
          <div v-for="post in data.data" style="height:100px;border: solid 2px #7ac4fa; border-radius: 8px; margin: 5px;">
            <div style="text-align: center;font-weight: 500;height:130%; display:inline-block; width:15%; font-size:13px; vertical-align: middle;">
              {{ dateFormetYYYY(post.created_time) }}<br>{{ dateFormetMMDD(post.created_time) }}
            </div>
            <div class="customScroll" style="padding: 1px;height:100%; overflow:scroll;overflow-x: hidden; display:inline-block; width:83%; padding: 10px;">
              {{ post.message }}
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="6" class="p-0 mb-2" style="height: 560px;">
          <div style="font-weight: 500;color:#e7ce17;margin-left: 10px;font-size: 23px;height:40px;">
            걸어온 길
          </div>
          <ul class="history-list customScroll" style="width:100%;height:518px;overflow:scroll;overflow-x: hidden;border: 2px solid #e5cd20;border-radius: 10px;">
            <li>
              <span>현) 정의당 대전시당 위원장</span>
            </li>
            <li>
              <span>현) 공공성 강화 민영화 저지 대전행동 공동대표</span>
            </li>
            <li>
              <span>현) 국민주권실현 적폐청산 대전운동본부 공동대표</span>
            </li>
            <li>
              <span>현) 핵재처리 실험저지 30KM연대 공동대표</span>
            </li>
            <li>
              <span>전) 2018년 대전광역시장 후보</span>
            </li>
            <li>
              <span>전) 2017년 심상정 대통령 후보 중앙선대위 유세본부장</span>
            </li>
            <li>
              <span>전) 월평공원 대규모 아파트 건설 저지 시민대책위 공동대표</span>
            </li>
            <li>
              <span>전) 민들레의료복지사회적협동조합 이사</span>
            </li>
            <li>
              <span>전) 대전장애인배움터 한울야학 운영위원장</span>
            </li>
            <li>
              <span>전) 비정규직과 해고 없는 세상을 위한 희망식당 운영자</span>
            </li>
            <li>
              <span>충남대학교 입학</span>
            </li>
            <li>
              <span>논산 대건고등학교 졸업</span>
            </li>
            <!-- <li>
              <strong  class="tit">2019</strong>
              <ul>
                <li>
                  <span>01.15</span>
                  <p >창립기념 특강1 “우리아이 첫 입학, 자녀교육 길라잡이”(강사- 강정숙 대전동서초등학교 교사)</p>
                </li>
              </ul>
            </li> -->
          </ul>
        </b-col>
      </b-row>
    </div>
    <div :style="{ backgroundImage: 'url('+yunkijoa+')' }" id="floatMenu">
      <div v-b-toggle.collapse-1 style="width:100%; height:100%;">

      </div>
      <b-collapse id="collapse-1" class="mt-2" style="position:relative;right:320px; top:-50px; width:300px">
        <b-card style="border: solid 1px #1d36e8; border-radius: 10px;">
          <div style="text-align: center; color: #7b7878; font-size: 20px; font-weight: 500; margin-bottom:10px;">김윤기를 돕고 싶다면 필독!</div>
          <p class="card-text">
            <span style="color:red; font-size: 15px; font-weight: 600;">방법 하나!</span>
            <span style="color:#7b7878; font-size: 15px; font-weight: 600;"> : 유튜브, 페이스북 좋아요를 꼭 누른다.</span>
          </p>
          <p class="card-text">
            <span style="color:red; font-size: 15px; font-weight: 600;">방법 둘!</span>
            <span style="color:#7b7878; font-size: 15px; font-weight: 600;"> : 유성구을[유성구 노은2동, 노은3동, 신성동, 전민동, 구즉동, 관평동] 지역구에 살고 있는 사람들에게 김윤기를 알린다.</span>
          </p>
          <p class="card-text">
            <div>
              <span style="color:red; font-size: 15px; font-weight: 600;">방법 셋!</span>
              <span style="color:#7b7878; font-size: 15px; font-weight: 600;"> : 후원 계좌로 후원금을 입금한다.</span>
              <span style="color:#7b7878; font-size: 10px;">(비당원만 해당됩니다~^^ 당원은 특별당비로!)</span><br>
            </div>
            <br>
            <div>
              <span style="color:#fac11e; font-size: 14px; font-weight: 600;">국민은행 461301-04-570006<br>[유성을국회의원 예비후보 김윤기 후원회]</span>
            </div>
          </p>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import VueSlickCarousel from 'vue-slick-carousel'
// import axios from 'axios'
import moment from 'moment'
import backgroundUrl from '~/static/images/멀뚱.jpg'
import yunkijoa from '~/static/images/윤기궁금.gif'

export default {
  components: {
  },
  layout: 'main',
  asyncData ({ params }) {
    // return axios.get(`http://211.230.82.118:8080/facebookPosts`)
    //   .then((res) => {
    //     // console.log(res)
    //     return { data: res.data, backgroundUrl }
    //   })
    return { data: {}, backgroundUrl, yunkijoa }
  },
  methods: {
    dateFormetYYYY (date) {
      return moment(String(date)).format('YYYY년')
    },
    dateFormetMMDD (date) {
      return moment(String(date)).format('MM월DD일')
    }
  },
  beforeMount () {
    const floatPosition = parseInt($('#floatMenu').css('top'))
    $(window).scroll(function () {
      // 현재 스크롤 위치를 가져온다.
      const scrollTop = $(window).scrollTop()
      const newPosition = scrollTop + floatPosition + 'px'

      $('#floatMenu').stop().animate({
        'top': newPosition
      }, 500)
    }).scroll()
  }
}
</script>

<style>
.youtubeLogo {height:60px}
.youtubeMore {line-height: 60px;}

#floatMenu {
  position: absolute;
  width: 50px;
  height: 50px;
  right: 5px;
  top: 100px;
  border:1px solid rgb(253, 237, 6); border-radius: 25px;
  background-repeat: no-repeat; background-size: cover;
}

.customScroll::-webkit-scrollbar {
   width: 8px;
  /*height: 8px;
  border: 3px solid #eee; */
}
.customScroll::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
  height: 5px;
  background: #eee;
  display: none;
}
.customScroll::-webkit-scrollbar-track {
  background: #eee;
  -webkit-border-radius: 10px;
  border-radius:10px;
  display: none;
}
.customScroll::-webkit-scrollbar-thumb {
  height: 50px;
  width: 50px;
  background: rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.history-list ul,li {
  position:relative;
}
.history-list li {
  margin-top: 10px;
}

.history-list li span {
  font-weight: 500
}

.history-list li :before {
    content: "";
    position: absolute;
    z-index: 20;
    left: -18px;
    top: 7px;
    width: 10px;
    height: 10px;
    border-radius: 16px;
    background: #e19434;
}
[class^=carousel] {position: relative}
.carousel1 .title{width:1000px;height:50%; line-height: 200%; font-size: 100px; animation: slide-left 2s;animation-delay: 1s; animation-fill-mode: both; margin-left: 50%;font-weight: 700; color:#ffca08; -webkit-text-stroke: 1px black; font-style: italic;}
.carousel1 .sub1{width:1000px;height:25%;font-size: 70px; animation: slide-left 2s;animation-delay: 1.2s; animation-fill-mode: both; margin-left: 50%;font-weight: 500;  color:#3b49f3; -webkit-text-stroke: 1px black; padding: 0 0 0 50px;}
.carousel1 .sub2{width:1000px;height:25%;font-size: 70px; animation: slide-left 2s;animation-delay: 1.5s; animation-fill-mode: both; margin-left: 50%;font-weight: 500;  color:#ed4b4b; -webkit-text-stroke: 1px black; padding: 0 0 0 100px;}
@keyframes slide-left {
  from {
    margin-left: 50%;
  }
  to {
    margin-left: 10%;
  }
}
.carousel1 {height:450px;}
@media (max-width: 1200px) {
  #floatMenu {right:5px}
  .carousel1 {height:380px;}
  .youtubeLogo {height:30px;}
  .youtubeMore {line-height: 30px;}
  .carousel1 .title{font-size: 80px;line-height: 280%;}
  .carousel1 .sub1{font-size: 50px;}
  .carousel1 .sub2{font-size: 50px;}
}
@media (max-width: 960px) {
  .carousel1 {height:280px;}
  .youtubeLogo {height:30px;}
  .youtubeMore {line-height: 30px;}
  .carousel1 .title{font-size: 60px;}
  .carousel1 .sub1{font-size: 40px;}
  .carousel1 .sub2{font-size: 40px;}
}

@media (max-width: 768PX) {
  .carousel1 {height:205px;}
  .carousel1 .title{font-size: 40px;line-height: 300%;}
  .carousel1 .sub1{font-size: 30px;}
  .carousel1 .sub2{font-size: 30px;}
}

@media (max-width: 576px) {
  #floatMenu {right:-10px}
  .carousel1 {height:180px;}
  .carousel1 .title{font-size: 40px; line-height: 270%;}
  .carousel1 .sub1{font-size: 30px;}
  .carousel1 .sub2{font-size: 30px;}
}

@media (max-width: 390px) {
  #floatMenu {right:-10px}
  .carousel1 {height:120px;}
  .carousel1 .title{font-size: 30px; line-height: 150%;}
  .carousel1 .sub1{font-size: 20px;}
  .carousel1 .sub2{font-size: 20px;}
}
</style>
