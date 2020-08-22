import React from "react";
import PropTypes from "prop-types";

const SearchMenu = ({ defaultUser, onGet, onClear }) => {
  let _input;

  return (
    <>
    <div className="container search-box">
      
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <p style={{margin: "5px 20px"}}>Buscar noticia por palabra clave</p>
            
            <input
              type="text"
              className="form-control"
              placeholder="Palabra Clave"
              aria-label=""
              aria-describedby="basic-addon1"
              defaultValue={defaultUser}
              ref={node => (_input = node)}
            />
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => onGet(_input.value)}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

SearchMenu.propTypes = {
  defaultUser: PropTypes.string,
  onGet: PropTypes.func,
  onClear: PropTypes.func
};

export default SearchMenu;
