const LoadingPage = () => {
  const spinnerStyle = {
    border: "10px solid #f3f3f3",
    borderTop: "10px solid #FFAF63",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 2s linear infinite",
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div style={spinnerStyle} />
    </div>
  );
};

export default LoadingPage;
