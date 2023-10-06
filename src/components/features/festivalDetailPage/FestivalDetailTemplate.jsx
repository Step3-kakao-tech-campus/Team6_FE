const FestivalDetailTemplate = ({ festival }) => {

    return (
    <div>
      <h1>FestivalDetailTemplate</h1>
      <h2>{festival.name}</h2>
      <h2>{festival.description}</h2>
    </div>
  );
};

export default FestivalDetailTemplate;
