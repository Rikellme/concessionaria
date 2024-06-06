import { useEffect, useState } from "react";
import { ModalContainer } from "./styles";

export default function Modal({srcImage, modalVisible, onClose, resetRotation, onResetComplete}) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    
    useEffect(() => {
        if (resetRotation) {
          setRotation({ x: 0, y: 0 });
          onResetComplete();
        }
    }, [resetRotation, onResetComplete]);

    const handleMouseDown = (event) => {
        event.preventDefault();
        setDragging(true);
    };
    
    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (event) => {
        if (dragging) {
            const deltaX = event.movementX;
            const deltaY = event.movementY;
            setRotation((prevRotation) => ({
              x: prevRotation.x + deltaY,
              y: prevRotation.y + deltaX,
            }));
          }
    }

    return (
        modalVisible && (
            <ModalContainer onMouseUp={handleMouseUp}>
                <div className="modal-content" onMouseMove={handleMouseMove}>
                    <div className="modal-body">
                        <div
                            className="img-modal"
                            onMouseDown={handleMouseDown}
                            style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
                        >
                            {srcImage}
                        </div>
                    </div>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
            </ModalContainer>
        )
    );
}

