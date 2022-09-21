import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styled from 'styled-components';
import ErrorModal from '../UI/ErrorModal';
// you can use React Component with styled using ()

// majority of commented code was for useState, changed out for useRef

const AddUser = (props) => {

   const nameInputRef = useRef();
  const ageInputRef = useRef();
  
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredUserAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const addUserHandler = (event) => {
        event.preventDefault();
        // prevents browser submition which then refreshes the page
      const enteredName = nameInputRef.current.value;
            const enteredAge = ageInputRef.current.value;
        if (
            enteredName.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input!',
                message:
                    'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        // age is initialized to a string at useState and retieved as a string by the input
        // thats just how the dom works, this if state below may work in most cases but just to be
        // extra safe we use the + to force a conversion to a number
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age!',
                message: 'Please enter a valid name age (age > 0).',
            });
            return;
        }
      props.onAddUser(enteredName, enteredAge);
      nameInputRef.current.value = '';
            ageInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
        // resets inputs back to '' after submission
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <StyledCard>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>User Name</label>
                    <input
                        id='username'
                        type='text'
                        // value used to reset input back to ''
              //           value={enteredUsername}
              // onChange={usernameChangeHandler}
              ref={nameInputRef}
                    />
                    {/* cannot use For or class as its reseved term for JS hence htmlFor(for screen readers) */}
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
              //           value={enteredUserAge}
              // onChange={ageChangeHandler}
              ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </StyledCard>
        </div>
    );
};

// you can use React Component with styled using ().
const StyledCard = styled(Card)`
    margin: 2rem auto;
    padding: 1rem;
    width: 50%;
    max-width: 40rem;

    & label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    & input {
        font: inherit;
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        padding: 0.15rem;
        margin-bottom: 0.5rem;
    }

    & input:focus {
        outline: none;
        border-color: #4f005f;
    }
`;

export default AddUser;
