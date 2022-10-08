import styled from "styled-components";

export const MainRegister = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    width: 90%;
    margin: 0 auto;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;
    }

    header > a {
        text-decoration: none;
        background: #212529;
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
        color: var(--color-grey-1);
        font-size: 12px;
        text-align: center;
        margin-bottom: 20px;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div > p {
        position: absolute;
        right: 5px;
        color: var(--color-feedback-negative);
        font-size: 12px;
        border-radius: 4px;
    }

    select {
        background: var(--color-grey-2);
        padding: 10px 16px;
        border: 1.2182px solid #343b41;
        border-radius: 4px;
        color: var(--color-grey-1);
        outline: none;
        font-size: 16px;
    }

    select:focus {
        border-color: var(--color-primary-focus);
        color: var(--color-grey-0);
    }

    .register__button {
        color: #fff;
        font-weight: 500;
        font-size: 12.7925px;

        background: #59323f;

        border: 1.2182px solid #59323f;
        border-radius: 4px;

        padding: 10px 0;
    }

    .register__button:hover {
        background: var(--color-primary-focus);
        transition: 0.4s;
    }
`;
