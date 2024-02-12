import Backdrop from "../UI/Backdrop";

interface CartModalProps {
  closeHandler: () => void;
}
const CartModal = ({ closeHandler }: CartModalProps) => {
  return (
    <>
      <Backdrop onClick={closeHandler} />
      <div className="absolute bg-white top-[100px] z-30 right-0 left-0 w-[90%] mx-auto rounded-lg">
        this is cart Modal
      </div>
    </>
  );
};

export default CartModal;
