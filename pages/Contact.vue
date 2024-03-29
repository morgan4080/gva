<template>
  <div class="relative bg-white pt-32">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Get in touch
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            We're a tours company founded on passion: a passion for people, a passion for wildlife and a passion for the magnificent landscapes around the World.
          </p>
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>Parklands</p>
                <p>Nairobi, Kenya</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <svg class="flex-shrink-0 h-6 w-6 text-gray-400" x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="ml-3">
                  +254 715 782881
                </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <svg class="flex-shrink-0 h-6 w-6 text-gray-400" x-description="Heroicon name: outline/mail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="ml-3">
                  greatvacationadventurestravel@gmail.com
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form class="grid grid-cols-1 gap-y-6" @submit.prevent='makeContact' >
            <div>
              <label for="full-name" class="sr-only">Full name</label>
              <input id="full-name" v-model='contactForm.fullName' type="text" name="full-name" autocomplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md" placeholder="Full name" required>
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input id="email" v-model='contactForm.email' name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md" placeholder="Email" required>
            </div>
            <div>
              <label for="phone" class="sr-only">Phone</label>
              <input id="phone" v-model='contactForm.phone' type="text"  name="phone" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md" placeholder="Phone" required>
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea id="message" v-model='contactForm.message' rows="4" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border border-gray-300 rounded-md" placeholder="Message" required></textarea>
            </div>
            <div>
              <p v-if='response.status' :class='{"text-green-400" : response.status === 200, "text-red-600" : response.status === 405 }' class="text-xs font-medium text-red-600">
                {{ response.message }}
              </p>
            </div>
            <div>
              <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                <svg v-show='loading' class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      contactForm: {
        fullName: null,
        email: null,
        phone: null,
        message: null
      },
      response: {
        status: null,
        message: null
      },
      loading: false
    }
  },
  methods: {
    ...mapActions(['contactUs']),
    async makeContact() {
      this.loading = true

      const context = 'contactForm'

      const formData = new FormData();

      formData.append('fullName', this.contactForm.fullName)
      formData.append('email', this.contactForm.email)
      formData.append('phone', this.contactForm.phone)
      formData.append('message', this.contactForm.message)

      const payload = {
        context,
        formData
      }

      try {
        const data = await this.contactUs(payload)
        // eslint-disable-next-line no-console
        console.log("response data", data)
        this.response.message = "Email sent successfully"
        this.response.status = 200
      } catch (e) {
        this.response.message = "Email not sent"
        this.response.status = 405
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
