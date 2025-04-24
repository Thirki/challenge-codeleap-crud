import Modal from "react-modal";
import { PostFormModalEdit } from "../PostFormModalEdit";

interface IEditModalProps {
  isOpenedEdit: boolean;
  handleCloseEdit: () => void;
}

export const EditModal: React.FC<IEditModalProps> = ({
  isOpenedEdit,
  handleCloseEdit,
}) => {
  return (
    <Modal
      isOpen={isOpenedEdit}
      onRequestClose={handleCloseEdit}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Example Modal"
    >
      <PostFormModalEdit handleCloseEdit={handleCloseEdit} />
    </Modal>
  );
};
