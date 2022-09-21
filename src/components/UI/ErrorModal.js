import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import styled from 'styled-components';

const Backdrop = (props) => {
    return <BackdropStyle onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    return (
        <ErrorCard>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </ErrorCard>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

const BackdropStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`;

const ErrorCard = styled(Card)`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;

    @media (min-width: 768px) {
        left: calc(50% - 20rem);
        width: 40rem;
    }

    & header {
        background: #4f005f;
        padding: 1rem;
    }

    & header h2 {
        margin: 0;
        color: white;
    }

    & div {
        padding: 1rem;
    }

    & footer {
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
    }
`;

export default ErrorModal;
