// COMPONENT MODEL DELETE
const ModalDelete =({dataIdModal,eventDelete,textModalBody})=>{
    return (
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog bg-transparent">
           <div className="modal-content modal-delete">
           <div className="modal-body text-center ">
               {textModalBody}
           </div>
           <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="button" className="btn btn-danger btn-hapus" data-idmodal={dataIdModal}  data-bs-dismiss="modal" onClick={eventDelete}>Delete</button>
           </div>
           </div>
       </div>
       </div>
    )
}

export default ModalDelete;