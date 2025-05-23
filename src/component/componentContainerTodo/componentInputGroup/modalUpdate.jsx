import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ModalUpdate = ({ 
  idModal, 
  data, 
  fields, 
  onSubmit, 
  modalTitle = 'Update Data' 
}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submit:", formData);
    onSubmit(formData);
    const modalEl = document.getElementById(idModal);
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    if (modal) {
      modal.hide();
    }
  };

  return (
    <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content modal-update">
          <div className="modal-header">
            <h5 className="modal-title" id={`${idModal}Label`}>{modalTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <input type="hidden" name="id" value={formData.id || ''} />
              {fields.map(field => (
                <div className="mb-3" key={field.name}>
                  <label htmlFor={field.name} className="form-label">{field.label}</label>
                  <input 
                    type={field.type || 'text'}
                    className="form-control"
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button 
              type="button" 
              className="btn btn-primary"  
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalUpdate.propTypes = {
  idModal: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalTitle: PropTypes.string,
};

ModalUpdate.defaultProps = {
  modalTitle: 'Update Data',
  fields: [{ name: 'text', label: 'Update Todo' }],
};

export default ModalUpdate;
