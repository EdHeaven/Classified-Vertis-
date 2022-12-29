<template>
  <div class="">
    <div class="">
      <div class="rounded-lg shadow-lg bg-white max-sm:w-full">
        <div class="h-56 w-56">
          <a href="#!">
            <img class="object-cover rounded-t-lg h-full w-full" :src="imageUrl" alt=""/>
          </a>          
        </div>
        <div>
          <figure>
            <div class="px-4 pt-2 flex justify-start items-center">
              <div class="max-w-full flex flex-row flex-nowrap items-center overflow-hidden text-ellipsis">
                <p class="text-gray-900 text-xl font-medium font-sans min-w-0 flex-shrink-0">
                  <span class="max-w-full whitespace-nowrap overflow-hidden text-ellipsis flex flex-row flex-nowrap items-center">
                    <span>{{ price }}</span>
                    &nbsp;
                    <span>₽</span>
                  </span>
                </p>
              </div>
            </div>
          </figure>
          <figcaption class="max-w-full whitespace-nowrap overflow-hidden text-ellipsis flex flex-row flex-nowrap justify-between px-4 pb-4 w-full">
            <span class="block font-sans font-normat text-base">{{ title }}</span>
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdCard',
  props:{
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
}
</script>
