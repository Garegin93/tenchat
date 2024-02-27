const defaultFetch = (request, opts) => {
    return $fetch(request, {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        ...opts
    })
}

export default defaultFetch