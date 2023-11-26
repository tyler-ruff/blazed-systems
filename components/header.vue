<script setup lang="ts">
    import { siteConfig } from "~/config/site";
    import { navMenu } from "~/config/menu";
    const route = useRoute();
</script>
<template>
    <header class="bg-white select-none">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <nuxt-link class="block text-teal-600" v-bind:title="siteConfig.name" href="/">
              <span class="sr-only">Home</span>
              <img src="/images/beaker-red.png" width="35" height="35" class="hover:opacity-75" />
            </nuxt-link>
          </div>
          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li v-for="(item, index) in navMenu.nav" :key="index">
                    <nuxt-link v-bind:to="item.href" class="transition hover:text-gray-500/75" :style="{'color': route.path === item.href ? '#a83238' : '#858585'}">
                        {{ item.label }}
                    </nuxt-link>
                </li>
              </ul>
            </nav>
            <!--
            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <nuxt-link
                    class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring ring-red-400 active:text-opacity-75"
                    href="/login"
                >
                    <span
                    class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                    >
                    Login
                    </span>
                </nuxt-link>
              </div>
              <div class="sm:flex sm:gap-4">
                <nuxt-link href="/register" class="btn bg-red-600 hover:bg-red-700 active:ring focus:ring ring-gray-400 text-white rounded-full">
                    Sign Up
                </nuxt-link>
              </div>
              <div class="block md:hidden">
                <button
                  class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            -->
          </div>
        </div>
      </div>
    </header>
  </template>