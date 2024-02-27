<script setup>
import emailIcon from '/assets/icons/envelope.svg'
import shieldIcon from '/assets/icons/shield_slash.svg'
import {useLoginFormStore} from "../store/useFormStore.js";
import AppBlueButton from "../components/buttons/AppBlueButton.vue";
import defaultFetch from '/composables/tools/defaultFetch.js'

const formStore = useLoginFormStore()

const loginField = reactive({
  email: '',
  password: ''
})
const customFetch = async () => {
  await defaultFetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    body: JSON.stringify(loginField),
    onResponse({response}) {
      if (response.status === 200) {
        console.log('succes')
      }
    }
  })
}

const submitForm = () => {
  formStore.setForm(loginField)
  customFetch()
  loginField.email = ""
  loginField.password = ""
}

const checkEmptyFields = computed(() => !loginField.email || !loginField.password)

</script>

<template>
  <div class="card-container">
    <AppCardTemplate>
      <template #main>
        <form @submit.prevent="submitForm">
          <h2 class="text-[#09090B] font-bold text-[40px] mb-[1.56rem] leading-9">Login to your Account</h2>
          <div class="px-1">
            <div class="flex justify-center items-center mb-8">
              <span class="w-[7.5rem] h-px bg-[#71717A] "></span>
              <p class="text-center mx-auto text-[15px] font-medium text-[#71717A]">with email</p>
              <span class="w-[7.5rem] h-px bg-[#71717A]"></span>
            </div>
            <div class="flex flex-col gap-2.5 mb-[1.56rem]">
              <div>
                <IconField iconPosition="left">
                  <InputIcon
                      :pt="{
              root: {class: ['-translate-y-1/2 m-0']}
              }">
                    <emailIcon class="w-8 h-8"/>
                  </InputIcon>
                  <InputText
                      v-model="loginField.email"
                      :pt="{
                          root: {class: ['input-style']}
                          }"
                      placeholder="Email"
                      type="email"/>
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
                  to="/createAccount">Create an account
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