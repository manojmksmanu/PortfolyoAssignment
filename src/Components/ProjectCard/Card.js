import { useState } from 'react'
import React from 'react'
import './Card.css'
import Modal from 'react-bootstrap/Modal';
import { motion } from "framer-motion"
const Card = ({ img, cardData }) => {
  // for modal of project for more details 
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <div className='product_card' onClick={() => setLgShow(true)}>
        <img src={img} />
        <p>
          {cardData && cardData.title}
        </p>
      </div>

      {/* // React_bootstrap_Modal */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {cardData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>

  )
}

export default Card