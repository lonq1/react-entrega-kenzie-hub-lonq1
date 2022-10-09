import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 28px 22px;
    max-width: 500px;
    background: var(--color-grey-3);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    h2 {
        font-size: 16px;
        @media (min-width: 1080px) {
            font-size: 20px;
        }
    }

    p {
        font-weight: 600;
        font-size: 9.62602px;
        color: var(--color-grey-1);

        text-align: center;

        @media (min-width: 1080px) {
            font-size: 12px;
        }
    }
    div {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    label {
        color: var(--color-grey-0);
        font-size: 9.772px;

        @media (min-width: 1080px) {
            font-size: 12.182px;
        }
    }

    input {
        padding: 11px 16px;
        background: var(--color-grey-2);
        border: 1.2182px solid #343b41;
        border-radius: 4px;
        font-size: 13.0293px;

        color: var(--color-grey-0);

        @media (min-width: 1080px) {
            font-size: 16px;
        }
    }

    input:focus {
        border-color: var(--color-primary-focus);
    }
`;
