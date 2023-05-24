import { useEffect } from "react";
import { useSelector } from "react-redux";

import { PageLarge } from "./authPageLarge";

import { actions } from "store/store";

/**
 * Komponenta, ktera je zaclenena ve strukture s Providerem, tedy se store, importuje si akce a poskytuje je podrizenym komponentam
 * @param {*} param0
 * @returns
 */
export const PageProvider = ({ id }) => {
  //vyber vsech skupin ze store
  const pages = useSelector((state) => state.pages);
  //vyber idcka u skupiny, ktere bylo vybrano
  const selectedId = useSelector((state) => state.pages.selectedId);
  //vyber skupiny ze store, ktera ma byt zobrazena
  const page = pages[id]; //|| {id: id}

  //console.log(group)
  console.log("prekresleni");
  if (page?.memberships) {
    //console.log(group.memberships)
  }

  useEffect(() => {
    console.log("PageProvider refetch " + id);

    actions.pageFetch(id);
  }, [id, selectedId]);
  if (page) {
    //skupina je ve store
    return <PageLarge page={page} actions={actions} />;
  } else {
    //skupina ve store neni
    return (
      <div>
        Loading... {id}, {page}
      </div>
    );
  }
};
