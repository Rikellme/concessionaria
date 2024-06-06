import styled from "styled-components";

export const Content = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 15em;

    .cards {
        display: flex;
        justify-content: space-between;
        gap: 1em;
        flex-wrap: wrap;
        margin-bottom: 5em;

    }

    .card {
        background: #f0f0f0;
        max-width: 360px;
        border-radius: 10px;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }

        svg {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
        }

        .texts {
            h3 {
                font-size: 1.5em;
                margin: 0.5em 0;
            }

            p {
                font-size: 1em;
                margin: 0.5em 0;
            }

            .price {
                font-size: 1.2em;
                color: #00f;
            }
        }
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 3;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
        align-items: center;
        justify-content: center;

        .modal-content {
            background-color: rgba(0, 0, 0, 0.2);
            box-shadow: 5px 5px 18px rgba(0, 0, 0, 0.5);
            margin: 10% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            height: auto;
            max-height: 700px;
            position: relative;

            .modal-body {
                display: flex;
                justify-content: center;

                .img-modal {
                    transition: transform 0.2s ease-in-out;
                    max-width: 100%;
                    height: auto;
                }
            }
            .close {
                position: absolute;
                top: 0;
                right: 0;
                font-size: 2em;
                cursor: pointer;
            }
        }
    }



    
`;