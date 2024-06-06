import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Content } from '@/styles/pages/produtos';
import Modal from '@/components/Modal';

import Imgcard1 from '../assets/svg/carros/carro-card-1.svg';
import Imgcard2 from '../assets/svg/carros/carro-card-2.svg';
import Imgcard3 from '../assets/svg/carros/carro-card-3.svg';
import Imgcard4 from '../assets/svg/carros/carro-card-4.svg';
import Imgcard5 from '../assets/svg/carros/carro-card-5.svg';
import Imgcard6 from '../assets/svg/carros/carro-card-6.svg';
import Imgcard7 from '../assets/svg/carros/carro-card-7.svg';
import Imgcard8 from '../assets/svg/carros/carro-card-8.svg';
import Imgcard9 from '../assets/svg/carros/carro-card-9.svg';


const cardsData = [
  { id: 1, src: <Imgcard1 />, title: 'Lamborghini', description: 'Sinônimo de potência, design inovador e exclusividade.', price: 'R$ 550.000,00' },
  { id: 2, src: <Imgcard2 />, title: 'Aston Martin', description: 'Elegância britânica e desempenho extraordinário o definem.', price: 'R$ 3.600.000,00' },
  { id: 3, src: <Imgcard3 />, title: 'Ferrari', description: 'É um símbolo de velocidade, paixão e prestígio.', price: 'R$ 2.500.000,00' },
  { id: 4, src: <Imgcard4 />, title: 'BMW', description: 'Ótima combinação de desempenho, tecnologia e design sofisticado. ', price: 'R$ 245.950,00' },
  { id: 5, src: <Imgcard5 />, title: 'Mercedes-Benz', description: 'É sinônimo de luxo e prestígio, capaz de produzir veículos de alta qualidade e desempenho excepcional.', price: 'R$ 350.000,00' },
  { id: 6, src: <Imgcard6 />, title: 'Porsche', description: 'Conquista admiradores pela sua herança em automobilismo e seus veículos de desempenho excepcional.', price: 'R$ 1.300.000,00' },
  { id: 7, src: <Imgcard7 />, title: 'Land Rover', description: 'Veículos robustos e luxuosos, para aqueles que buscam aventura sem abrir mão do conforto e do estilo. ', price: 'R$ 320.000,00' },
  { id: 8, src: <Imgcard8 />, title: 'Audi', description: 'Combinação de design moderno, tecnologia avançada e desempenho impressionante.', price: 'R$ 326.000,00' },
  { id: 9, src: <Imgcard9 />, title: 'Camaro', description: 'Elegância e sofisticação em um só lugar, design moderno e bem luxuoso.', price: 'R$ 500.000,00' },
];

export default function Produtos() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(null);
  const [resetRotation, setResetRotation] = useState(false);

  const handleCardClick = (src) => {
    setModalImageSrc(src);
    setResetRotation(true);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

//   const handleMouseMove = (event) => {
//     if (event.buttons === 1) {
//       const deltaX = event.movementX;
//       const deltaY = event.movementY;
//       setRotation((prevRotation) => ({
//         x: prevRotation.x + deltaY,
//         y: prevRotation.y + deltaX,
//       }));
//     }
//   };

  return (
    <>
        <Header />
        <Content className='container__'>
            <main>
            <div className="cards">
                {cardsData.map((card) => (
                <div className="card" key={card.id} onClick={() => handleCardClick(card.src)}>
                    {card.src}
                    <div className="texts">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <p className="price"><b>Preço:</b> {card.price}</p>
                    </div>
                </div>
                ))}
            </div>
            </main>
        </Content>
        <Modal 
            srcImage={modalImageSrc} 
            modalVisible={modalVisible} 
            onClose={handleCloseModal}
            resetRotation={resetRotation}
            onResetComplete={() => setResetRotation(false)}
        />
      <Footer />
    </>
  );
}