<template>
  <div class="">
    <div class="hero-text">
      <div class="avatar d-none mb-5">
        <img src="@/assets/profile.jpg" />
      </div>
      <h2 class="text-white">
        <span class="text">Hi, I'm </span>
        <!-- <transition name="animation"> -->
        <span class="primary-color big-profile-name-style name"
          >Ye Yint Aung.</span
        >
        <!-- </transition> -->
      </h2>
      <div class="subtitle">
        <p class="text-white">
          <span class="text">I create </span>
          <span class="primary-color">beautiful</span>
          <span class="text"> & </span>
          <span class="primary-color">functional</span>
          <span class="text"> websites.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="css" scoped>
.name {
  font-size: 50px;
}
.text {
  font-size: 18px;
}
.animation-enter-active {
  animation: text-flicker-in-glow 0.9s both;
}
.animation-leave-active {
  animation: text-flicker-in-glow 0.9s both reverse;
}
@keyframe animation {
  0% {
    -webkit-transform: translateY(-45px);
    transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
    transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
</style>
