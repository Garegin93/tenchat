const defaultCreateFormValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isTermsChecked: false
}

const defaultFormValue = {
    username: '',
    password: ''
}

export const useLoginFormStore = defineStore('formStore', {
    state: () => {
        const form = defaultFormValue
    },
    getters: {
        getForm: (state) => state.form
    },
    actions: {
        setForm(params) {
            this.form = params
        }
    }
})

export const useCreateFormStore = defineStore('createFormStore', {
    state: () => {
        const createForm = defaultCreateFormValue
    },
    getters: {
        getCreateForm: (state) => state.createForm
    },
    actions: {
        setCreateForm(form) {
            this.createForm = form
        },
        resetCreateForm() {
            this.createForm = defaultCreateFormValue
        }
    }
})

