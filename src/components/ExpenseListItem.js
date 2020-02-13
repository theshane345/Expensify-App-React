//Export a stateless functional componeent
//description, amount, 
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount , createdAt}) =>(
    <div>
        <Link to= {`/edit/${id}`}>
            <h3>The expense {description}</h3> 
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('Do MMMM, YYYY' )}
        </p>
        
    </div>
);

export default ExpenseListItem;
