import { authorizedFetch } from "fetch/authorizedFetch";
/**
 * This function generates the JSON object for GraphQL request
 * to fetch groups by letters
 *
 * @param {String} letters - The letters used to search for groups
 * @returns {Object} The GraphQL query JSON object
 */

export const GroupByLettersQueryJSON = (letters) => ({
  query: `query($letters: String!){
              groupByLetters (letters: $letters){
                    id
                    name
                    valid
                    lastchange
                 }
              }`,
  variables: { letters: letters },
});

export const getGroupByLetters = async (letters) => {
  try {
    const response = await authorizedFetch("/gql", {
      body: JSON.stringify(GroupByLettersQueryJSON(letters)),
    });

    if (response.ok) {
      const data = await response.json();

      // Retrieve the group data
      const GroupsList = data.data.groupByLetters;

      // Return the group data
      return GroupsList;
    } else {
      throw new Error("Error fetching group data");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching group data");
  }
};
