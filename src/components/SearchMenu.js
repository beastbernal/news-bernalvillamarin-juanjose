import React from "react";
import PropTypes from "prop-types";

const SearchMenu = ({ defaultUser, onGet, onClear }) => {
  let _input;

  return (
    <div className="container">
      <h5>Buscar noticia por la fecha</h5>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => onGet(_input.value)}
              >
                Buscar
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="fecha"
              aria-label=""
              aria-describedby="basic-addon1"
              defaultValue={defaultUser}
              ref={node => (_input = node)}
            />
          </div>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClear()}
          >
            Limpiar lista
          </button>
        </div>
      </div>
    </div>
  );
};

SearchMenu.propTypes = {
  defaultUser: PropTypes.string,
  onGet: PropTypes.func,
  onClear: PropTypes.func
};

export default SearchMenu;
