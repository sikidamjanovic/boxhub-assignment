import { Modal } from "components/Modal"
import { TableContext } from "contexts/TableContext"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"


export const ImageModal = () => {
  const { selectedImage, setSelectedImage } = useContext(TableContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    setSelectedImage(null)
  }

  useEffect(() => {
    setIsOpen(selectedImage !== null)
  }, [selectedImage])

  if(!selectedImage){
    return <></>
  }

  return(
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
    >
      <Image
        alt="modal-order-image"
        src={selectedImage}
        width={400}
        height={400}
        className="w-full"
      />
    </Modal>
  )
}