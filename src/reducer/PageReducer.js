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
    page_userAdd: UserAdd,

    page_groupRemove: GroupRemove,
    page_groupAdd: GroupAdd,
  },
});

//z rezu odvozene akce
export const PageActions = PageSlice.actions;
//z rezu odvozeny stavovy automat
export const PageReducer = PageSlice.reducer;
