import { PageActions } from "./PageReducer";
import { AuthorizationPageFetch } from "./AsyncActions";
import { AddUserMutation } from "mutations/AddUserAsycActions";
import { AddGroupMutation } from "mutations/AddGroupAsycActions";
import { RemoveGroupMutation } from "mutations/RemoveGroupAsycActions";
import { RemoveUserMutation } from "mutations/RemoveUserAsycActions";

/**
 * This function binds a given dispatch function to several action creators.
 * These include both synchronous actions (related to page, user, and group updates)
 * and asynchronous actions (related to fetching a page or executing mutations).
 *
 * @param {Function} dispatch - Dispatch function provided by Redux.
 * @returns {Object} An object containing several functions that when invoked,
 *                   dispatch certain actions tied to the provided dispatch function.
 */

export const bindPageActions = (dispatch) => {
  return {
    // Store
    // Page
    onPageUpdate: (page) => dispatch(PageActions.page_update(page)),

    // User
    onUserRemove: ({ page, user }) =>
      dispatch(PageActions.page_userRemove({ page, user })),

    onUserAdd: ({ user, page }) =>
      dispatch(PageActions.page_userAdd({ user, page })),

    onUserUpdate: ({ user, page, accesslevel }) =>
      dispatch(PageActions.page_userUpdate({ user, page, accesslevel })),

    // Group
    onGroupRemove: ({ page, group }) =>
      dispatch(PageActions.page_groupRemove({ page, group })),

    onGroupAdd: ({ page, group }) =>
      dispatch(PageActions.page_groupAdd({ page, group })),

    onGroupUpdate: ({ group, page, accesslevel }) =>
      dispatch(PageActions.page_groupUpdate({ group, page, accesslevel })),

    // Async
    pageFetch: (id) => dispatch(AuthorizationPageFetch(id)),

    // Mutations
    onMutationAddUser: ({ userId, page, accesslevel }) => {
      return dispatch(AddUserMutation(userId, page, accesslevel));
    },

    onMutationRemoveUser: ({ userId, page, accesslevel }) => {
      return dispatch(RemoveUserMutation(userId, page, accesslevel));
    },

    onMutationAddGroup: ({ groupId, page, accesslevel }) => {
      return dispatch(AddGroupMutation(groupId, page, accesslevel));
    },

    onMutationRemoveGroup: ({ groupId, page, accesslevel }) => {
      return dispatch(RemoveGroupMutation(groupId, page, accesslevel));
    },
  };
};
