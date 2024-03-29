import { useState } from 'react'
import React from 'react'
import './Card.css'
import Modal from 'react-bootstrap/Modal';
import { motion } from "framer-motion"
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { FaEarthAmericas } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
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
            <span className='project_urls'>
              {
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  target='blank'
                  href={cardData.githuburl}
                >
                  <FaGithub />
                </motion.a>
              }
              {
                <a target='blank' href={cardData.liveurl}><FaEarthAmericas /> </a>
              }
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectDetails projectDetail={cardData} />
        </Modal.Body>
      </Modal>
    </>

  )
}

export default Card