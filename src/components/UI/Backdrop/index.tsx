interface BackdropProps {
  onHeader?: boolean;
  onClick?: () => void;
}

const Backdrop = ({ onHeader, onClick }: BackdropProps) => {
  return (
    <div
      onClick={onClick}
      className={`fixed h-[100vh] w-[100vw] bg-backdrop left-0 z-10 ${
        onHeader ? "top-0" : "top-[90px]"
      }`}
    />
  );
};

export default Backdrop;
