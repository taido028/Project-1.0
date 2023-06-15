import { PageActions } from "./PageReducer";
import { AuthorizationPageFetch } from "./AsyncActions";
import { AddUserMutation } from "mutations/authAddUser";
import { AddGroupMutation } from "mutations/authAddGroup";
import { RemoveGroupMutation } from "mutations/authRemoveGroup";
import { RemoveUserMutation } from "mutations/authRemoveUser";

/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch
 * @returns
 */
export const bindPageActions = (dispatch) => {
  return {
    onPageUpdate: (page) => dispatch(PageActions.page_update(page)),

    onUserRemove: ({ page, user }) =>
      dispatch(PageActions.page_userRemove({ page, user })),

    onUserAdd: ({ user, page }) =>
      dispatch(PageActions.page_userAdd({ user, page })),

    onGroupRemove: ({ page, group }) =>
      dispatch(PageActions.page_groupRemove({ page, group })),

    onGroupAdd: ({ page, group }) =>
      dispatch(PageActions.page_groupAdd({ page, group })),

    pageFetch: (id) => dispatch(AuthorizationPageFetch(id)),

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
