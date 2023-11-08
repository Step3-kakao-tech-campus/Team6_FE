const ButtonReserve = ({ onClick, enable }) => {
  return (
    <button
      className={`width-flex-layout fixed bottom-[74px] h-12 rounded-lg text-2xl font-bold text-white ${
        enable ? "bg-tripKoOrange" : "bg-gray-400"
      }`}
      onClick={onClick}
      disabled={!enable}
      aria-label="button-reserve"
    >
      {enable ? "Reserve Now" : "Not Reservable"}
    </button>
  );
};

export default ButtonReserve;
