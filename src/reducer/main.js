import { PageActions } from "./PageReducer";
import { AuthorizationPageFetch } from "./AsyncActions";
import { AddUserMutation } from "mutations/authAddUser";
import { UpdateUserMutation } from "mutations/authUserUpdateAction";
import { AddGroupMutation } from "mutations/authAddGroup";
import { UpdateGroupMutation } from "mutations/authGroupUpdateAction";

/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch
 * @returns
 */
export const bindPageActions = (dispatch) => {
  return {
    onUserRemove: ({ page, user }) =>
      dispatch(PageActions.page_userRemove({ page, user })),

    onGroupRemove: ({ page, group }) =>
      dispatch(PageActions.page_groupRemove({ page, group })),

    pageFetch: (id) => dispatch(AuthorizationPageFetch(id)),

    onMutationAddUser: ({ userId, page, accesslevel }) => {
      return dispatch(AddUserMutation(userId, page, accesslevel));
    },

    onMutationUpdateUser: ({ user, uservalid }) => {
      return dispatch(UpdateUserMutation(user, uservalid));
    },

    onMutationAddGroup: ({ groupId, page, accesslevel }) => {
      return dispatch(AddGroupMutation(groupId, page, accesslevel));
    },

    onMutationUpdateGroup: ({ group, groupvalid }) => {
      return dispatch(UpdateGroupMutation(group, groupvalid));
    },
  };
};
