import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import fenderImg from '../img/fender-stratocaster.jpg';
import gibsonImg from '../img/gibson-les-paul.jpg';
import yamahaImg from '../img/yamaha-fg800.jpg';
import bajoFender from '../img/bajoFender.jpg';
import bateriaUno from '../img/bateriaUno.jpg';
import bateriaDos from '../img/bateriaDos.jpg';
import ampliUno from '../img/ampliUno.jpg';
import ampliDos from '../img/ampliDos.jpg';
import electromaticLtd from '../img/electromaticLtd.jpg';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const { itemId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [shippingMethod, setShippingMethod] = useState('standard');  
  const products = [


    // Guitarras**********************************************************
    { 
      id: 1, 
      category: 'Guitarras', 
      name: 'Fender Stratocaster', 
      description: 'Una guitarra eléctrica legendaria.', 
      price: 15200, 
      image: fenderImg,
      additionalImages: [
        'https://example.com/fender-img1.jpg',
        'https://example.com/fender-img2.jpg',
        'https://example.com/fender-img3.jpg'
      ],
      paragraph: 'La Fender Stratocaster es una de las guitarras más icónicas y versátiles, utilizada en una amplia gama de géneros musicales.'
    },
    { 
      id: 2, 
      category: 'Guitarras', 
      name: 'Gibson Les Paul', 
      description: 'Una guitarra de rock clásica.', 
      price: 15500, 
      image: gibsonImg,
      additionalImages: [
        'https://example.com/gibson-img1.jpg',
        'https://example.com/gibson-img2.jpg',
        'https://example.com/gibson-img3.jpg'
      ],
      paragraph: 'La Gibson Les Paul es famosa por su sonido cálido y profundo, y ha sido utilizada por grandes leyendas del rock.'
    },
    { 
      id: 3, 
      category: 'Guitarras', 
      name: 'Yamaha FG800', 
      description: 'Una guitarra acústica asequible.', 
      price: 15000, 
      image: yamahaImg,
      additionalImages: [
        'https://example.com/yamaha-img1.jpg',
        'https://example.com/yamaha-img2.jpg',
        'https://example.com/yamaha-img3.jpg'
      ],
      paragraph: 'La Yamaha FG800 es conocida por su calidad y accesibilidad, ideal para principiantes y guitarristas experimentados.'
    },
    { 
      id: 11, 
      category: 'Guitarras', 
      name: 'Electromatic LTD', 
      description: 'Guitarra Electromatic LTD.', 
      price: 15500, 
      image: electromaticLtd,
      additionalImages: [
        'https://example.com/electromatic-img1.jpg',
        'https://example.com/electromatic-img2.jpg',
        'https://example.com/electromatic-img3.jpg'
      ],
      paragraph: 'La Electromatic LTD es una guitarra eléctrica de edición limitada con un estilo distintivo y un sonido poderoso.'
    },



    // Bajos**********************************************************
    { 
      id: 4, 
      category: 'Bajos', 
      name: 'Bajo Fender Player', 
      description: 'Con un estilo de tocar suave y potente.', 
      price: 11200, 
      image: bajoFender,
      additionalImages: [
        'https://example.com/bajoFender-img1.jpg',
        'https://example.com/bajoFender-img2.jpg',
        'https://example.com/bajoFender-img3.jpg'
      ],
      paragraph: 'El Bajo Fender Player combina un estilo moderno con el sonido clásico, ideal para cualquier bajista profesional o aficionado.'
    },

    // Baterías**********************************************************
    { 
      id: 5, 
      category: 'Baterías', 
      name: 'Batería Yamaha Stage Custom', 
      description: 'La evolución del concepto.', 
      price: 58500, 
      image: bateriaUno,
      additionalImages: [
        'https://example.com/bateriaYamaha-img1.jpg',
        'https://example.com/bateriaYamaha-img2.jpg',
        'https://example.com/bateriaYamaha-img3.jpg'
      ],
      paragraph: 'La batería Yamaha Stage Custom ofrece un sonido dinámico, ideal tanto para el estudio como para presentaciones en vivo.'
    },
    { 
      id: 6, 
      category: 'Baterías', 
      name: 'Batería Yamaha Stage', 
      description: 'Baterías sólidas para bateristas sólidos.', 
      price: 45000, 
      image: bateriaDos,
      additionalImages: [
        'https://example.com/bateriaYamahaStage-img1.jpg',
        'https://example.com/bateriaYamahaStage-img2.jpg',
        'https://example.com/bateriaYamahaStage-img3.jpg'
      ],
      paragraph: 'La Yamaha Stage es una batería versátil, perfecta para bateristas que buscan calidad y durabilidad.'
    },

    // Amplificadores**********************************************************
    { 
      id: 7, 
      category: 'Amplificadores', 
      name: 'Amplificador Marshall', 
      description: 'Amplificador clásico Marshall.', 
      price: 35000, 
      image: ampliDos,
      additionalImages: [
        'https://example.com/marshall-img1.jpg',
        'https://example.com/marshall-img2.jpg',
        'https://example.com/marshall-img3.jpg'
      ],
      paragraph: 'El amplificador Marshall es conocido por su sonido potente y ha sido una elección popular entre los guitarristas de rock durante décadas.'
    },
    { 
      id: 8, 
      category: 'Amplificadores', 
      name: 'Amplificador Vox', 
      description: 'Amplificador Vox con sonido clásico.', 
      price: 47000, 
      image: ampliUno,
      additionalImages: [
        'https://example.com/vox-img1.jpg',
        'https://example.com/vox-img2.jpg',
        'https://example.com/vox-img3.jpg'
      ],
      paragraph: 'El amplificador Vox ofrece un sonido vintage y es altamente apreciado por su calidad tonal y diseño retro.'
    },

    //Accesorios**********************************************************
    { 
      id: 9, 
      category: 'Accesorios', 
      name: 'Cable para Guitarra Aston', 
      description: 'Cable instrumento Aston Reed KWC 101ZO.', 
      price: 47000, 
      image: 'https://bairesrocks.vteximg.com.br/arquivos/ids/242582/SKU-KWC-101ZO-04.jpg?v=638278098870970000',
      additionalImages: [
        'https://example.com/vox-img1.jpg',
        'https://example.com/vox-img2.jpg',
        'https://example.com/vox-img3.jpg'
      ],
      paragraph: 'Cable instrumento Aston Reed KWC 101ZO Plug Plug c/termo 3 mts.'
    },

    { 
      id: 10, 
      category: 'Accesorios', 
      name: 'Pedal Afinador', 
      description: 'Pedal Afinador Polifónico Tc Electronic Polytune 3', 
      price: 55500, 
      image: 'https://i0.wp.com/kemuelmusica.com/wp-content/uploads/2020/TC_ELECTRONICS/POLYTUNE-3_P0CM0_Right_XL-1400.jpg?fit=1400%2C1400&ssl=1',
      additionalImages: [
        'https://example.com/vox-auriculares1.jpg',
        'https://example.com/vox-auriculares2.jpg',
        'https://example.com/vox-auriculares3.jpg'
      ],
      paragraph: 'Los auriculares Vox Silent Session están diseñados para ofrecer un sonido claro y preciso, perfecto para largas sesiones de grabación o escucha.'
    },

    // Auriculares**********************************************************
    { 
      id: 12, 
      category: 'Auriculares', 
      name: 'Auriculares Vox Vhq1', 
      description: 'Un juego de auriculares Vox Silent Session Studio le proporcionará un sinfín de horas de disfrute de calidad.', 
      price: 55500, 
      image: 'https://bairesrocks.vteximg.com.br/arquivos/ids/228100/main_c5f56c81.jpg',
      additionalImages: [
        'https://example.com/vox-auriculares1.jpg',
        'https://example.com/vox-auriculares2.jpg',
        'https://example.com/vox-auriculares3.jpg'
      ],
      paragraph: 'Los auriculares Vox Silent Session están diseñados para ofrecer un sonido claro y preciso, perfecto para largas sesiones de grabación o escucha.'
    },

    { 
      id: 13, 
      category: 'Auriculares', 
      name: 'Auriculares AKG K175', 
      description: 'Un juego de auriculares Vox Silent Session Studio le proporcionará un sinfín de horas de disfrute de calidad.', 
      price: 55500, 
      image: 'https://bairesrocks.vteximg.com.br/arquivos/ids/226942/preview--7-.jpg?v=637583480631930000',
      additionalImages: [
        'https://example.com/vox-auriculares1.jpg',
        'https://example.com/vox-auriculares2.jpg',
        'https://example.com/vox-auriculares3.jpg'
      ],
      paragraph: 'Características principales Mejore la práctica y el monitoreo de su guitarra con un sonido cristalino Experiencia de sonido excepcional con cancelación de ruido y filtrado de sonido Disfrute del control del sonido con botones inteligentes de monitorización y mejora del sonido Un juego dinámico de auriculares multiusos - úsalos para todo'
    }
  ];

  const product = products.find(product => product.id === parseInt(itemId));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, shippingMethod });
  };

  return (
    <div className="container product-detail">
      {product ? (
        <>
          <div className="product-info">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.paragraph}</p> 
              <p><strong>Precio: ${product.price}</strong></p>
              <div className="quantity-selector">
                <label>Cantidad:</label>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  max="10"
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Imágenes adicionales */}
          <div className="additional-images">
            <h3>Imágenes adicionales</h3>
            <div className="image-gallery">
              {product.additionalImages.map((imgUrl, index) => (
                <img key={index} src={imgUrl} alt={`${product.name} extra ${index + 1}`} className="extra-image" />
              ))}
            </div>
          </div>          

          {/* Formas de envío */}
          <div className="shipping-methods">
            <h3>Formas de Envío</h3>
            <div className="shipping-options">
              <label>
                <input 
                  type="radio" 
                  name="shipping" 
                  value="standard" 
                  checked={shippingMethod === 'standard'} 
                  onChange={() => setShippingMethod('standard')} 
                /> 
                <i className="fas fa-truck"></i> Envío Estándar
              </label>
            </div>
          </div>

          <button className="btn btn-success add-to-cart-btn" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
}

export default ProductDetail;
