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
              <nuxt-link to="/blogs" :class="{ 'text-black' : som , 'text-black' : !som }" class="uppercase mx-2 tracking-wide font-semibold py-3 px-4 hover:text-yellow-green" >
                Contact Us
              </nuxt-link>
              <nuxt-link to="/offers" :class="{ 'text-black' : som , 'text-black' : !som }" class="uppercase mx-2 tracking-wide font-semibold py-3 px-4 hover:text-yellow-green" >
                Offers
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
                  <div v-if="showSubMenu" id="evOfInt"  class="absolute right-0 -mr-3 pt-5 transform px-2 w-screen lg:mt-2 sm:px-0 lg:ml-0 lg:left-1/2 capitalize" style="max-width: 15rem;" @mouseleave="showSubMenu0 = false" >
                    <div class="rounded-lg shadow-2xl">
                      <div class="rounded-lg shadow-xl">
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6 bg-gradient-to-br from-yellow-gold to-yellow-600" >
                          <a href="javascript:void(0)" class="group -m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black flex flex-row items-center text-base -mb-1 transition ease-in-out duration-150" @mouseover="showSubMenu2 = false;showSubMenu1 = true;showSubMenu3 = false;" >
                                Academic Writing
                                <svg class="ml-auto h-5 w-5 transform -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                              </p>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-200"
                              leave-active-class="transition ease-in duration-150"
                              enter-class="opacity-0 translate-y-1"
                              enter-to-class="opacity-100 translate-y-0"
                              leave-class="opacity-100 translate-y-0"
                              leave-to-class="opacity-0 translate-y-1"
                            >
                              <div v-if="showSubMenu1" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:translate-x-full capitalize" style="max-width: 15rem;" @mouseleave="showSubMenu1 = false" >
                                <div class="rounded-lg shadow-2xl">
                                  <div class="rounded-lg shadow-xl overflow-hidden">
                                    <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6 bg-gradient-to-br from-yellow-gold to-yellow-600" >
                                      <nuxt-link to="/service/academic/college-papers" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            College Papers
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/articles" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Articles
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/personal-statement" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Personal statement
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/literature-review" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Literature review
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/coursework" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Coursework
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/case-study" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Case study
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/term-papers" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Term Paper
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/speech" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Speech
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/presentation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Presentation
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/academic/lab-reports" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Lab report
                                          </p>
                                        </div>
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </transition>
                          </a>
                          <a href="javascript:void(0)" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p class="transform hover:translate-x-2 hover:text-white flex flex-row items-center leading-6 text-black text-base -mb-1 transition ease-in-out duration-150" @mouseover="showSubMenu2 = true;showSubMenu1 = false;showSubMenu3 = false;" >
                                Essay writing
                                <svg class="ml-auto h-5 w-5 transform -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                              </p>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-200"
                              leave-active-class="transition ease-in duration-150"
                              enter-class="opacity-0 translate-y-1"
                              enter-to-class="opacity-100 translate-y-0"
                              leave-class="opacity-100 translate-y-0"
                              leave-to-class="opacity-0 translate-y-1"
                            >
                              <div v-if="showSubMenu2" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:translate-x-full capitalize" style="max-width: 15rem;" @mouseleave="showSubMenu2 = false" >
                                <div class="rounded-lg shadow-2xl">
                                  <div class="rounded-lg shadow-xl overflow-hidden">
                                    <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6 bg-gradient-to-br from-yellow-gold to-yellow-600" >
                                      <nuxt-link to="/service/essay/argumentative" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Argumentative Essay
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/essay/descriptive" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Descriptive Essay
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/essay/narrative" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Narrative Essay
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/essay/scholarship" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Scholarship Essay
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/essay/mba" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            MBA Essay
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/essay/persuasive" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Persuasive Essay
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/essay/admission" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Admission Essay
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/essay/literature" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Literature Essay
                                          </p>
                                        </div>
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </transition>
                          </a>
                          <nuxt-link to="/service/thesis" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150" @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" >
                                Thesis writing
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/service/research-paper" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150" @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" >
                                Research paper writing
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/service/dissertation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150" @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" >
                                Dissertation writing
                              </p>
                            </div>
                          </nuxt-link>
                          <a href="javascript:void(0)" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p class="transform hover:translate-x-2 hover:text-white flex flex-row items-center leading-6 text-black text-base -mb-1 transition ease-in-out duration-150" @mouseover="showSubMenu2 = false;showSubMenu1 = false;showSubMenu3 = true;" >
                                Editing work
                                <svg class="ml-auto h-5 w-5 transform -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                              </p>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-200"
                              leave-active-class="transition ease-in duration-150"
                              enter-class="opacity-0 translate-y-1"
                              enter-to-class="opacity-100 translate-y-0"
                              leave-class="opacity-100 translate-y-0"
                              leave-to-class="opacity-0 translate-y-1"
                            >
                              <div v-if="showSubMenu3" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:translate-x-full capitalize" style="max-width: 15rem;" @mouseleave="showSubMenu3 = false" >
                                <div class="rounded-lg shadow-2xl">
                                  <div class="rounded-lg shadow-xl overflow-hidden">
                                    <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6  bg-gradient-to-br from-yellow-gold to-yellow-600" >
                                      <nuxt-link to="/service/editing/essay" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Essay editing
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/editing/thesis" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Thesis editing
                                          </p>
                                        </div>
                                      </nuxt-link>
                                      <nuxt-link to="/service/editing/dissertation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                        <div class="flex-1 space-y-1">
                                          <p class="transform hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                            Dissertation editing
                                          </p>
                                        </div>
                                      </nuxt-link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </transition>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </transition>

              </nuxt-link>

              <nuxt-link to="/order" class="uppercase bg-black inline-block mx-2 tracking-wide font-semibold py-3 px-4 text-white rounded-full transform hover:scale-105 transition ease-in-out duration-100" style="border-color: #49544e;">
                Get Quote
              </nuxt-link>

              <div v-show="!$auth.loggedIn" class="relative flex justify-center text-left">
                <button class="uppercase inline-flex items-center mx-2 text-black tracking-wide font-semibold py-3 px-4 bg-white text-black rounded-full transform hover:scale-105 transition ease-in-out duration-100" @click="showDropdown" >
                  <span>My Account</span>
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
                  <div v-show="dropDownOpen" class="absolute right-0 -mr-3 px-2 w-screen mt-16 sm:px-0 lg:ml-0 capitalize" style="max-width: 15rem;"  @mouseleave="showDropdown" >
                    <div class="rounded-lg shadow-2xl">
                      <div class="rounded-lg shadow-xl">
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6 bg-gradient-to-br from-yellow-gold to-yellow-600" >
                          <nuxt-link to="/login" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150" role="menuitem">
                            <div class="flex-1 space-y-1">
                              <p class="transform font-semibold hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                Log In
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/register" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150" role="menuitem">
                            <div class="flex-1 space-y-1">
                              <p class="transform font-semibold hover:translate-x-2 hover:text-white leading-6 text-black text-base -mb-1 transition ease-in-out duration-150">
                                Register
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
              <div  v-show="$auth.loggedIn" class="relative flex justify-center text-left" @mouseleave="showDropdown">
                <button type="button" class="capitalize inline-flex items-center mx-2  font-semibold px-1 pr-3 bg-white text-black rounded-full transform hover:scale-105 transition ease-in-out duration-100" @mouseenter="showDropdown" @:click="$router.push('/profile')">
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
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6 bg-gradient-to-br from-yellow-gold to-yellow-600" >
                          <div class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150" role="menuitem" @click="$router.push('/profile');showDropdown;">
                            <div class="flex-1 space-y-1">
                              <div class="transform cursor-pointer font-semibold hover:translate-x-2 hover:text-white leading-6 text-left text-black text-base -mb-1 transition ease-in-out duration-150">
                                Profile
                              </div>
                            </div>
                          </div>
                          <div class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150" role="menuitem" @click="logout">
                            <div class="flex-1 space-y-1">
                              <div class="transform cursor-pointer font-semibold hover:translate-x-2 hover:text-white leading-6 text-left text-black text-base -mb-1 transition ease-in-out duration-150">
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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Logo from "~/components/Logo.vue";


export default {
  components: {
    Logo
  },
  data() {
    return {
      dropDownOpen: false,
      showSubMenu0: false,
      showSubMenu1: false,
      showSubMenu2: false,
      showSubMenu3: false,
      showMobileMenu: false,
      homeIs: false,
      som: false,
      services: [

      ],
      resources: [

      ],
      mobile_menu: [
        {
          id: 1,
          name: 'About Us',
          href: '/about'
        },
        {
          id: 2,
          name: 'Contact Us',
          href: '/about'
        },
        {
          id: 3,
          name: 'Offers',
          href: '/about'
        },
        {
          id: 4,
          name: 'Services',
          href: '/about'
        }
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
    }
  },

};
</script>

<style scoped>
</style>
