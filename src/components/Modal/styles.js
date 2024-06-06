import styled from "styled-components";

export const ModalContainer = styled.div` 
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-content {
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 5px 5px 18px rgba(0, 0, 0, 0.5);
        margin: 10% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 932px;
        height: auto;
        max-height: 700px;
        position: relative;

        .modal-body {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .img-modal {
                width: 90%;
                height: auto;
                max-height: 500px;
                cursor: grab;

                transition: transform 0.2s ease-in-out;
                box-shadow: 0 4px 80px rgba(0, 0, 0, 0.8);

                &:active {
                    cursor: grabbing;
                }

                svg {
                    width: 100%;
                    height: 100%;
                    max-height: 500px;
                }
            }
        }
        .close {
            position: absolute;
            top: 10px;
            right: 30px;
            font-size: 2em;
            font-weight: bold;
            cursor: pointer;
        }
    }
`;