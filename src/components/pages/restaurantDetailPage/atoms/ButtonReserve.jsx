const ButtonReserve = ({ onClick, enable }) => {
  return (
    <button
      className={`width-flex-layout fixed bottom-[74px] text-2xl h-12 rounded-lg font-bold text-white ${
        enable ? "bg-tripKoOrange" : "bg-gray-400"
      }`}
      onClick={onClick}
      disabled={!enable}
    >
      {enable ? "Reserve Now" : "Not Reservable"}
    </button>
  );
};

export default ButtonReserve;
