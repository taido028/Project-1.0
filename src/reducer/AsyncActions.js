import { PageActions } from "./PageReducer";

import { AuthorizationPageQuery } from "queries/authPageQuery";

/**
 * Function that performs a GraphQL request and updates the state of the page in the Redux store.
 *
 * @param {string} id - The id of the page.
 * @param {function} query - The GraphQL query function.
 * @param {function} resultselector - The function to select the desired data from the response.
 * @param {function} dispatch - The Redux dispatch function.
 * @param {function} getState - The Redux getState function.
 * @returns {Promise} A promise that resolves to the updated state of the page.
 */

export const AuthorizationPageFetchHelper = (
  id,
  query,
  resultselector,
  dispatch,
  getState
) => {
  const log = (text) => (p) => {
    //console.log(text);
    //console.log(JSON.stringify(p));
    return p;
  };
  const p = query(id)
    .then(
      (response) => response.json(),
      (error) => error
    )

    .then((i) => log("incomming")(i))
    .then(
      (json) => log("converted")(resultselector(json)),
      (error) => error
    )
    .then(
      (json) => log("dispatching")(dispatch(PageActions.page_update(json))),
      (error) => error
    );
  return p;
};
/**
 * Function that fetches the page data from the server and dispatches an action to update the state of the page in the Redux store.
 *
 * @param {string} id - The id of the page.
 * @returns {function} A Redux thunk action that fetches the page data and dispatches an action to update the state of the page.
 */

export const AuthorizationPageFetch = (id) => (dispatch, getState) => {
  const pageSelector = (json) => json.data.authorizationById;
  const bodyfunc = async () => {
    let pageData = await AuthorizationPageFetchHelper(
      id,
      AuthorizationPageQuery,
      pageSelector,
      dispatch,
      getState
    );
    console.log(pageData);
    return pageData;
  };
  return bodyfunc();
};
