<template>
  <main class='min-h-screen'>
    <div class="relative bg-gray-900">
      <!-- Decorative image and overlay -->
      <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
        <img src="~/static/E0BE2F47-B424-463C-8BEC-5C89056F94C1.jpeg" alt="" class="w-full h-full object-center object-cover">
      </div>
      <div aria-hidden="true" class="absolute inset-0 bg-black opacity-40"></div> <!--overlay color-->

      <!-- Navigation -->

      <div class="relative max-w-4xl mx-auto py-32 px-6 flex flex-col items-center justify-center text-center sm:py-64 lg:px-0 min-h-screen">
        <h1 class="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Great Vacation Adventures</h1>
        <p class="mt-4 text-xl text-white">It is said East Africa is experienced as much by the senses as well as the eye. There is no doubt that it is one of the most colourful and dynamic destinations in the world where one should expect the unexpected.</p>
        <a href="#" class="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">Request Quote</a>
      </div>
    </div>
    <section aria-labelledby="products-heading" class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <h2 id="collections-heading" class="text-2xl font-extrabold text-gray-900">Destinations</h2>

      <div class="-mx-px border-l mt-6 border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3">

        <div v-for='offer in offers' :key='offer.id' class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
          <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg" alt="TODO" class="w-full h-full object-center object-cover">
          </div>
          <div class="pt-10 pb-4 text-center">
            <h3 class="text-sm font-medium text-gray-900">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ offer.name }}
              </a>
            </h3>
            <div class="mt-3 flex flex-col items-center">
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

          </div>
        </div>

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
          name: 'Samburu',
          price: 18000,
          rating: 8.5
        },
        {
          id: 1,
          category: 'offers',
          name: 'Maasai Mara',
          price: 18000,
          rating: 8.5
        },
        {
          id: 1,
          category: 'offers',
          name: 'Tsavo',
          price: 18000,
          rating: 8.5
        },
        {
          id: 1,
          category: 'offers',
          name: 'Diani',
          price: 18000,
          rating: 8.5
        },
        {
          id: 1,
          category: 'offers',
          name: 'Mombasa',
          price: 18000,
          rating: 8.5
        },
        {
          id: 1,
          category: 'offers',
          name: 'Nairobi',
          price: 18000,
          rating: 8.5
        }
      ]
    }
  }
})
</script>
