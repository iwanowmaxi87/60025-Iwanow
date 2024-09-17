import React from 'react'; 
import { Link, useParams } from 'react-router-dom';
import fenderImg from '../img/fender-stratocaster.jpg';
import gibsonImg from '../img/gibson-les-paul.jpg';
import yamahaImg from '../img/yamaha-fg800.jpg';
import bajoFender from '../img/bajoFender.jpg'; 
import bateriaUno from '../img/bateriaUno.jpg';
import bateriaDos from '../img/bateriaDos.jpg';
import ampliUno from '../img/ampliUno.jpg';
import ampliDos from '../img/ampliDos.jpg';
import electromaticLtd from '../img/electromaticLtd.jpg';

import './Catalog.css'; 

function Catalog() {
  const { categoryId } = useParams();
  
  const titles = {
    guitarraElectrica: 'Guitarras Eléctricas',
    bajo: 'Bajos',
    guitarraAcustica: 'Guitarras Acústicas',
    baterias: 'Baterías Acústicas', 
    amplificadores: 'Amplificadores',
    accesorios: 'Accesorios',
    auriculares: 'Auriculares',
  };

  const products = [
    // Guitarras
    { id: 1, name: 'Fender Stratocaster', category: 'guitarraElectrica', image: fenderImg },
    { id: 2, name: 'Gibson Les Paul', category: 'guitarraElectrica', image: gibsonImg },
    { id: 3, name: 'Yamaha FG800', category: 'guitarraAcustica', image: yamahaImg },
    { id: 11, name: 'Electromatic LTD', category: 'guitarraElectrica', image: electromaticLtd },

    //Bajos
    { id: 4, name: 'Bajo Fender Player', category: 'bajo', image: bajoFender },
    
    //Baterias
    { id: 5, name: 'Batería Yamaha Stage Custom', category: 'baterias', image: bateriaUno },
    { id: 6, name: 'Batería Yamaha Stage', category: 'baterias', image: bateriaDos },

    //Amplificadores
    { id: 7, name: 'Amplificador Marshall', category: 'amplificadores', image: ampliDos },
    { id: 8, name: 'Amplificador Vox', category: 'amplificadores', image: ampliUno },

    //Accesorios
    { id: 9, name: 'Cable para Guitarra', category: 'accesorios', image: 'https://bairesrocks.vteximg.com.br/arquivos/ids/242580/SKU-KWC-101ZO-02.jpg?v=638278098508970000' },
    { id: 10, name: 'Afinador Electrónico', category: 'accesorios', image: 'https://i0.wp.com/kemuelmusica.com/wp-content/uploads/2020/TC_ELECTRONICS/POLYTUNE-3_P0CM0_Top_XL-1400.jpg?fit=1400%2C1400&ssl=1' },

    //Auriuclares
    { id: 12, name: 'Auriculares Vox', category: 'auriculares', image: 'https://bairesrocks.vteximg.com.br/arquivos/ids/228100/main_c5f56c81.jpg?v=637606025524500000' },
    { id: 13, name: 'Akg K175 Profesional', category: 'auriculares', image: 'https://bairesrocks.vteximg.com.br/arquivos/ids/226942/preview--7-.jpg?v=637583480631930000' },
   
    //Pedales


    //Controladores


    //Consolas
    
  ];

  const filteredProducts = categoryId ? products.filter(product => product.category === categoryId) : products;
  
  const pageTitle = titles[categoryId] || 'Nuestros productos'; 

  return (
    <div className="container catalog">
      <h1>{pageTitle}</h1>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item card">
            <img src={product.image} alt={product.name} className="product-img card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <Link to={`/item/${product.id}`} className="btn">Más Detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
