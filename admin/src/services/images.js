import React from "react";
import {
  AutocompleteInput,
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  LongTextInput,
  DisabledInput,
  ImageField,
  ImageInput,
  TextInput,
  required,
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
  <Create {...props} title="Upload Image">
    <SimpleForm>
      <TextInput label="Title" source="title" validate={required} />
      <ImageInput
        source="pictures"
        label="Related pictures"
        validate={required}
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const ImagesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Title" source="title" validate={required} />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

const ImagesFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="$search" alwaysOn />
  </Filter>
);

export const ImagesList = props => (
  <List
    {...props}
    filters={<ImagesFilter />}
    sort={{ field: "title", order: "ASC" }}
  >
    <Datagrid>
      <TextField label="Title" source="title" />
      <ImageField source="pictures" src="src" title="title" />
      <EditButton />
    </Datagrid>
  </List>
);
