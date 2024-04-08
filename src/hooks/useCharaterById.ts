import { gql, useQuery } from "@apollo/client";
interface CharaterByIdProps {
  character: {
    episode: Array<{ name: string; episode: string }>;
    image: string;
    name: string;
    gender: string;
  };
}

const GET_CHARACTER_BY_ID = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      gender
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacterById = (id: string) => {
  const { error, data, loading } = useQuery<CharaterByIdProps>(GET_CHARACTER_BY_ID, {
    variables: {
      id,
    },
  });

  return { error, data, loading };
};