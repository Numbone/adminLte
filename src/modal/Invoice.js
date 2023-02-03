import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { invoiceComment } from "../api/invoice";
const Invoice = ({show,handleClose,commentId}) => {
  const [text,setText]=useState("")
  const postComment=async()=>{
    const data =await invoiceComment(commentId,text)
    handleClose()
  }

  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Добавление комментарий</Form.Label>
              <Form.Control
                type="text"
                placeholder="Напишите комментарию"
                autoFocus
                onChange={(e)=>setText(e.target.value)}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Закрыть
          </Button>
          <Button variant="primary" onClick={()=>postComment()}>
        Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Invoice;
