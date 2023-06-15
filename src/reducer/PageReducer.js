import { createSlice } from "@reduxjs/toolkit";

export const UpdateItem = (state, action) => {
  const newItem = action.payload;
  const oldItem = state[newItem.id];
  state[newItem.id] = { ...oldItem, ...newItem };

  return state;
};

/**
 * stavova funkce, ktera odebere uzivatele ze skupiny
 * @param {*} state
 * @param {*} action
 * @returns
 */

// User
const UserRemove = (state, action) => {
  const p = action.payload.page;
  const u = action.payload.user;
  console.log(u);
  const page = state[p.id];
  page.users = page.users.filter((m) => m.user.id !== u.id);

  return state;
};

const UserAdd = (state, action) => {
  const newpage = action.payload.page;
  const oldpage = state[newpage.id];
  state[newpage.id] = { ...oldpage, ...newpage };
  return state;
};

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

// Group
const GroupRemove = (state, action) => {
  const p = action.payload.page;
  const g = action.payload.group;
  const page = state[p.id];
  page.groups = page.groups.filter((m) => m.group.id !== g.id);
  return state;
};

const GroupAdd = (state, action) => {
  const newpage = action.payload.page;
  const oldpage = state[newpage.id];
  state[newpage.id] = { ...oldpage, ...newpage };
  return state;
};

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
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const PageSlice = createSlice({
  name: "pages",
  initialState: {},
  reducers: {
    page_update: UpdateItem,

    page_userRemove: UserRemove,
    page_userAdd: UserAdd,
    page_userUpdate: UserUpdate,

    page_groupRemove: GroupRemove,
    page_groupAdd: GroupAdd,
    page_groupUpdate: GroupUpdate,
  },
});

//z rezu odvozene akce
export const PageActions = PageSlice.actions;
//z rezu odvozeny stavovy automat
export const PageReducer = PageSlice.reducer;
