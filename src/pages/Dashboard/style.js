import styled from "styled-components";

export const MainDashboard = styled.main`
    background-color: var(--color-grey-4);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    height: 100vh;
    header {
        border-bottom: 1px solid var(--color-grey-2);
        padding: 20px 0 30px 0;
    }

    section {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0 0 40px 0;
    }
    .user__info {
        border-bottom: 1px solid var(--color-grey-2);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 500px;
        margin: 0 auto;
        width: 100%;
        flex-wrap: wrap;
    }

    .plus__sign {
        font-size: 16px;
        color: #fff;
    }

    button:hover svg {
        color: var(--color-primary-focus);
    }
    button:hover {
        background-color: transparent;
    }

    .btn__redirect {
        border-radius: 4px;
        padding: 10px;
        text-align: center;
        border: none;
        background: var(--color-grey-3);
        border: 1.2182px solid transparent;
        font-weight: 500;
        font-size: 12.8347px;
        color: var(--color-grey-0);

        &:hover {
            background: var(--color-primary-focus);
        }

        @media (min-width: 1080px) {
            font-size: 16px;
        }
    }
`;
