<template>

  <main>
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title"><span class="text-accent">Enjoy</span> <span class="text-light">premium coffee at our
            charming cafe</span></h1>
        <div class="hero-text">
          <p class="text-light hero-text-p">With its inviting atmosphere and delicious coffee options, the Coffee
            House Resource
            is
            a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their
            favorite
            beverage.
          </p>
        </div>
        <RouterLink to="/menu" class="hero-main-link link-text text-dark">Menu</RouterLink>
      </div>
    </section>
    <section id="favorite-coffee" class="favorite-coffee">
      <h2 class="favorite-coffee-header">Choose your <span class="text-accent">favorite</span> coffee</h2>
      <Slider />
    </section>
    <section id="about" class="about">
      <h2 class="about-title text-dark">Resource is <span class="text-accent">the perfect and cozy place</span> where
        you can enjoy a variety of hot beverages, relax, catch up with friends, or
        get some work done.</h2>
      <div class="about-container">
        <div class="about-column">
          <div class="about-box about-box-big"><img class="about-image" alt="people drinking coffee"
              src="../assets/img/about/about-1.jpeg"></div>
          <div class="about-box about-box-small"><img class="about-image" alt="people drinking coffee"
              src="../assets/img/about/about-2.jpeg"></div>
        </div>
        <div class="about-column">
          <div class="about-box about-box-small"><img class="about-image" alt="people drinking coffee"
              src="../assets/img/about/about-3.jpeg"></div>
          <div class="about-box about-box-big"><img class="about-image" alt="people drinking coffee"
              src="../assets/img/about/about-4.jpeg"></div>
        </div>
      </div>
    </section>
    <section id="mobile-app" class="mobile-app">
      <div class="mobile-app-container">
        <div class="mobile-app-content">
          <h2 class="mobile-app-content-title text-dark"><span class="text-accent">Download</span> our apps to start
            ordering</h2>
          <p class="mobile-app-content-text text-dark">Download the Resource app today and experience the comfort of
            ordering your favorite coffee from wherever you are</p>
          <div class="mobile-app-content-buttons">
            <a class="transparent-button store-button apple-store-button">
              <!-- <div class="store-icon apple-store-icon"><img class="apple-store-icon-picture" alt="app store icon"
                    src="../src/assets/svg/applestore-icon.svg"></div> -->
              <div class="store-icon apple-store-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="icon">
                    <g id="Icon">
                      <g id="Vector">
                        <path class="apple-store-icon-picture"
                          d="M26.7073 18.6307C26.6704 14.6324 30.065 12.6872 30.2203 12.5966C28.2977 9.86366 25.3178 9.49026 24.2707 9.46048C21.7679 9.20369 19.3403 10.9206 18.0654 10.9206C16.765 10.9206 14.8017 9.48529 12.6858 9.52747C9.96293 9.56841 7.41566 11.1055 6.0186 13.4923C3.13542 18.359 5.28572 25.5108 8.04802 29.4446C9.42981 31.3712 11.0444 33.5223 13.1578 33.4466C15.2254 33.3635 15.9978 32.1614 18.4929 32.1614C20.9651 32.1614 21.6903 33.4466 23.8457 33.3983C26.0647 33.3635 27.4618 31.463 28.7952 29.519C30.392 27.3108 31.0333 25.1362 31.0588 25.0245C31.0066 25.0071 26.7493 23.4229 26.7073 18.6307Z"
                          fill="#403F3D" />
                        <path class="apple-store-icon-picture"
                          d="M22.6357 6.87268C23.7477 5.51675 24.5086 3.67205 24.2974 1.80005C22.6879 1.86952 20.675 2.88554 19.5159 4.21169C18.4903 5.38029 17.5742 7.29571 17.8109 9.097C19.6189 9.2285 21.4753 8.20752 22.6357 6.87268Z"
                          fill="#403F3D" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="store-button-text-container">
                <div class="store-button-text store-button-descriptive-text caption-text">Available on the</div>
                <div class="store-button-text store-button-store-title link-text">App Store</div>
              </div>
            </a>
            <a class="transparent-button store-button google-play-button">
              <!-- <div class="store-icon play-store-icon"><img class="apple-store-icon-picture" alt="app store icon"
                    src="../src/assets/svg/playstore-icon.svg"></div> -->
              <div class="store-icon play-store-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="icon">
                    <g id="Icon">
                      <path class="apple-store-icon-picture" id="Vector"
                        d="M3.7558 3.20297C3.39335 3.57289 3.18359 4.14884 3.18359 4.89471V31.4994C3.18359 32.2453 3.39335 32.8212 3.7558 33.1911L3.84525 33.2723L19.1359 18.37V18.0181L3.84525 3.11575L3.7558 3.20297Z"
                        fill="#403F3D" />
                      <path class="apple-store-icon-picture" id="Vector_2"
                        d="M26.0776 23.34L20.9863 18.37V18.0181L26.0837 13.0482L26.1979 13.1128L32.2345 16.4617C33.9573 17.4121 33.9573 18.976 32.2345 19.9324L26.1979 23.2753L26.0776 23.34Z"
                        fill="#403F3D" />
                      <path class="apple-store-icon-picture" id="Vector_3"
                        d="M25.2733 24.2007L20.0617 19.1195L4.68164 34.1166C5.25384 34.7031 6.18695 34.7737 7.24807 34.1873L25.2733 24.2007Z"
                        fill="#403F3D" />
                      <path class="apple-store-icon-picture" id="Vector_4"
                        d="M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z"
                        fill="#403F3D" />
                    </g>
                  </g>
                </svg>
              </div>
              <div class="store-button-text-container">
                <div class="store-button-text store-button-descriptive-text caption-text">Available on</div>
                <div class="store-button-text store-button-store-title link-text">Google Play</div>
              </div>
            </a>
          </div>
        </div>
        <div class="mobile-app-picture-container"><img class="mobile-app-picture" alt="smartphones picture"
            src="../assets/img/mobile-phones.png"></div>
      </div>
    </section>
  </main>
</template>

<script setup>

import Slider from './components/Slider.vue'

</script>

<style scoped></style>