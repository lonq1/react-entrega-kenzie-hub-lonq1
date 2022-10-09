import styled from "styled-components";

export const MainRegister = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    width: 90%;
    margin: 0 auto;

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
        margin-bottom: 10px;
    }

    select:focus {
        border-color: var(--color-primary-focus);
        color: var(--color-grey-0);
    }
`;
