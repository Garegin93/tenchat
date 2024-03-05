<script setup>
import AppBlueButton from "../components/buttons/AppBlueButton.vue";
import {useCreateFormStore} from "../store/useCreateFormStore.js";
import AppCardTemplate from "../components/card-template/AppCardTemplate.vue";

const createForm = useCreateFormStore()
</script>

<template>
  <div class="card-container">
    <Title>OTP</Title>
    <AppCardTemplate>
      <template #main>
        <form @submit.prevent>
          <div class="mb-6 text-lg">
            <h2 class="text-[#09090B] font-bold text-4xl leading-8">Enter OTP</h2>
            <p>Sent OTP on
              <span class="text-button-bg font-semibold">{{ createForm.getCreateForm?.email }}</span>
            </p>
            <NuxtLink
                class="text-button-bg text-base font-bold"
                to="/register">Change email
            </NuxtLink>
          </div>
          <div>
            <InputOtp
                :length="6"
                :pt="{
          root: {class: ['gap-5']}
                }"
                class="mb-6"
                integerOnly>
              <template #default="{ attrs, events, index }">
                <input
                    class="custom-otp"
                    placeholder="-"
                    type="text"
                    v-bind="attrs"
                    v-on="events"/>
              </template>
            </InputOtp>
          </div>
          <div class="text-center px-4">
            <AppBlueButton>submit</AppBlueButton>
          </div>
        </form>
      </template>
      <template #image>
        <img
            alt="Auth."
            src="/images/secure_login.png"></template>
      <template #title>It's just OTP verification</template>
      <template #description>You are one step away from recovering your password.</template>
    </AppCardTemplate>
  </div>
</template>