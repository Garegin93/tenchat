export const useLoginFormStore = defineStore('formStore', {
    state: () => {
        return {
            form: {
                username: '',
                password: '',
            },
            isLoading: false
        }
    },
    getters: {
        getForm: (state) => {
            return state.form
        },
        getIsLoading: (state) => {
            return state.isLoading
        }
    },
    actions: {
        setForm(params) {
            this.form = params
        },
        setIsLoading(params) {
            this.isLoading = params
        }
    }
})