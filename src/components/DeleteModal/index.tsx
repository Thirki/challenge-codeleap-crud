import Modal from "react-modal";
import { PostFormModalDelete } from "../PostFormModalDelete";

interface IDeleteModalProps {
  isOpenedDelete: boolean;
  handleCloseDelete: () => void;
}

export const DeleteModal: React.FC<IDeleteModalProps> = ({
  isOpenedDelete,
  handleCloseDelete,
}) => {
  return (
    <Modal
      isOpen={isOpenedDelete}
      onRequestClose={handleCloseDelete}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Example Modal"
    >
      <PostFormModalDelete handleCloseDelete={handleCloseDelete} />
    </Modal>
  );
};
