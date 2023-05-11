import React, {FC} from 'react';

const Modal: FC = () => {
    return (
        <div>
           
<button type="button" className="btn bg-success text-white " data-toggle="modal" data-target="#exampleModal">
Дізнатися більше
</button>

<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрити</button>
        <button type="button" className="btn bg-success text-white ">Звязатися</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Modal;