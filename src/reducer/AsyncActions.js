import { PageActions } from "./PageReducer";
<<<<<<< HEAD
import { AuthorizationPageQuery } from "queries/Query";
import { UserActions } from "./UsersReducer";
import { UserQuery } from "queries/UserQuery";
=======

import { AuthorizationPageQuery } from "queries/authPageQuery";
>>>>>>> ca40bb74ad85e0a9ca93be70022ce9b2640962f4

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
    console.log(text);
    console.log(JSON.stringify(p));
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

export const GroupAsyncUpdate = (group) => (dispatch, getState) => {
  const groupMutationJSON = (group) => {
    return {
      query: `mutation ($id: ID!, $name: String!, $lastchange: DateTime!) {
                groupUpdate(group: {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  group {
                    id
                    name
                    lastchange
                  }
                }
              }`,
      variables: group,
    };
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    redirect: "follow", // manual, *follow, error
    body: JSON.stringify(groupMutationJSON(group)),
  };

  return (
    fetch("/api/gql", params)
      //return authorizedFetch('/api/gql', params)
      .then((resp) => resp.json())
      .then((json) => {
        const msg = json.data.groupUpdate.msg;
        if (msg === "fail") {
          console.log("Update selhalo");
        } else {
          //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
          const lastchange = json.data.groupUpdate.group.lastchange;
          dispatch(
            PageActions.group_update({ ...group, lastchange: lastchange })
          );
        }
        return json;
      })
  );
};

////////User Actions

export const UserFetchHelper = (
  id,
  query,
  resultselector,
  dispatch,
  getState
) => {
  const log = (text) => (p) => {
    console.log(text);
    console.log(JSON.stringify(p));
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
      (json) => log("dispatching")(dispatch(UserActions.users_update(json))),
      (error) => error
    );

  return p;
};

export const UserFetch = (id) => (dispatch, getState) => {
  const userSelector = (json) => json.data.userById;
  const bodyfunc = async () => {
    let userData = await UserFetchHelper(
      id,
      UserQuery,
      userSelector,
      dispatch,
      getState
    );
    console.log(userData);
    return userData;
  };
  return bodyfunc();
};
