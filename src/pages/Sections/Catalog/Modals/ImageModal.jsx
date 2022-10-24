import './style/ImageModal.scss'
function ImageModal({src, closeImageModal}) {
    return(
      <div id="image-popup" className="img-modal">
  
        <span className="x-close"
              onClick={closeImageModal}>&times;</span>
        <img className="modal-content" src={src} />
  
      </div>
    )
  }

  export default ImageModal