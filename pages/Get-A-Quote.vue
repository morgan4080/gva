<template>
  <main class="relative bg-white">
    <!-- Header -->
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1546803309-1f27c8ee1652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="">
      </div>
    </div>
    <div class="max-w-7xl mx-auto overflow-hidden pt-12 sm:pt-36 px-6 lg:px-16">

      <span class="text-yellow-600">Great vacation adventures & tours</span>
      <h1 class="text-5xl font-extrabold tracking-tight pt-1">Get a Quote</h1>

    </div>

    <!-- Contact Section -->
    <div class="relative py-8 px-4 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-12 lg:grid lg:grid-cols-2">
      <div class="lg:pl-8">
        <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
              <div class="mt-1">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
              <div class="mt-1">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md">
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                <span id="phone-description" class="text-sm text-gray-500">Optional</span>
              </div>
              <div class="mt-1">
                <input type="text" name="phone" id="phone" autocomplete="tel" aria-describedby="phone-description" class="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md">
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="how-can-we-help" class="block text-sm font-medium text-gray-700">How can we help you?</label>
                <span id="how-can-we-help-description" class="text-sm text-gray-500">Max. 500 characters</span>
              </div>
              <div class="mt-1">
                <textarea id="how-can-we-help" name="how-can-we-help" aria-describedby="how-can-we-help-description" rows="2" class="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div class="text-right sm:col-span-2">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'GetQuote'
}
</script>

<style scoped>

</style>
