const TouristSpotCard = ({ touristSpot }) => {
  return (
    <div className="m-2 flex h-64 w-full flex-col items-center justify-center rounded-lg bg-white bg-white px-6 py-2 text-xl shadow-lg shadow-md">
      <img
        className="h-32 w-full rounded-t-lg object-cover"
        src={touristSpot.image}
        alt={touristSpot.name}
      />
      <div className="flex h-32 w-full flex-col items-center justify-center">
        <h3 className="text-xl font-bold">{touristSpot.name}</h3>
        <p className="text-sm">{touristSpot.address}</p>
      </div>
    </div>
  );
};

export default TouristSpotCard;
