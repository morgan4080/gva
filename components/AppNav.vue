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
    if (this.$router.currentRoute.fullPath === "/") this.som = true
    gsap.registerPlugin(ScrollTrigger);
    this.trigger = ScrollTrigger.create({
      onRefresh: this.onResize,
      onUpdate: ({progress, direction, isActive}) => {
        this.updateHandler(progress, direction, isActive);
      },
    });
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this.$auth.loggedIn);
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
  },

};
</script>

<style scoped>
</style>
