function CharCard({ character: { name, status, image, species } }) {
  return (
    <li className={status}>
      <h2>
        {name.slice(0, 15)}
        {name.length > 15 && "..."}
      </h2>
      <img src={image} alt={`Imagem de ${name}`} />
      <span>{species}</span>
    </li>
  );
}

export default CharCard;
