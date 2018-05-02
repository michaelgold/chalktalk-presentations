//admin/src/Dashboard.js
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Team_Logo from './Team_Logo.png';

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
      title= "Welcome to ChalkTalk Presentations"
      subtitle="Created by the Persistant Programmers!"
      avatar = {<Avatar src={Team_Logo} size={100} style={{border: 0, objectFit: 'cover'}}/>}
    />
    <CardActions></CardActions>
    <CardText></CardText>
  </Card>
);

export default CardExampleExpandable;
