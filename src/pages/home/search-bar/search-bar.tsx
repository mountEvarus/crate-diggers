import * as React from "react"

import { ErrorMessage, Field, Form, Formik } from "formik"

import { SearchFields, SearchType  } from "@src/api"

import { searchBarSchema } from "./schema"
import { handleSearchBarSubmit } from "./submit"

export function SearchBar(): JSX.Element {
  
  const initialValues: SearchFields = {
    search: "",
    type: SearchType.Title,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSearchBarSubmit}
      validationSchema={searchBarSchema}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <ErrorMessage name="search" component="div" />
            <Field name="search" />
            <ErrorMessage name="type" component="div" />
            <Field as="select" name="type">
              <option value={SearchType.Title}>Title</option>
              <option value={SearchType.Artist}>Artist</option>
            </Field>
            <button disabled={isSubmitting} type="submit">Go!</button>
          </Form>
        )
      }}
    </Formik>
  )
}
