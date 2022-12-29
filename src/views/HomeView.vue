<template>
  <body class = "bg-gray-100 h-full">
    <div class="sticky top-0">
      <the-header></the-header>
    </div>
    <div class="h-full bg-gray-100">
      <div class="h-full mx-80">
        <div class="flex">
          <div class="w-3/4">
            <div class="flex justify-between items-center w-full z-0 mb-4">
              <h2 class="text-3xl font-sans font-medium text-black inline-block align-baseline">
                Все объявления
              </h2>
            </div>
            <div class="grid grid-cols-4 gap-4 mb-20">
              <div class="flex" v-for="(ad, key) in ads" :key="key">
                <ad-card  :title="ad.title" :price="ad.price" :imageUrl="ad.imageUrl" >
                </ad-card>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center w-1/4 mt-14 ml-1">
            <div class="h-full flex flex-col items-center mt-10">
              <div>
                <p class="block font-sans text-sm font-normal text-gray-400 mb-4">
                  Vertis в социальных сетях
                </p>
                <ul class="flex justify-center w-full list-none">
                  <li class="mr-4">
                    <a href="https://vk.com/" class="block cursor-pointer">
                      <img src="@/assets/vk.png" alt="vk" height = "32" width = "32">
                    </a>
                  </li>
                  <li>
                    <a href="https://ok.ru/" class="block cursor-pointer">
                      <img src="@/assets/odnok.png" alt="odnok" height = "31" width = "31">
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 flex flex-col items-center">
                <a href="#!" class="block font-sans text-sm font-normal text-gray-400 underline">Лицензионное соглашение</a>
                <a href="#!" class="block font-sans text-sm font-normal text-gray-400 mt-2 underline">Реклама на Vertis</a>
                <a href="#!" class="block font-sans text-sm font-normal text-gray-400 mt-2 underline">Помощь</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <the-footer/>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import AdCard from "@/components/AdCard.vue"
import TheFooter from "@/components/TheFooter.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    AdCard,
    TheFooter
  },
    mounted() {
      this.fetchAds()
  },
  computed: {
    ...mapGetters({
      ads: 'ads',
    }),
  },
  methods: {
    ...mapActions({
      fetchAds: 'fetchAds',
    })
  },
}
</script>
