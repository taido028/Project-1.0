import { PageActions } from "./PageReducer";

import { AuthorizationPageQuery } from "queries/authPageQuery";

/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id
 * @returns promise
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
    // .then(
    //     response => log('received')(response.json()),
    //     error => error
    //     //error
    //     )
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
 * Fetch the page from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id
 * @returns
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
