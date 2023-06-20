// Default parameters for fetch requests.

const globalFetchParams = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  redirect: "follow", // manual, *follow, error
};

/**
 * A wrapper function for fetch which creates a communication layer with the server.
 * This function allows fetch requests to be customized while maintaining certain defaults.
 *
 * @function
 * @param {string} path - The API path to send the request to. Note: This is overridden in the current implementation.
 * @param {Object} params - Additional or overriding parameters for the fetch request.
 * @returns {Promise} The Promise returned by the fetch API.
 */

export const authorizedFetch = (path, params) => {
  // Merge the globalFetchParams with the provided params.
  // This allows the provided params to override the defaults in globalFetchParams.
  const newParams = { ...globalFetchParams, ...params };

  // Override the provided path with "/api/gql".
  // In a real implementation, you might use the provided path instead.

  const overridenPath = "/api/gql";

  // Perform the fetch request. Note that params.headers should be extended with the Authorization token.
  return fetch(overridenPath, newParams);
};
