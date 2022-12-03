const AlertUndefinedComponent = ({refElement})=>{
    return (
        <>
        <div className="toast-container position-fixed top-0 end-0 p-3 ">
        
        <div className="toast  fade   text-bg-danger hide " ref={refElement} role="alert" aria-live="assertive" aria-atomic="true">
  <div className="d-flex">
    <div className="toast-body fs-6">
    todo tidak boleh kosong
    </div>
    <button type="button" className="btn-close me-2 m-auto navbar-dark" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
        </div>
        </>
    )
}

export default AlertUndefinedComponent;