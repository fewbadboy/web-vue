import { MaybeRefOrGetter, Ref, ref, toValue, watchEffect } from "vue"

export interface ResponseFetch {
  data: any,
  error: Ref<Error | null>
}

export function useFetch(url: MaybeRefOrGetter<string>): ResponseFetch {
  const data = ref(null)
  const error = ref(null)

  const fetchData = () => {
    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((error) => (error.value = error))
  }

  watchEffect(() => {
    fetchData()
  })

  return {
    data,
    error
  }
}