import { FormikHelpers } from "formik"

import { SearchFields, discogsSearch } from "@src/api"


export async function handleSearchBarSubmit(values: SearchFields, helpers: FormikHelpers<SearchFields>): Promise<void> {
  const { setSubmitting } = helpers

  const res = await discogsSearch(values)
  console.log(res)

  setSubmitting(false)
}
