import { PageActions } from "./PageReducer";
import { AuthorizationPageFetch } from "./AsyncActions";
import { AddUserMutation } from "mutations/authAddUser";
import { UpdateUserMutation } from "mutations/authUserUpdateAction";

/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch
 * @returns
 */
export const bindPageActions = (dispatch) => {
  return {
    onPageUpdate: (g) => dispatch(PageActions.page_update(g)),

    onUserRemove: ({ page, user }) =>
      dispatch(PageActions.page_userRemove({ page, user })),
    onUserUpdate: ({ page, user }) =>
      dispatch(PageActions.page_userUpdate({ page, user })),
    onUserAdd: ({ user, page }) =>
      dispatch(PageActions.page_userAdd({ user, page })),

    onGroupRemove: ({ page, group }) =>
      dispatch(PageActions.page_groupRemove({ page, group })),
    onGroupUpdate: ({ page, group }) =>
      dispatch(PageActions.page_groupUpdate({ page, group })),
    onGroupAdd: ({ page, group }) =>
      dispatch(PageActions.page_groupAdd({ page, group })),

    pageFetch: (id) => dispatch(AuthorizationPageFetch(id)),

    onMutationAddUser: ({ userId, page, accesslevel }) => {
      return dispatch(AddUserMutation(userId, page, accesslevel));
    },

    onMutationUpdateUser: ({ user, uservalid }) => {
      return dispatch(UpdateUserMutation(user, uservalid));
    },

    //groupFakeFetch: (id) => dispatch(GroupFakeFetch(id)),

    //groupAsyncUpdate: (group) => dispatch(GroupAsyncUpdate(group)),
  };
};
