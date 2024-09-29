import React from 'react';
import { Link } from 'react-router-dom'; 
import img1 from '../img/cuerdas.jpg';
import img2 from '../img/auris.jpg';
import img3 from '../img/ampli.jpg';
import img4 from '../img/zoom.jpg';
import '../styles/ImageGridComponent.css'; 

function ImageGridComponent() {
  return (
    <div className="image-grid-container">
      <div className="row">
        <div className="col-md-6">
          <Link to="/category/accesorios">
            <img src={img1} alt="Cuerdas de guitarra" className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/category/auriculares">
            <img src={img2} alt="Auriculares" className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-6 mt-4">
          <Link to="/category/amplificadores">
            <img src={img3} alt="Amplificador" className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-6 mt-4">
          <Link to="/category/pedales">
            <img src={img4} alt="Pedal de efectos Zoom" className="img-fluid" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ImageGridComponent;
