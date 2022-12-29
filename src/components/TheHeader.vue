<template>
  <header class="bg-white">
    <div class="container mx-auto">
      <div class="flex py-4 justify-around mx-28">
        <div class="flex">
          <div>
            <a href="/">
              <img class="h-9 w-full" src="@/assets/vertis_logo.png" alt="vertis_logo.png" border="0">
            </a>
          </div>
          <div class="ml-4 dropdown relative">
            <button type="button" class="inline-block dropdown-toggle px-6 py-1.5 bg-blue-800 text-white font-medium text-sm leading-tight rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Категории
            </button>
            <ul
              class="
                dropdown-menu
                min-w-max 
                absolute
                bg-white
                text-base
                z-50
                float-left
                py-2
                list-none
                text-left
                rounded-lg
                shadow-lg
                mt-1
                hidden
                m-0
                bg-clip-padding
                border-none
              "
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "
                  href="/mobilephones"
                  >Телефоны и планшеты</a
                >
              </li>
              <li>
                <a
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "
                  href="#"
                  >Для дома и дачи</a
                >
              </li>
              <li>
                <a
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "
                  href="#"
                  >Стройматериалы и инструменты</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center basis-1/2">
          <div class="w-full">
            <div class="input-group relative flex items-stretch">
              <input type="search" class="form-control relative flex-auto block w-full px-3 py-1 text-sm font-medium text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" placeholder="Поиск по обьявлениям" aria-label="Search" aria-describedby="button-addon3">
              <button class="btn inline-block px-6 py-1.5 bg-blue-800 text-white font-medium text-sm leading-tight rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon3">Найти</button>
            </div>
          </div>
        </div>
        <div class="flex">
          <div>
            <button type="button" class="inline-block px-6 py-1.5 bg-teal-500 text-white font-medium text-sm leading-tight rounded-xl shadow-md hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-lg transition duration-150 ease-in-out">
              Разместить объявление
            </button>
          </div>
          <div class="ml-4">
            <a href="auth">
              <button type="button" class="inline-block px-6 py-1.5 bg-blue-800 text-white font-medium text-sm leading-tight rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out">
              Войти
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>
