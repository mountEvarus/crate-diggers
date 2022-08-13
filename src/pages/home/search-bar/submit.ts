import { FormikHelpers } from "formik"

import { SearchFields, discogsSearch } from "@src/api"
import { useMusicResultContext } from "@src/providers"
import { instanceOfMessagePayload } from "@src/typeguards"

type HandleSearchBarSubmit = {
  handleSubmit: (values: SearchFields, helpers: FormikHelpers<SearchFields>) => Promise<void>
}

export function useHandleSearchBarSubmit(): HandleSearchBarSubmit {
  const { setMusicResult } = useMusicResultContext()

  async function handleSubmit(values: SearchFields, helpers: FormikHelpers<SearchFields>): Promise<void> {
    const res = await discogsSearch(values)
    const { setSubmitting } = helpers

    if (instanceOfMessagePayload(res)) {
      console.error(res)
      
    } else {
      setMusicResult(res)
    }
  
    setSubmitting(false)
  }

  return { handleSubmit }
}
