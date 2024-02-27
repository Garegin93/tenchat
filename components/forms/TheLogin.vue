<script lang="js" setup>
import emailIcon from '/assets/icons/envelope.svg'
import shieldIcon from '/assets/icons/shield_slash.svg'
import AppBlueButton from "../buttons/AppBlueButton.vue";

const loginField = ref({
  email: '',
  password: ''
})
</script>

<template>
  <AppCardTemplate>
    <template #main>
      <form class="leading-6" @submit.prevent>
        <h2 class="text-[#09090B] font-bold text-[40px] mb-[1.56rem]">Login to your Account</h2>
        <div class="px-1">
          <div class="flex justify-center items-center mb-8">
            <span class="w-[120px] h-px bg-[#71717A] "></span>
            <p class="text-center mx-auto text-[15px] font-medium leading-6 text-[#71717A]">with email</p>
            <span class="w-[120px] h-px bg-[#71717A]"></span>
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
                          root: {class: ['w-full rounded-[10px] h-[64px] p-2.5 pl-[3.125rem] border-2 border-[#8098f9] border-opacity-50 bg-[#8098f9] bg-opacity-10']}
                          }" placeholder="Email"/>
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
                          root: {class: ['w-full rounded-[10px] h-[64px] p-2.5 pl-[3.125rem] pr-5 border-2 border-[#8098f9] border-opacity-50 bg-[#8098f9] bg-opacity-10']},
                          }"
                    placeholder="Password"
                    toggleMask>
                </Password>
              </IconField>
            </div>
          </div>
          <AppBlueButton class="mb-5">Log in</AppBlueButton>
          <p class="text-center">Don’t have account?
            <button class="text-button-bg font-semibold">Create an account</button>
          </p>
        </div>
      </form>
    </template>
    <template #image><img alt="Auth." src="/images/auth.png"></template>
    <template #title>Connect with any device.</template>
    <template #description>Everything you need is an internet connection.</template>
  </AppCardTemplate>
</template>

<style scoped>

</style>