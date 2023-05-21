import { GroupActions } from "./PageReducer";
import { GroupFetch, GroupAsyncUpdate } from "./AsyncActions";

/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch
 * @returns
 */
export const bindGroupActions = (dispatch) => {
  return {
    onGroupUpdate: (g) => dispatch(GroupActions.group_update(g)),
    onGroupAdd: (g) => dispatch(GroupActions.group_add(g)),

    onUserRemove: ({ page, user }) =>
      dispatch(GroupActions.page_userRemove({ page, user })),
    onUserUpdate: ({ page, user }) =>
      dispatch(GroupActions.page_userUpdate({ page, user })),
    onUserAdd: ({ user, page }) =>
      dispatch(GroupActions.page_userAdd({ user, page })),

    onGroupRemove: ({ page, group }) =>
      dispatch(GroupActions.page_groupRemove({ page, group })),
    onGroupUpdate: ({ page, group }) =>
      dispatch(GroupActions.page_groupUpdate({ page, group })),
    onGroupAdd: ({ page, group }) =>
      dispatch(GroupActions.page_groupAdd({ page, group })),

    groupFetch: (id) => dispatch(GroupFetch(id)),

    //groupFakeFetch: (id) => dispatch(GroupFakeFetch(id)),

    groupAsyncUpdate: (group) => dispatch(GroupAsyncUpdate(group)),
  };
};
