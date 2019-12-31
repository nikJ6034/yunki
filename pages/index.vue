<template>
  <div>
    <div style="margin-top:10px">
      <div class="container">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="380"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd">
          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="380"
                src="https://picsum.photos/1024/380/?image=55"
                alt="image slot"
              >
            </template>
              <h1>Hello world!</h1>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="container" style="margin-top: 10px">
      <b-row  class="m-0 ">
        <b-col cols=12>
          <div>
            <b-img left src="~/static/images/YouTube-logo.png" fluid alt="Responsive image" style="height:60px"></b-img>
          </div>
          <div style="float: right;line-height: 60px;">
            더보기
          </div>
        </b-col>
        <!-- <b-col cols=2 style="text-align:end">
          더보기
        </b-col> -->
      </b-row>
      <b-row >
        <b-col cols-3>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/MctKqr2g68Q"
            allowfullscreen
          ></b-embed>
        </b-col>
        <b-col cols-3>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/tzM3l6n7ihM"
            allowfullscreen
          ></b-embed>
        </b-col>
        <b-col cols-3>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/2bh9zvKBjGA"
            allowfullscreen
          ></b-embed>
        </b-col>
      </b-row>
    </div>
    <div class="container" style="margin-top: 10px">
      <b-row style="height:300px">
        <b-col cols="5" style="border:#000000 solid 1px">
          페이스북 게시물이 들어갈 자리
        </b-col>
        <b-col cols="7" style="border:#000000 solid 1px">
          공약이 들어갈 자리
        </b-col>
      </b-row>
    </div>
    <div class="container" style="margin-top: 10px">
      <b-row style="height:300px">
        <b-col cols="12" style="border:#000000 solid 1px">
          활동 사진이 들어갈 자리
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  layout: 'main'
}
</script>

<style>

</style>
