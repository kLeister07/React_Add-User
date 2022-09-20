import React from 'react';
import Card from '../UI/Card';
import styled from 'styled-components';


const UsersList = (props) => {


    return (
        <StyledCard>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </StyledCard>
    );
};

const StyledCard = styled(Card)`
    margin: 2rem auto;
    width: 50%;
    max-width: 40rem;

    & ul {
        list-style: none;
        padding: 1rem;
    }

    & li {
        border: 1px solid #ccc;
        margin: 0.5rem 0;
        padding: 0.5rem;
    }
`;

export default UsersList;
