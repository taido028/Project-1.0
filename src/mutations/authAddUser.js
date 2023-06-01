import { gql, useMutation } from "@apollo/client";

export const ADD_USER_MUTATION = gql`
  mutation AddUserAuthorization(
    $authorizationId: ID!
    $userId: ID!
    $accesslevel: INT!
  ) {
    authorizationAddUser(
      authorization: {
        authorizationId: $authorizationId
        userId: $userId
        accesslevel: $accesslevel
      }
    ) {
      id
    }
  }
`;

export const AddUser1 = (authorizationId, userId) => {
  const [addUserMutation] = useMutation(ADD_USER_MUTATION);

  addUserMutation({
    variables: {
      authorizationId: page.id,
      userId: user.id,
    },
  });
};
