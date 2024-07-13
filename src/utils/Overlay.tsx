const Overlay = ({ show }: { show: boolean }) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
    </>
  );
};

export default Overlay;
