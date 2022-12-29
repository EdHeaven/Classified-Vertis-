<template>
  <form @submit.prevent="regSubmit">
  <label class="form-label inline-block mb-2 text-gray-700">Регистрация</label>
  <div class="grid grid-cols-2 gap-4">
    <div class="form-group mb-6">
      <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-xl
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
        aria-describedby="emailHelp123" placeholder="Имя" v-model="name">
    </div>
    <div class="form-group mb-6">
      <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-xl
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
        aria-describedby="emailHelp124" placeholder="Фамилия" v-model="surname">
    </div>
  </div>
  <div class="form-group mb-6">
    <input type="email" class="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded-xl
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
      placeholder="Адрес почты" v-model="email">
  </div>
  <div class="form-group mb-6">
    <input
      type="tel"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-xl
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleTel0"
      placeholder="Номер телефона" v-model="phone">
  </div>
  <div class="form-group mb-6">
    <input type="password" class="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded-xl
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
      placeholder="Пароль" v-model="password">
  </div>
  <button @click="signup" type="submit" class="
    w-full
    px-6
    py-2.5
    bg-blue-800
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded-xl
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out">Зарегестрироваться</button>
    <p class="text-gray-800 mt-6 text-center">Уже есть аккаунт? <a href="/auth"
      class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Войти</a>
    </p>
</form>
</template>

<script>
export default {
  data() {
    return{
      name: '',
      surname: '',
      email: '',
      phone: '',
      password: ''
    }
  },
  methods:{
    regSubmit() {
      this.$emit('onFormSubmit', this.return)
    }
  }
}
</script>

<style>

</style>
