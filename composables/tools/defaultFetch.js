const defaultFetch = (request, opts) => {

    const baseHost = useRuntimeConfig().public.baseHost;

    return $fetch(baseHost + request, {
        headers: {'Content-Type': 'application/json'},
        credentials: 'omit',
        ...opts
    })
}

export default defaultFetch