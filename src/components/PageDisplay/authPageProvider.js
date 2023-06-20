import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PageLarge } from "./authPageLarge";
import { actions } from "store/store";

/**
 * The component fetches a page from the store and passes it down to the PageLarge component.
 * If the page is not in the store, a loading message is displayed.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.id - The id of the page to be fetched
 * @returns {JSX.Element} The PageLarge component if the page is in the store, else a loading message
 */

export const PageProvider = ({ id }) => {
  // Use selectors to fetch necessary data from the Redux store
  const pages = useSelector((state) => state.pages);
  //Take the selected ID
  const selectedId = useSelector((state) => state.pages.selectedId);
  //Get the requested page based on the id provided
  const page = pages[id]; //|| {id: id}

  //console.log(group)
  console.log("prekresleni");

  // Fetch page data when component mounts or id changes
  useEffect(() => {
    console.log("PageProvider refetch " + id);
    actions.pageFetch(id);
  }, [id, selectedId]);

  // If the requested page is present in the store, render the PageLarge component
  if (page) {
    //page is in store
    return <PageLarge page={page} actions={actions} />;
  } else {
    // If the requested page is not present in the store, render a loading message
    return (
      <div className="loading-background">
        <h1 className="page-title">
          Loading... {id} {page}
        </h1>
      </div>
    );
  }
};
