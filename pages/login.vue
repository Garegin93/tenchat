<script setup>
import emailIcon from '/assets/icons/envelope.svg'
import shieldIcon from '/assets/icons/shield_slash.svg'
import {useLoginFormStore} from "../store/useLoginFormStore.js";
import AppBlueButton from "../components/buttons/AppBlueButton.vue";
import AppCardTemplate from "../components/card-template/AppCardTemplate.vue";
import fetchInstance from "/composables/tools/fetchInstance.js";

const formStore = useLoginFormStore()

const loginField = reactive({
  username: '',
  password: '',
})

//Запрос на создание пользователя

const customFetch = () => {

  formStore.setIsLoading(true)

  fetchInstance('auth/login', {
    method: 'POST',
    body: {
      username: toRaw(formStore.getForm.username),
      password: toRaw(formStore.getForm.password),
    },
    onResponse({response}) {
      if (response.status === 200) {
        useNuxtApp().$notify.success("Auth is successfully")
        console.log(response._data.token)
      }
      if (response.status === 400) {
        useNuxtApp().$notify.warn("Login or Password is incorrect")
      }
      formStore.setIsLoading(false)
    }
  })
}

//Выполнение submit формы

const submitForm = () => {
  formStore.setForm(loginField)
  customFetch()
}

//Проверка на пустые поля формы

const checkEmptyFields = computed(() => !loginField.username || !loginField.password || formStore.getIsLoading)

</script>

<template>
  <div class="card-container">
    <Title>Login</Title>
    <AppCardTemplate>
      <template #main>
        <form @submit.prevent="submitForm">
          <h2 class="text-[#09090B] font-bold text-4xl mb-6 leading-9">Login to your Account</h2>
          <div class="px-1">
            <div class="flex justify-center items-center mb-8">
              <span class="w-32 h-px bg-gray-color"></span>
              <p class="text-center mx-auto text-sm font-medium text-gray-color">with email</p>
              <span class="w-32 h-px bg-gray-color"></span>
            </div>
            <div class="flex flex-col gap-2.5 mb-6">
              <div>
                <IconField iconPosition="left">
                  <InputIcon
                      :pt="{
              root: {class: ['-translate-y-1/2 m-0']}
              }">
                    <emailIcon class="w-8 h-8"/>
                  </InputIcon>
                  <InputText
                      v-model="loginField.username"
                      :pt="{
                          root: {class: ['input-style']}
                          }"
                      placeholder="Email"/>
                </IconField>
              </div>
              <div class="custom-password">
                <IconField iconPosition="left">
                  <InputIcon
                      :pt="{
              root: {class: ['-translate-y-1/2 m-0']}
              }">
                    <shieldIcon class="w-8 h-8"/>
                  </InputIcon>
                  <Password
                      v-model="loginField.password"
                      :pt="{
                          root: {class: ['input-style']},
                          }"
                      placeholder="Password"
                      toggleMask>
                  </Password>
                </IconField>
              </div>
            </div>
            <AppBlueButton
                :disabled="checkEmptyFields"
                class="mb-5"
                type="submit">
              log in
            </AppBlueButton>
            <p class="text-center">Don’t have account?
              <NuxtLink
                  class="text-button-bg font-semibold"
                  to="/register">Create an account
              </NuxtLink>
            </p>
          </div>
        </form>
      </template>
      <template #image><img alt="Auth." src="/images/auth.png"></template>
      <template #title>Connect with any device.</template>
      <template #description>Everything you need is an internet connection.</template>
    </AppCardTemplate>
  </div>
</template>