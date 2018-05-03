import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  LongTextInput,
  DisabledInput,
  ImageField,
  ImageInput,
  TextInput,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  NumberInput,
  SelectInput
} from "admin-on-rest";

import {
  Card,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  CardActions
} from "material-ui/Card";

export const ImagesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Title" source="title" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const ImagesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Title" source="title" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const ImagesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="Title" source="title" />
      <ImageField source="pictures" src="src" title="title" />
      <EditButton />
    </Datagrid>
  </List>
);
