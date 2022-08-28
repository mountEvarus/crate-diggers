import * as React from "react"

import { Box } from "@mui/material"
import { Field, Form, Formik } from "formik"

import { SearchFields, SearchType  } from "@src/api"

import { ErrorMessage } from "./error-message"
import { searchBarSchema } from "./schema"
import { useStyles } from "./search-bar.styles"
import { useHandleSearchBarSubmit } from "./submit"

export function SearchBar(): JSX.Element {
  const { buttonStyles, fieldBoxStyles, outerBoxStyles } = useStyles()
  const { handleSubmit } = useHandleSearchBarSubmit()
  
  const initialValues: SearchFields = {
    search: "",
    type: SearchType.Title,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={searchBarSchema}
    >
      {({ errors, isSubmitting }) => {
        return (
          <>
            <Box component={Form} sx={outerBoxStyles}>
              <Box sx={fieldBoxStyles}>
                <Box component="label" htmlFor="search">Search:</Box>
                <Field name="search" />
              </Box>
              <Box sx={fieldBoxStyles}>
                <Box component="label" htmlFor="type">Search Type:</Box>
                <Field as="select" name="type">
                  <Box component="option" value={SearchType.Title}>Title</Box>
                  <Box component="option" value={SearchType.Artist}>Artist</Box>
                </Field>
              </Box>
              <Box 
                component="button"
                disabled={isSubmitting}
                sx={buttonStyles}
                type="submit">
              Go!
              </Box>
              <ErrorMessage error={errors.search} />
              <ErrorMessage error={errors.type} />
            </Box>
          </>
        )
      }}
    </Formik>
  )
}
