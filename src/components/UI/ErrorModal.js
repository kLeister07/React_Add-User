import React from 'react'
import Card from './Card'
import Button from './Button'
import styled from 'styled-components'

const ErrorModal = (props) => {
  return (
      <ErrorCard>
          <header>
              <h2>{props.title}</h2>
          </header>
          <div>
              <p>{props.message}</p>
          </div>
          <footer>
              <Button>Okay</Button>
          </footer>
          
    </ErrorCard>
  )
}

const ErrorCard = styled(Card)`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;

    & backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
        background: rgba(0, 0, 0, 0.75);
    }

    & header {
        background: #4f005f;
        padding: 1rem;
    }

    & header h2 {
        margin: 0;
        color: white;
    }

    & content {
        padding: 1rem;
    }

    & actions {
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
    }

    @media (min-width: 768px) {
        .modal {
            left: calc(50% - 20rem);
            width: 40rem;
        }
    }
`;

export default ErrorModal