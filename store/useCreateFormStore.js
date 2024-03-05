const defaultCreateFormValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isTermsChecked: false
}

export const useCreateFormStore = defineStore('createFormStore', {
    state: () => {
        return {
            createForm: defaultCreateFormValue
        }
    },
    getters: {
        getCreateForm: (state) => {
            return state.createForm
        }
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