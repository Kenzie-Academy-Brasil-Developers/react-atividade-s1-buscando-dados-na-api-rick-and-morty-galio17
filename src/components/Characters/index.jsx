import CharCard from "../CharCard";

function Characters({ characterList }) {
  const liList = characterList.map((character) => (
    <CharCard key={character.id} character={character} />
  ));

  return (
    <>
      <h1>Meus personagens</h1>
      <ul>{liList}</ul>
    </>
  );
}

export default Characters;
