<template>
  <main class='min-h-screen'>
    <div class="relative bg-gray-900">
      <!-- Decorative image and overlay -->
      <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
        <img src="~/static/E0BE2F47-B424-463C-8BEC-5C89056F94C1.jpeg" alt="" class="w-full h-full object-center object-cover">
      </div>
      <div aria-hidden="true" class="absolute inset-0 bg-black opacity-60"></div> <!--overlay color-->

      <!-- Navigation -->

      <div class="relative max-w-4xl mx-auto py-32 px-6 flex flex-col items-center justify-center text-center sm:py-64 lg:px-0 min-h-screen">
        <h1 class="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Great <span class='text-yellow-600'>Vacation</span> Adventures</h1>
        <p class="mt-4 text-xl text-white">It is said East Africa is experienced as much by the senses as well as the eye. There is no doubt that it is one of the most colourful and dynamic destinations in the world where one should expect the unexpected.</p>
        <a href="#" class="mt-8 inline-block bg-yellow-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-black hover:bg-yellow-gold">Request Quote</a>
      </div>
    </div>


    <div class='bg-gray-100'>
      <section aria-labelledby="products-heading" class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div class="pt-16 pb-10 text-center">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Destination Offers</h1>
          <p class="mt-4 px-4 text-base text-gray-500">We're a tours company founded on passion: a passion for people, a passion for wildlife and a passion for the magnificent landscapes around the World</p>
        </div>

        <div class="-mx-px border-l border-t border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3">
          <div v-for='offer in offers' :key='offer.id' class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
            <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1">
              <div class="ribbon_3 popular">
                <span>{{ offer.tag }}</span>
              </div>
              <img :src="require(`~/assets/images/${offer.image}`)" alt="TODO" class="w-full h-full rounded-lg object-center object-cover">
              <div aria-hidden="true" class="absolute inset-0 bg-gray-900 rounded-lg opacity-30 group-hover:opacity-0"></div>
              <div class='px-4 w-full h-full flex flex-col justify-end'>
                <div class='flex justify-between'>
                  <div class='text-white font-semibold text-lg py-1'>
                    <span>{{ offer.rating }}</span>
                  </div>
                  <div class='text-white font-semibold text-2xl py-1'>
                    <h3>{{ offer.price | shilling }} </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-between items-center px-2 py-5">
              <div class="text-sm w-2/3 font-medium text-gray-900">
                <button type='button' class='uppercase font-bold' @click='requestQuote(offer)'>
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ offer.name }} <span class='font-light'>OFFERS</span>
                </button>
                <p class="sr-only">5 out of 5 stars</p>
                <div class="flex items-center">

                  <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>

                  <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>

                  <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>

                  <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>

                  <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>

                </div>
              </div>
              <div class="flex w-1/3 flex text-yellow-400">
                <div class='ml-auto  flex flex-col items-center justify-center relative'>
                  <span class='absolute -left-2 -top-2'>+</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='py-8'>
          <a href="#" class="mt-8 mx-auto w-56 inline-block bg-yellow-600 border border-transparent rounded-md py-2.5 px-4 text-sm font-medium text-black hover:bg-yellow-gold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>View all packages</span>
          </a>
        </div>
      </section>
    </div>


    <section aria-labelledby="products-heading" class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <div class="pt-16 pb-10 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Top Rated</h1>
        <p class="mt-4 px-4 text-base text-gray-500">Our team of expert tour consultants have extensive first-hand knowledge of all the top destinations, hotels and resorts all over the world.</p>
      </div>

      <div class="-mx-px border-l border-t border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3">
        <div v-for='offer in specials' :key='offer.id' class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
          <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1">
            <div class="ribbon_3 special">
              <span>{{ offer.tag }}</span>
            </div>
            <img :src="require(`~/assets/images/${offer.image}`)" alt="TODO" class="w-full h-full rounded-lg object-center object-cover">
            <div aria-hidden="true" class="absolute inset-0 bg-gray-900 rounded-lg opacity-30 group-hover:opacity-0"></div>
            <div class='px-4 w-full h-full flex flex-col justify-end'>
              <div class='flex justify-between'>
                <div class='text-white font-semibold text-lg py-1'>
                  <span>{{ offer.rating }}</span>
                </div>
                <div class='text-white font-semibold text-2xl py-1'>
                  <h3>{{ offer.price | shilling }} </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-between items-center px-2 py-5">
            <div class="text-sm w-2/3 font-medium text-gray-900">
              <button type='button' class='uppercase font-bold' @click='requestQuote(offer)'>
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ offer.name }} <span class='font-light'>OFFERS</span>
              </button>
              <p class="sr-only">5 out of 5 stars</p>
              <div class="flex items-center">

                <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg class="text-yellow-400 flex-shrink-0 h-5 w-5" x-description="Heroicon name: solid/star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

              </div>
            </div>
            <div class="flex w-1/3 flex text-yellow-400">
              <div class='ml-auto  flex flex-col items-center justify-center relative'>
                <span class='absolute -left-2 -top-2'>+</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='py-8'>
        <a href="#" class="mt-8 mx-auto w-56 inline-block bg-yellow-600 border border-transparent rounded-md py-2.5 px-4 text-sm font-medium text-black hover:bg-yellow-gold flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>View all packages</span>
        </a>
      </div>
    </section>


  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data() {
    return {
      offers: [
        {
          id: 1,
          category: 'offers',
          name: 'Naivasha/Nakuru',
          price: 18000,
          rating: 8.5,
          image: 'naiv.jpg',
          tag: 'popular'
        },
        {
          id: 2,
          category: 'offers',
          name: 'Samburu',
          price: 18000,
          rating: 8.5,
          image: '1891710E-390D-494B-B064-DD641CB509FE.jpeg',
          tag: 'popular'
        },
        {
          id: 3,
          category: 'offers',
          name: 'Maasai Mara',
          price: 18000,
          rating: 8.5,
          image: 'mara.jpg',
          tag: 'popular'
        },
        {
          id: 4,
          category: 'offers',
          name: 'Zanzibar',
          price: 18000,
          rating: 8.5,
          image: 'zanzy.jpg',
          tag: 'popular'
        },
        {
          id: 5,
          category: 'offers',
          name: 'Coast',
          price: 18000,
          rating: 8.5,
          image: 'coast.jpg',
          tag: 'popular'
        },
        {
          id: 6,
          category: 'offers',
          name: 'Dubai',
          price: 18000,
          rating: 8.5,
          image: 'dd.jpg',
          tag: 'popular'
        }
      ],
      specials: [
        {
          id: 1,
          category: 'offers',
          name: 'Naivasha/Nakuru',
          price: 18000,
          rating: 8.5,
          image: 'naiv.jpg',
          tag: 'Top Rated'
        },
        {
          id: 2,
          category: 'offers',
          name: 'Samburu',
          price: 18000,
          rating: 8.5,
          image: '1891710E-390D-494B-B064-DD641CB509FE.jpeg',
          tag: 'Top Rated'
        },
        {
          id: 3,
          category: 'offers',
          name: 'Maasai Mara',
          price: 18000,
          rating: 8.5,
          image: 'mara.jpg',
          tag: 'Top Rated'
        },
        {
          id: 4,
          category: 'offers',
          name: 'Zanzibar',
          price: 18000,
          rating: 8.5,
          image: 'zanzy.jpg',
          tag: 'Top Rated'
        },
        {
          id: 5,
          category: 'offers',
          name: 'Coast',
          price: 18000,
          rating: 8.5,
          image: 'coast.jpg',
          tag: 'Top Rated'
        },
        {
          id: 6,
          category: 'offers',
          name: 'Dubai',
          price: 18000,
          rating: 8.5,
          image: 'dd.jpg',
          tag: 'Top Rated'
        }
      ]
    }
  },
  methods: {
    requestQuote(offer: Object) {
      // eslint-disable-next-line no-console
      console.log(offer)
    }
  }
})
</script>
<style scoped>
.ribbon_3 {
  position: absolute;
  left: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px;
  height: 75px;
  text-align: right;
}
.ribbon_3 span {
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(
    -45deg);
  -webkit-transform: rotate(
    -45deg);
  width: 100px;
  display: block;
  background: linear-gradient(#f14f3f 0%, #cb4335 100%);
  box-shadow: 0 3px 10px -5px rgb(0 0 0);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .25);
  position: absolute;
  top: 19px;
  left: -21px;
}
.ribbon_3.special span {
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(
    -45deg);
  -webkit-transform: rotate(
    -45deg);
  width: 100px;
  display: block;
  background: #79A70A;
  background: linear-gradient(#9BC90D 0%, #79A70A 100%);
  box-shadow: 0 3px 10px -5px rgb(0 0 0);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .25);
  position: absolute;
  top: 19px;
  left: -21px;
}
.ribbon_3 span::before {
  content: "";
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid #638908;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #638908;
}
.ribbon_3.popular span::before {
  border-left: 3px solid #a3362a;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #a3362a;
}
.ribbon_3 span::after {
  content: "";
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid #638908;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #638908;
}
.ribbon_3.popular span::after {
  border-left: 3px solid transparent;
  border-right: 3px solid #a3362a;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #a3362a;
}
</style>
