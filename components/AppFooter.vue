<template>
  <div >
    <div class="pt-16 pb-4 bg-gray-700">
      <div class="max-w-6xl mx-auto px-4 lg:px-0" >
        <div class="text-white flex flex-col lg:flex-row" >
          <div class="lg:w-1/4 lg:py-4" >
            <img class='md:w-56' src='~/static/logoblack.png' alt=''>
          </div>
          <div class="lg:w-1/4 lg:py-4 flex items-center" >
            <ul >
              <li class="py-1 lg:py-2" >
                <nuxt-link to="/faq" target="_blank" class="text-lg" >
                  F.A.Q
                </nuxt-link>
              </li>
              <li class="py-1 lg:py-2" >
                <nuxt-link to="/refunds" class="text-lg" >Blog</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/4 lg:py-4 flex items-center" >
            <ul >
              <li class="py-1 lg:py-2" >
                <nuxt-link to="/privacy" class="text-lg" >Privacy</nuxt-link>
              </li>
              <li class="py-1 lg:py-2" >
                <nuxt-link to="/terms" class="text-lg" >Terms</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/4 lg:py-4 flex flex-col justify-center" >
            <h2 class="text-2xl font-semibold leading-none pb-1 text-white">
              We accept:
            </h2>
            <ul class="flex">
              <li class="py-1 lg:py-2" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"/><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"/></svg>
              </li>
              <li class="py-1 lg:py-2" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="NgmlaCv2fU27PJOuiUvQVa" x1="20.375" x2="28.748" y1="1365.061" y2="1394.946" gradientTransform="translate(0 -1354)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00b3ee"/><stop offset="1" stop-color="#0082d8"/></linearGradient><path fill="url(#NgmlaCv2fU27PJOuiUvQVa)" d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25 C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"/><circle cx="17.053" cy="24.053" r="10.053" fill="#cf1928"/><linearGradient id="NgmlaCv2fU27PJOuiUvQVb" x1="20" x2="40.107" y1="24.053" y2="24.053" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"/><stop offset="1" stop-color="#ffd000"/></linearGradient><circle cx="30.053" cy="24.053" r="10.053" fill="url(#NgmlaCv2fU27PJOuiUvQVb)"/><path fill="#d97218" d="M20,24.053c0,3.072,1.382,5.818,3.553,7.662c2.172-1.844,3.553-4.59,3.553-7.662 s-1.382-5.818-3.553-7.662C21.382,18.235,20,20.981,20,24.053z"/></svg>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center pt-8" >
          <p class="text-white opacity-50 py-1" >
            Copyright © 2021 Great Vacation Adventures | All Rights Reserved. |
            <a href="https://web.facebook.com/awesomeappservices" target="_blank" class="hover:text-white" >By Awesome</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      showLoader: false,
      emailVerified: false,
    }
  },
  created() {
  }
}
</script>

<style scoped>
</style>
