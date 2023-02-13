<template>
  <div class="trailerMain">
    <div class="trailer">
      <iframe
        :src="trailerId"
        loading="lazy"
        title="Movie Trailer"
      />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        trailer: String,
    },
    data() {
        return {
            trailerId: ''
        }
    },
  created() {
    console.log(this.trailer);
    let url = this.trailer;
    let videoid = url.match(
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
    );
    if (videoid != null) {
      console.log("video id = ", videoid[1]);
    } else {
      console.log("The youtube url is not valid.");
    }
    this.trailerId = `https://www.youtube.com/embed/${videoid[1]}`;
  },
};
</script>

<style scoped>
.trailerMain {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.trailer {
  width: 80%;
  height: 70%;
  border-radius: 12px;
  overflow: hidden;
}

.trailer iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  outline: none;
}
</style>
