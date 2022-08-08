import * as Yup from "yup"

export const searchBarSchema = Yup.object({
  search: Yup.string().required(),
})
