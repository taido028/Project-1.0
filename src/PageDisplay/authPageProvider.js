import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GroupLarge } from "./authPageLarge";

import { actions } from "store/store";

/**
 * Komponenta, ktera je zaclenena ve strukture s Providerem, tedy se store, importuje si akce a poskytuje je podrizenym komponentam
 * @param {*} param0
 * @returns
 */
export const PageProvider = ({ id }) => {
  //vyber vsech skupin ze store
  const groups = useSelector((state) => state.groups);
  //vyber idcka u skupiny, ktere bylo vybrano
  const selectedId = useSelector((state) => state.groups.selectedId);
  //vyber skupiny ze store, ktera ma byt zobrazena
  const group = groups[id]; //|| {id: id}

  //console.log(group)
  console.log("prekresleni");
  if (group?.memberships) {
    //console.log(group.memberships)
  }

  useEffect(() => {
    console.log("GroupPageProvider refetch " + id);

    actions.groupFetch(id);
  }, [id, selectedId]);
  if (group) {
    //skupina je ve store
    return <GroupLarge page={group} actions={actions} />;
  } else {
    //skupina ve store neni
    return (
      <div>
        Loading... {id}, {group}
      </div>
    );
  }
};
