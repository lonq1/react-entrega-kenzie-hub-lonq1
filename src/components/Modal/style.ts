import styled from "styled-components";

export const ModalContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);

    section {
        width: 95%;
        max-width: 400px;
    }

    .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        background: var(--color-grey-2);
        border-radius: 4px 4px 0px 0px;
    }

    .modal__header > h3 {
        font-weight: 700;
        font-size: 16px;
        color: var(--color-grey-0);

        @media (min-width: 1080px) {
            font-size: 18px;
        }
    }

    .modal__header > button {
        background-color: transparent;
        border: none;
        font-weight: 600;
        font-size: 16px;
        color: var(--color-grey-1);
        padding: 2px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 22px 20px 30px 20px;
        background: var(--color-grey-3);
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 0 0 4px 4px;
    }
`;
