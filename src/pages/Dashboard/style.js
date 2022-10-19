import styled from "styled-components";

export const MainDashboard = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    height: 100vh;
    padding: 0 10px;
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

    .user__info > div,
    .tech__section > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 900px;
        margin: 0 auto;
        width: 100%;
        flex-wrap: wrap;
    }
    .add__btn {
        padding: 0;
    }
    .plus__sign {
        font-size: 22px;
        padding: 4px;
        background: var(--color-grey-3);
        border-radius: 4px;
        color: #fff;
    }

    button:hover svg {
        background-color: var(--color-primary-focus);
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

    .tech__section {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }

    .tech__section > ul {
        margin-top: 10px;
        background: var(--color-grey-2);
        border-radius: 4px;
        padding: 23px;
        max-height: 416px;
        overflow-y: hidden;

        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .tech__card {
        background: var(--color-grey-4);
        padding: 13px 20px;
        border-radius: 4px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tech__card > h3 {
        font-weight: 700;
        font-size: 14.2123px;
    }

    .tech__card > div {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .tech__card > div > p {
        font-weight: 400;
        font-size: 12.182px;
        color: var(--color-grey-1);
    }
    .delete__btn {
        cursor: pointer;
        color: var(--color-grey-1);
    }
`;
