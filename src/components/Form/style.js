import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 28px 22px;
    max-width: 600px;
    background: var(--color-grey-3);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    label {
        color: var(--color-grey-0);
        font-size: 12.182px;
    }

    input {
        padding: 11px 16px;
        background: var(--color-grey-2);
        border: 1.2182px solid #343b41;
        border-radius: 4px;
        font-size: 16px;

        color: var(--color-grey-0);
    }

    input:focus {
        border-color: var(--color-primary-focus);
    }
`;
