import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styled from 'styled-components';
// you can use React Component with styled using ()

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        // prevents browser submition which then refreshes the page
      if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
        return;
      }
      // age is initialized to a string at useState and retieved as a string by the input
      // thats just how the dom works, this if state below may work in most cases but just to be 
      // extra safe we use the + to force a conversion to a number
      if (+enteredUserAge < 1) {
        return;
      }
        props.onAddUser(enteredUsername, enteredUserAge);
        setEnteredUsername('');
        setEnteredAge('');
        // resets inputs back to '' after submission
    };

    return (
        <StyledCard>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>User Name</label>
                <input
                    // value used to reset input back to ''
                    value={enteredUsername}
                    id='username'
                    type='text'
                    onChange={usernameChangeHandler}
                />
                {/* cannot use For or class as its reseved term for JS hence htmlFor(for screen readers) */}
                <label htmlFor='age'>Age (Years)</label>
                <input
                    value={enteredUserAge}
                    id='age'
                    type='number'
                    onChange={ageChangeHandler}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </StyledCard>
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
