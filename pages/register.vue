<script setup>
import emailIcon from '/assets/icons/envelope.svg'
import shieldIcon from '/assets/icons/shield_slash.svg'
import userIcon from '/assets/icons/user.svg'
import AppBlueButton from "../components/buttons/AppBlueButton.vue";
import {useCreateFormStore} from "../store/useCreateFormStore.js";
import {useConfirm} from "primevue/useconfirm";
import fetchInstance from "../composables/tools/fetchInstance.js";
import AppCardTemplate from "../components/card-template/AppCardTemplate.vue";

const confirm = useConfirm()

const createForm = useCreateFormStore()

const router = useRouter()

const createAccountField = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isTermsChecked: false
})

// в Api нет метода для создания user. Это просто пример.

const customFetch = () => {
  fetchInstance('auth/login', {
    method: 'POST',
    body: JSON.stringify(createForm.getCreateForm),
    onResponse({response}) {
      if (response.status === 200) {
        useNuxtApp().$notify.success("Auth is successfully")
      }
      if (response.status === 400) {
        useNuxtApp().$notify.warn("Something went wrong. Check that the entered data is correct.")
      }
    }
  })
}


// Сравнение на совпадение паролей

const comparePasswords = computed(() => createAccountField.password !== createAccountField.confirmPassword)

//Проверка на все пустые поле

const checkEmptyFields = computed(() =>
    !createAccountField.username ||
    !createAccountField.email ||
    !createAccountField.password ||
    !createAccountField.confirmPassword ||
    !createAccountField.isTermsChecked ||
    comparePasswords.value
)

//Проверка на хотябы одно пустое поле

const checkFields = computed(() =>
    createAccountField.username !== '' ||
    createAccountField.email !== '' ||
    createAccountField.password !== '' ||
    createAccountField.confirmPassword !== '' ||
    createAccountField.isTermsChecked
)

//Удаление паролей при возвврате на страницу register

const fillFormFromStore = () => {
  if (createForm.getCreateForm) {
    createAccountField.username = createForm.getCreateForm.username
    createAccountField.email = createForm.getCreateForm.email
    createAccountField.password = ''
    createAccountField.confirmPassword = ''
    createAccountField.isTermsChecked = createForm.getCreateForm.isTermsChecked
  }
}

//Выполнение submit формы

const submitCreateForm = () => {
  createForm.setCreateForm(createAccountField)
  customFetch()
  router.push({
    path: '/otp',
  })
}

//Разрешение на возврат на страницу login

const confirm1 = (event) => {
  if (checkFields.value) {
    confirm.require({
      target: event.currentTarget,
      message: 'Все данные будут утеряны. Вы точно хотите перейти?',
      rejectClass: 'text-green-500 bg-transparent text-green-500',
      acceptClass: 'text-red-500 bg-transparent border-red-500',
      rejectLabel: 'Остаться',
      acceptLabel: 'Перейти',
      accept: () => {
        createForm.resetCreateForm()
        createAccountField.username = ''
        createAccountField.email = ''
        createAccountField.password = ''
        createAccountField.confirmPassword = ''
        createAccountField.isTermsChecked = false
        setTimeout(() => {
          router.push('/login')
        }, 200)
      },
      reject: () => {
        return false
      }
    });
  } else {
    router.push('/login')
  }
};

onMounted(() => {
  fillFormFromStore()
})
</script>

<template>
  <div class="card-container">
    <Title>Registration</Title>
    <AppCardTemplate>
      <template #main>
        <form
            class="max-w-[29.8rem] w-full relative bottom-3"
            @submit.prevent="submitCreateForm">
          <h2 class="text-[#09090B] font-bold text-4xl">Create your account</h2>
          <p class="text-sm text-gray-color mb-6">Unlock all Features!</p>
          <div class="px-3">
            <div class="flex flex-col gap-2.5 mb-6">
              <div>
                <IconField iconPosition="left">
                  <InputIcon
                      :pt="{
              root: {class: ['-translate-y-1/2 m-0']}
              }">
                    <userIcon class="w-8 h-8"/>
                  </InputIcon>
                  <InputText
                      v-model="createAccountField.username"
                      :pt="{
                          root: {class: ['input-style']}
                          }" placeholder="Username"/>
                </IconField>
              </div>
              <div>
                <IconField iconPosition="left">
                  <InputIcon
                      :pt="{
              root: {class: ['-translate-y-1/2 m-0']}
              }">
                    <emailIcon class="w-8 h-8"/>
                  </InputIcon>
                  <InputText
                      v-model="createAccountField.email"
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
                      v-model="createAccountField.password"
                      :pt="{
                          root: {class: ['input-style']},
                          }"
                      placeholder="Password"
                      toggleMask>
                  </Password>
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
                      v-model="createAccountField.confirmPassword"
                      :pt="{
                          root: {class: ['input-style']},
                          }"
                      placeholder="Confirm Password"
                      toggleMask>
                  </Password>
                </IconField>
                <p v-if="comparePasswords" class="text-xs text-red-800">Пароли не совпадают</p>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox
                    v-model="createAccountField.isTermsChecked"
                    :binary="true"
                    input-id="terms"/>
                <label for="terms">Accept
                  <button
                      class="text-second-bg"
                      @click.prevent>terms and conditions
                  </button>
                </label>
              </div>
            </div>
            <AppBlueButton
                :disabled="checkEmptyFields"
                class="mb-5"
                type="submit">sign up
            </AppBlueButton>
            <p class="text-center">You have account?
              <ConfirmDialog></ConfirmDialog>
              <button
                  class="text-button-bg font-semibold"
                  @click.prevent="confirm1($event)">Login now
              </button>
            </p>
          </div>
        </form>
      </template>
      <template #image><img
          alt="Auth."
          class="relative top-10 left-6"
          src="/images/thought_process.png">
      </template>
      <template #title>Join us!</template>
      <template #description>Just go through the boring process of creating an account.</template>
    </AppCardTemplate>
  </div>
</template>