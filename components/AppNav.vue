<template>
  <div id='fixedH'>
    <div class="absolute top-0 w-full z-20 font-sans" :class="{ 'bg-transparent border-0' : !som, 'bg-transparent border-0' : som }">
      <div class="max-w-6xl mx-auto py-5" >
        <div class="w-full h-auto" >
          <div class="flex items-center justify-between" >
            <div class="px-6 md:px-0 py-2 w-auto" >
              <nuxt-link to="/" aria-current="page">
                <Logo />
              </nuxt-link>
            </div>
            <div id='textC' class="hidden lg:flex items-center relative text-white" >
              <nuxt-link to="/about" :class="{ 'text-black' : som , 'text-black' : !som  }" class="uppercase mx-2 tracking-wide font-semibold py-3 px-4 hover:text-yellow-green" >
                About us
              </nuxt-link>
              <nuxt-link to="/contact" :class="{ 'text-black' : som , 'text-black' : !som }" class="uppercase mx-2 tracking-wide font-semibold py-3 px-4 hover:text-yellow-green" >
                Contact Us
              </nuxt-link>
              <nuxt-link to="/packages" :class="{ 'text-black' : som , 'text-black' : !som }" class="group uppercase mx-2 tracking-wide font-semibold py-3 px-4 hover:text-yellow-green inline-block" >
                <span class="flex flex-row items-center" @mouseover="showSubMenu00 = true" @mouseleave="checkMousePos0($event)" >
                  Packages
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  leave-active-class="transition ease-in duration-150"
                  enter-class="transform opacity-0 translate-y-1"
                  enter-to-class="transform opacity-100 translate-y-0"
                  leave-class="transform opacity-100 translate-y-0"
                  leave-to-class="transform opacity-0 translate-y-1"
                >
                  <div v-if="showSubMenuX" id="evOfInt0"  class="absolute right-0 -mr-3 pt-5 transform px-2 w-screen lg:mt-2 sm:px-0 lg:ml-0 lg:left-1/3 capitalize" style="max-width: 15rem;" @mouseleave="showSubMenu00 = false" >
                    <div class="rounded-lg shadow-2xl">
                      <div class="rounded-lg shadow-xl">
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6 bg-gradient-to-br from-yellow-gold to-yellow-600" >
                          <nuxt-link v-for='(p, i) in packages' :key='i' :to="p.href" class="group -m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black flex flex-row items-center text-base -mb-1 transition ease-in-out duration-150" @mouseover="showSubMenu2 = false;showSubMenu1 = true;showSubMenu3 = false;showSubMenu4 = false;" >
                                {{ p.name }}
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>

                </transition>

              </nuxt-link>
              <nuxt-link to="/services" :class="{ 'text-black' : som , 'text-black' : !som }" class="group uppercase mx-2 tracking-wide font-semibold py-3 px-4 hover:text-yellow-green inline-block" >
                <span class="flex flex-row items-center" @mouseover="showSubMenu0 = true" @mouseleave="checkMousePos($event)" >
                  Services
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  leave-active-class="transition ease-in duration-150"
                  enter-class="transform opacity-0 translate-y-1"
                  enter-to-class="transform opacity-100 translate-y-0"
                  leave-class="transform opacity-100 translate-y-0"
                  leave-to-class="transform opacity-0 translate-y-1"
                >
                  <div v-if="showSubMenu" id="evOfInt"  class="absolute right-0 -mr-3 pt-5 transform px-2 w-screen lg:mt-2 sm:px-0 lg:ml-0 lg:left-2/3 capitalize" style="max-width: 15rem;" @mouseleave="showSubMenu0 = false" >
                    <div class="rounded-lg shadow-2xl">
                      <div class="rounded-lg shadow-xl">
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6 bg-gradient-to-br from-yellow-gold to-yellow-600" >
                          <nuxt-link v-for='(service, i) in services' :key='i' :to="service.href" class="group -m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black flex flex-row items-center text-base -mb-1 transition ease-in-out duration-150" @mouseover="showSubMenu2 = false;showSubMenu1 = true;showSubMenu3 = false;" >
                                {{ service.name }}
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>

                </transition>

              </nuxt-link>

              <nuxt-link to="/get-a-quote" class="uppercase bg-black inline-block mx-2 tracking-wide font-semibold py-3 px-4 text-white rounded-full transform hover:scale-105 transition ease-in-out duration-100" style="border-color: #49544e;">
                Get Quote
              </nuxt-link>

              <button type="button" class="px-2 pr-3 flex items-center justify-center border border-blue-500 uppercase bg-white inline-block tracking-wide font-semibold text-blue-500 rounded-full transform hover:scale-105 transition ease-in-out duration-100" @click="$auth.loginWith('google')">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="46px" height="46px" viewBox="0 0 46 46" version="1.1">
                  <title>btn_google_dark_normal_ios</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
                      <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                      <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                      <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"/>
                      <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2"/>
                      <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/>
                      <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0" in="shadowBlurOuter2" type="matrix" result="shadowMatrixOuter2"/>
                      <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"/>
                        <feMergeNode in="shadowMatrixOuter2"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <rect id="path-2" x="0" y="0" width="40" height="40" rx="2"/>
                    <rect id="path-3" x="5" y="5" width="38" height="38" rx="1"/>
                  </defs>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
                    <g transform="translate(-608.000000, -219.000000)"/>
                    <g transform="translate(-1.000000, -1.000000)">

                      <g id="button-bg-copy">
                        <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-3"/>
                        <use fill="none" xlink:href="#path-3"/>
                        <use fill="none" xlink:href="#path-3"/>
                        <use fill="none" xlink:href="#path-3"/>
                      </g>
                      <g transform="translate(15.000000, 15.000000)">
                        <path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"  fill="#4285F4" />
                        <path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"  fill="#34A853" />
                        <path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"  fill="#FBBC05" />
                        <path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"  fill="#EA4335" />
                        <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z"  />
                      </g>
                      <g />
                    </g>
                  </g>
                </svg>
                <span v-show='!showLoader' class='-ml-2 mr-2'>Login</span>
                <svg v-show='showLoader' class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </button>

              <div v-show="$auth.loggedIn" class="relative flex justify-center text-left" @mouseleave="showDropdown" >
                <button type="button" class="capitalize inline-flex items-center mx-2 font-semibold px-1 pr-3 bg-white text-black rounded-full transform hover:scale-105 transition ease-in-out duration-100" @click="$router.push('/profile')" @mouseenter="showDropdown" >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.2 24C43.2 34.6039 34.6039 43.2 24 43.2C13.3962 43.2 4.80002 34.6039 4.80002 24C4.80002 13.3961 13.3962 4.79999 24 4.79999C34.6039 4.79999 43.2 13.3961 43.2 24ZM28.8 16.8C28.8 19.451 26.651 21.6 24 21.6C21.3491 21.6 19.2 19.451 19.2 16.8C19.2 14.149 21.3491 12 24 12C26.651 12 28.8 14.149 28.8 16.8ZM23.9999 26.4C19.1578 26.4 14.9855 29.2679 13.089 33.3977C15.7297 36.4609 19.6384 38.4 24 38.4C28.3615 38.4 32.2701 36.4609 34.9108 33.3979C33.0143 29.268 28.842 26.4 23.9999 26.4Z" fill="#000000"/>
                  </svg>
                  <span>{{ names }}</span>
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <transition
                  enter-active-class="transition ease-out duration-200"
                  leave-active-class="transition ease-in duration-150"
                  enter-class="transform opacity-0 translate-y-1"
                  enter-to-class="transform opacity-100 translate-y-0"
                  leave-class="transform opacity-100 translate-y-0"
                  leave-to-class="transform opacity-0 translate-y-1"
                >
                  <div v-show="dropDownOpen" class="absolute right-0 -mr-3 px-2 w-screen mt-16 sm:px-0 lg:ml-0 capitalize" style="max-width: 15rem;">
                    <div class="rounded-lg shadow-2xl">
                      <div class="rounded-lg shadow-xl">
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6 bg-gradient-to-br from-teal-300 to-teal-600" >
                          <div class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150" role="menuitem" @click="$router.push('/profile');showDropdown;">
                            <div class="flex-1 space-y-1">
                              <div class="transform cursor-pointer font-semibold hover:translate-x-2 hover:text-white leading-6 text-left text-black text-lg -mb-1 transition ease-in-out duration-150">
                                Profile
                              </div>
                            </div>
                          </div>
                          <div class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150" role="menuitem" @click="logout">
                            <div class="flex-1 space-y-1">
                              <div class="transform cursor-pointer font-semibold hover:translate-x-2 hover:text-white leading-6 text-left text-black text-lg -mb-1 transition ease-in-out duration-150">
                                Log Out
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>

            </div>
            <div class="lg:hidden mx-8 absolute z-20 right-0" >
              <button class="block lg:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:text-white" @click="showMobileMenu = !showMobileMenu" >
                <svg v-if="!showMobileMenu" stroke="#d97706" fill="none" viewBox="0 0 24 24" class="h-6 w-6" >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" ></path>
                </svg>
                <svg v-if="showMobileMenu" stroke="#000000" fill="none" viewBox="0 0 24 24" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              leave-active-class="transition ease-in duration-150"
              enter-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div v-if="showMobileMenu" class="absolute block flex flex-col px-4 pt-12 top-0 w-full pb-12 shadow-2xl bg-gradient-to-tr from-yellow-gold to-yellow-600">
                <nuxt-link v-for='menu in mobile_menu' :key='menu.id' :to="menu.href" class="text-black font-semibold py-3 px-5" @click="turnOff" >
                  <span class="w-full block" @click="turnOff">{{ menu.name }}</span>
                </nuxt-link>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";


export default {
  components: {
    Logo
  },
  data() {
    return {
      dropDownOpen: false,
      showSubMenu0: false,
      showSubMenu00: false,
      showSubMenu1: false,
      showSubMenu2: false,
      showSubMenu3: false,
      showSubMenu4: false,
      showMobileMenu: false,
      homeIs: false,
      som: false,
      showLoader: false,
      showLoader0: false,
      services: [
        {
          id: 1,
          name: 'Car Hire',
          href: '/car-hire'
        },
        {
          id: 2,
          name: 'Hotel Booking',
          href: '/hotel-booking'
        },
        {
          id: 3,
          name: 'Flight Booking',
          href: '/flight-booking'
        }
      ],
      packages: [
        {
          id: 1,
          name: 'Wildlife Safaris',
          href: '/wildlife-safaris'
        },
        {
          id: 2,
          name: 'Bird Watching Safaris',
          href: '/bird-watching-safaris'
        },
        {
          id: 3,
          name: 'Golf Safaris',
          href: '/golf-safaris'
        }
      ],
      desktop_menu: [
        {
          id: 1,
          name: 'About Us',
          href: '/about'
        },
        {
          id: 2,
          name: 'Packages',
          href: '/packages'
        },
        {
          id: 3,
          name: 'Services',
          href: '/services'
        },
        {
          id: 4,
          name: 'Why Us',
          href: '/why-us'
        },
        {
          id: 5,
          name: 'Contact Us',
          href: '/contact'
        },
      ],
      mobile_menu: [
        {
          id: 1,
          name: 'About Us',
          href: '/about'
        },
        {
          id: 2,
          name: 'Packages',
          href: '/packages'
        },
        {
          id: 3,
          name: 'Services',
          href: '/services'
        },
        {
          id: 4,
          name: 'Why Us',
          href: '/why-us'
        },
        {
          id: 5,
          name: 'Contact Us',
          href: '/contact'
        },
      ]
    }
  },
  computed: {
    showSubMenu() {
      if (!this.showSubMenu0) {
        this.switchOffMenus()
      }
      return this.showSubMenu0
    },
    showSubMenuX() {
      if (!this.showSubMenu00) {
        this.switchOffMenus()
      }
      return this.showSubMenu00
    },
    names() {
      return (this.$auth.user) ? this.$auth.user.name : 'my account'
    }
  },
  watch:{
    $route(to) {
      // whether nav is at home make nav transparent
      this.som = to.path === "/"
    }
  },
  mounted() {
    if (this.$router.currentRoute.path === "/") this.som = true
    gsap.registerPlugin(ScrollTrigger);
    this.trigger = ScrollTrigger.create({
      onRefresh: this.onResize,
      onUpdate: ({progress, direction, isActive}) => {
        this.updateHandler(progress, direction, isActive);
      },
    });
  },
  created() {
    if (this.$router.currentRoute.query.hasOwnProperty('code')) {
      this.showLoader = true
    }
    if (this.$router.currentRoute.query.hasOwnProperty('token')) {
      // check for token param
      // set the token globally and on request header
      // make request to backend to update users.email_verified_at
      // eslint-disable-next-line no-console
      console.log("found you")
      const verifyMe = async () => {
        this.showLoader0 = true
        // set new token
        this.$auth.strategy.token.set(this.$router.currentRoute.query.token)
        return await this.$axios.post('api/signup?verify=true', {
          token: this.$router.currentRoute.query.token,
        })
      }
      verifyMe().then((data)=> {
        // eslint-disable-next-line no-console
        console.log("verify response", data)
        this.showLoader0 = false
      }).catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
    }
    // eslint-disable-next-line no-console
    // console.log(this.$auth.loggedIn);
  },
  methods: {
    onResize() {
      // eslint-disable-next-line no-console
      console.log("resizing")
    },
    updateHandler(progress, direction, active) {
      // eslint-disable-next-line no-console
      console.log("updateHandler", progress, direction, active)

      if (progress > 0.0) {
        // scroll down
        if (document.querySelector("#fixedH")) {
          if (direction === 1) {
            document.querySelector("#fixedH").classList.add('sticky','z-20', 'top-0', 'bg-white');
            document.querySelector("#fixedH > div").classList.add('bg-white');
            document.querySelector("#textC").classList.add('text-black');
            document.querySelector("#cImage").classList.remove('hidden');
          }

          // scroll up
          if (direction === -1) {
            document.querySelector("#fixedH").classList.remove('sticky','z-20', 'top-0', 'bg-white');
            document.querySelector("#fixedH > div").classList.remove('bg-white');
            document.querySelector("#textC").classList.remove('text-black');
            document.querySelector("#cImage").classList.add('hidden');
          }
        }
      }
    },
    switchOffMenus() {
      this.showSubMenu1 = false;
      this.showSubMenu2 = false;
      this.showSubMenu3 = false;
      this.showSubMenu4 = false;
    },
    turnOff() {
      // eslint-disable-next-line no-console
      console.log("remove menu");
      this.showMobileMenu = !this.showMobileMenu
    },
    async logout() {
      await this.$auth.logout();
      this.$auth.strategy.token.reset();
      this.$store.commit('setAuth', null);
      location.reload()
    },
    showDropdown() {
      this.dropDownOpen = !this.dropDownOpen;
    },
    checkMousePos() {
      let stt = false;
      document.querySelector("#evOfInt").addEventListener('mouseenter', () => {
        stt = true;
      })
      setTimeout(() => {
        if (!stt) {
          this.showSubMenu0 = false
        }
      }, 200)
    },
    checkMousePos0() {
      let stt = false;
      document.querySelector("#evOfInt0").addEventListener('mouseenter', () => {
        stt = true;
      })
      setTimeout(() => {
        if (!stt) {
          this.showSubMenu00 = false
        }
      }, 200)
    }
  }
};
</script>

<style scoped>
</style>
