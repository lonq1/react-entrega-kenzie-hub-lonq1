import styled from "styled-components";

export const MainDashboard = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    height: 100vh;
    padding: 0 10px;
    animation: transitionGently 0.5s linear;
    header {
        border-bottom: 1px solid var(--color-grey-2);
        padding: 20px 0 30px 0;
    }

    .user__info {
        border-bottom: 1px solid var(--color-grey-2);
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        padding-bottom: 40px;
    }
    .user__info h2 {
        font-size: 18px;
    }
    .user__info p {
        font-size: 15px;
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
        font-size: 27px;
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

    .user__redirect--contact {
        color: var(--color-grey-0);
    }

    .tech__section {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        height: 100%;
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
    .tech__btns-container {
        display: flex;
        gap: 10px;
    }
    .delete__btn {
        cursor: pointer;
        color: var(--color-grey-1);
    }

    .title__tech--empty {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 90px;
        font-size: 21px;
    }

    .tech__empty--image {
        color: #00d8ff;
        animation: spinningLogo 3s linear infinite;
        font-size: 20px;
    }

    @keyframes spinningLogo {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
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
