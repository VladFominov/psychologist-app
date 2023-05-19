import React, {FC, useEffect,  useState} from 'react';
import { useRouter } from 'next/navigation';

const Modal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const onClick = (): void => {
    setIsModalOpen(false);
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
      modalBackdrop.parentNode?.removeChild(modalBackdrop);
    }
   
    router.push('/contacts');
  };

  useEffect(() => {
    return () => {
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
        modalBackdrop.parentNode?.removeChild(modalBackdrop);
      }
    };
  }, []);
  useEffect(() => {
    const bodyElement = document.body;
    if (bodyElement) {
      if (isModalOpen) {
        bodyElement.classList.add('modal-open');
      } else {
        bodyElement.classList.remove('modal-open');
      }
    }
  }, [isModalOpen]);
    return (
        <div>
           
<button type="button" className="btn bg-success text-white " data-toggle="modal" data-target="#exampleModal" onClick={() => setIsModalOpen(true)}>
Дізнатися більше
</button>
{/* "modal fade" */}
<div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered $modal-fade-transform: scale(.8)">
    <div className="modal-content" >
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Хімічні та нехімічні залежності</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quaerat odit at non odio id quisquam quasi hic excepturi accusamus, numquam consectetur mollitia ratione dignissimos dolorem neque repellat soluta omnis.</p> 
       <p> <b>Тривалість консультації: </b> 60 хвилин</p>
       <p> <b>Вартість консультації:</b>  1000 гр</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setIsModalOpen(false)}>Закрити</button>
        <button type="button" className="btn bg-success text-white " onClick={onClick}>Звязатися
       
        </button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Modal;