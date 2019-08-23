import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  dispatch
}) => (
  <div>
    <h3>
      <Link to={'/edit/' + id}>{description}</Link>
    </h3>
    <p>{numeral(amount / 100).format('$0,0.00')}</p>
    <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
);

export default connect()(ExpenseListItem);
