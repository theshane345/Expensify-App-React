//Export a stateless functional componeent
//description, amount, 
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount , createdAt}) =>(
    <div>
        <Link to= {`/edit/${id}`}>
            <h3>The expense {description}</h3> 
        </Link>
        <p>is of total amount {amount} created at {createdAt}</p>
        
    </div>
);

export default ExpenseListItem;
