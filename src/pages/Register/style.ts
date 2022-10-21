import styled from "styled-components";

export const MainRegister = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    width: 90%;
    margin: 0 auto;
    animation: transitionGently 0.5s linear;
    header {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;
        max-width: 500px;
    }

    header > a {
        background: var(--color-grey-4);
        border-radius: 4px;
        padding: 10px 16px;
        border: none;
        background: var(--color-grey-3);

        font-weight: 600;
        font-size: 12px;
        color: var(--color-grey-0);
    }

    h2 {
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        margin: 20px 0;
    }

    p {
        margin-bottom: 20px;
    }

    @keyframes transitionGently {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
