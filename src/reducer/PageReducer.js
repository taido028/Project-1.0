import { createSlice } from "@reduxjs/toolkit";
import {
  CreateItem,
  DeleteItem,
  ReplaceItem,
  UpdateItem,
  SelectItem,
} from "./UsersReducer";

/**
 * stavova funkce, ktera odebere uzivatele ze skupiny
 * @param {*} state
 * @param {*} action
 * @returns
 */

// User
const UserRemove = (state, action) => {
  console.log("delete user in store");
  const p = action.payload.page;
  const u = action.payload.user;
  console.log(u);
  const page = state[p.id];
  page.users = page.users.filter((m) => m.user.id !== u.id);

  return state;
};

const UserAdd = (state, action) => {
  console.log("adding user in store");
  const page = action.payload.page;
  const user = action.payload.user;
  const pagetake = state[page.id];
  pagetake.users.push(user);
  return state;
};

const UserUpdate = (state, action) => {
  const p = action.payload.page;
  const u = action.payload.user;
  const page = state[p.id];
  page.users = page.users.map((user) =>
    user.id === u.id && user.valid === true ? { ...user, ...u } : user
  );
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

const GroupUpdate = (state, action) => {
  const p = action.payload.page;
  const g = action.payload.group;
  const page = state[p.id];
  page.groups = page.groups.map((group) =>
    group.id === g.id ? { ...group, ...g } : group
  );
  return state;
};

const GroupAdd = (state, action) => {
  console.log("adding group in store");
  const p = action.payload.page;
  const g = action.payload.group;
  const page = state[p.id];
  page.groups.push(g);
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
    //page_add: CreateItem,
    //page_delete: DeleteItem,
    //page_replace: ReplaceItem,
    //page_select: SelectItem,

    page_update: UpdateItem,

    page_userRemove: UserRemove,
    page_userUpdate: UserUpdate,
    page_userAdd: UserAdd,

    page_groupRemove: GroupRemove,
    page_groupUpdate: GroupUpdate,
    page_groupAdd: GroupAdd,
  },
});

//z rezu odvozene akce
export const PageActions = PageSlice.actions;
//z rezu odvozeny stavovy automat
export const PageReducer = PageSlice.reducer;
