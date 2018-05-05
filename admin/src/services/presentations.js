import React, { Component } from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  Filter,
  ImageField,
  NumberField,
  ReferenceManyField,
  TextField,
  CreateButton,
  EditButton,
  DisabledInput,
  TextInput,
  SimpleForm,
  required,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  WithPermission
} from "admin-on-rest";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";
import { push } from "react-router-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserID, host, chalktalkPort } from "../feathersClient";
import SlidesIcon from "material-ui/svg-icons/action/view-carousel";

const chalktalkHost = host + chalktalkPort;
//const ChalktalkHost = "http://104.236.33.63:11235"

export class ChalktalkButton extends Component {
  handleClick = () => {
    const { source, record = {} } = this.props;
    const chalktalkURL = chalktalkHost + "?play=" + record[source];
    window.open(chalktalkURL);
  };

  render() {
    return (
      <FlatButton
        onClick={this.handleClick}
        label="Present in Chalktalk"
        primary="true"
        icon={<PlayArrow />}
      />
    );
  }
}

const ViewSlidesButton = props => (
  <FlatButton
    {...props}
    label="view slides"
    href={`/#/slides/?filter=%7B"presentation_id"%3A"${
      props.record["id"]
    }"%7D&order=ASC&page=1&perPage=10&sort=order`}
    primary="true"
    icon={<SlidesIcon />}
  />
);

const PresentationsFilter = props => (
  <Filter {...props}>
    <ReferenceInput
      label="Select user"
      source="userID"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PresentationsList = props => (
  <div>
    <label style={{ display: "block", padding: "1em" }}>
      You can either create new presentations or edit existing ones.
    </label>
    <List {...props} filters={<PresentationsFilter />}>
      <Datagrid>
        <TextField label="Title" source="title" />
        <EditButton />

        <ViewSlidesButton source="_id" />
        <ChalktalkButton source="_id" />
      </Datagrid>
    </List>
  </div>
);

export const PresentationsEdit = props => (
  <Edit {...props} title="Edit Presentation">
    <SimpleForm>
      <label>
        You can change the owner of the presentation, change the title, edit
        slides, or create new ones.
      </label>
      <ReferenceInput label="User" source="userID" reference="users" validate={required} >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput label="Title" source="title"  validate={required} />
    </SimpleForm>
  </Edit>
);

export const PresentationsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <label>Select a User and enter a title for your presentation.</label>
      <ReferenceInput
        label="User"
        source="userID"
        reference="users"
        defaultValue={UserID}
        allowEmpty
        validate={required}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput label="Title" source="title"         validate={required}
 />
    </SimpleForm>
  </Create>
);
