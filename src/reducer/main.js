import { PageActions } from "./PageReducer";
import { AuthorizationPageFetch } from "./AsyncActions";
import { AddUserMutation } from "mutations/authAddUser";
import { AddGroupMutation } from "mutations/authAddGroup";
import { RemoveGroupMutation } from "mutations/authRemoveGroup";
import { RemoveUserMutation } from "mutations/authRemoveUser";

/**

Binds page actions that perform necessary operations upon invocation, including "asynchronous" actions.

@param {function} dispatch - The dispatch function from Redux.
@returns {object} - An object containing bound page actions.
*
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
