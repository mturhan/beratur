import { signOut } from "next-auth/react";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DeniedModal() {
  const [modalOpen, setModalOpen] = React.useState(true);
  return (
    <>
      <Modal
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
        backdrop="static"
      >
        <div className=" modal-header">
          <h5 className="modal-title" id="modalLabel">
            Erisim Engellendi
          </h5>
        </div>
        <ModalBody>Sadece Admin icerik duzenleyebilir</ModalBody>
        <ModalFooter>
          <Button
            color="ml-auto "
            type="button"
            onClick={() => {
              setModalOpen(!modalOpen);
              signOut({ callbackUrl: "http://localhost:3005/" });
            }}
          >
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default DeniedModal;
