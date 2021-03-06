import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

import { useStyles } from './CardComment.style';

import Card from 'components/Card';

const CardCommentComponent = ({ comment }) => {
  const classes = useStyles();
  const author = comment.user;

  return (
    <div className={classes.root}>
      <img alt="Usuário" className={classes.image} src={author.picture} />
      <ArrowLeft className={classes.arrow} />
      <Card className={classes.card}>
        <h5 className={classes.userName}>{author.name}</h5>
        <p className={classes.text}>{comment.text}</p>
      </Card>
    </div>
  );
};

CardCommentComponent.propTypes = {
  comment: PropTypes.object
};

export default CardCommentComponent;
