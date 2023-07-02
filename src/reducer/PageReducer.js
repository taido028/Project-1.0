import { createSlice } from "@reduxjs/toolkit";
/**
 * Updates an item in the state based on the action payload.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action with payload to update the page.
 * @returns {Object} The updated state.
 */

export const UpdateItem = (state, action) => {
  const newItem = action.payload;
  const oldItem = state[newItem.id];
  state[newItem.id] = { ...oldItem, ...newItem };

  return state;
};

/**
 * Removes a user from a page.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action with payload indicating the user and page.
 * @returns {Object} The updated state.
 */

// User
const UserRemove = (state, action) => {
  const p = action.payload.page;
  const u = action.payload.user;
  const page = state[p.id];
  page.users = page.users.filter((m) => m.user.id !== u.id);

  return state;
};

/**
 * Adds a user to a page.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action with payload indicating the user and page.
 * @returns {Object} The updated state.
 */
const UserAdd = (state, action) => {
  const newpage = action.payload.page;
  const oldpage = state[newpage.id];
  state[newpage.id] = { ...oldpage, ...newpage };
  return state;
};

/**
 * Updates a user's access level.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action with payload indicating the user, page, and access level.
 * @returns {Object} The updated state.
 */

const UserUpdate = (state, action) => {
  const p = action.payload.page;
  const u = action.payload.user;
  const accesslevel = action.payload.accesslevel;
  const page = state[p.id];

  const target = page.users.filter((t) => t.user.id === u.id)[0];
  target.accesslevel = accesslevel;
  page.users = page.users.map((user) =>
    user.id === target.id ? { ...user, ...target } : user
  );

  state[p.id] = { ...page, ...p };
  return state;
};

/**
 * Removes a group from a page.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action with payload indicating the group and page.
 * @returns {Object} The updated state.
 */

// Group
const GroupRemove = (state, action) => {
  const p = action.payload.page;
  const g = action.payload.group;
  const page = state[p.id];
  page.groups = page.groups.filter((m) => m.group.id !== g.id);
  return state;
};

/**
 * Adds a group to a page.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action with payload indicating the group and page.
 * @returns {Object} The updated state.
 */

const GroupAdd = (state, action) => {
  const newpage = action.payload.page;
  const oldpage = state[newpage.id];
  state[newpage.id] = { ...oldpage, ...newpage };
  return state;
};

/**
 * Updates a group's access level.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action with payload indicating the group, page, and access level.
 * @returns {Object} The updated state.
 */

const GroupUpdate = (state, action) => {
  const p = action.payload.page;
  const g = action.payload.group;
  const accesslevel = action.payload.accesslevel;
  const page = state[p.id];

  const target = page.groups.filter((t) => t.group.id === g.id)[0];
  target.accesslevel = accesslevel;
  page.groups = page.groups.map((group) =>
    group.id === target.id ? { ...group, ...target } : group
  );

  state[p.id] = { ...page, ...p };
  return state;
};

/**
 * Slice for handling actions related to pages, users, and groups.
 */
export const PageSlice = createSlice({
  name: "pages",
  initialState: {},
  reducers: {
    // page
    page_update: UpdateItem,

    // user
    page_userRemove: UserRemove,
    page_userAdd: UserAdd,
    page_userUpdate: UserUpdate,

    // group
    page_groupRemove: GroupRemove,
    page_groupAdd: GroupAdd,
    page_groupUpdate: GroupUpdate,
  },
});

//z rezu odvozene akce
export const PageActions = PageSlice.actions;
//z rezu odvozeny stavovy automat
export const PageReducer = PageSlice.reducer;
