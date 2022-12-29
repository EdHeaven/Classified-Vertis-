<template>
  <footer class="bg-gray-100 text-center lg:text-left border-t-2 border-gray-200">
  <div class="container p-6">
    <div class="grid lg:grid-cols-3 md:grid-cols-3">
      <div class="mb-6 flex justify-center">
        <ul class="list-none mb-0">
          <li>
            <a href="#!" class="block font-sans text-sm font-normal text-gray-400 underline">Лицензионное соглашение</a>
          </li>
          <li>
            <a href="#!" class="block font-sans text-sm font-normal text-gray-400 mt-2 underline">Помощь</a>
          </li>
          <li>
            <a href="#!" class="block font-sans text-sm font-normal text-gray-400 mt-2 underline">Реклама на Vertis</a>
          </li>
        </ul>
      </div>

      <div class="flex flex-col items-center">
        <p class="block font-sans text-sm font-normal text-gray-400 mb-2">
          Vertis в социальных сетях
        </p>
        <div class="mb-6 flex justify-center w-full list-none">
          <ul class="list-none mb-0 flex">
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
      </div>

      <div class="mb-6 flex justify-center">
        <ul class="list-none mb-0">
          <li>
            <p class="block font-sans text-sm font-normal text-gray-400">
              © 2022 Vertis
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
 name: "TheFooter"
}
</script>

<style>

</style>
