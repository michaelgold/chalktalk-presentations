import React from "react";
import {
  AutocompleteInput,
  List,
  Edit,
  CommentGrid,
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

export const SlidesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label="Presentation"
        source="presentation_id"
        reference="presentations"
        allowEmpty
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <NumberInput label="Order" source="order" />
      <TextInput label="Title" source="title" />
      <TextInput label="Slide Caption" source="caption" />
      <ReferenceInput
        label="Background Image"
        source="image_id"
        reference="images"
        allowEmpty
      >
        <AutocompleteInput optionText="title" />
      </ReferenceInput>
      <ReferenceField source="image_id" reference="images" allowEmpty>
        <ImageField source="pictures" src="src" title="title" />
      </ReferenceField>
    </SimpleForm>
  </Create>
);

const img = "img";

export const SlidesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="_id" />
      <ReferenceInput
        label="Presentation"
        source="presentation_id"
        reference="presentations"
        allowEmpty
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <NumberInput label="Order" source="order" />
      <LongTextInput label="Title" source="title" />
      <LongTextInput label="Slide Caption" source="caption" />
      <ReferenceInput
        label="Background Image"
        source="image_id"
        reference="images"
        allowEmpty
      >
        <AutocompleteInput optionText="title" />
      </ReferenceInput>
      <ReferenceField source="image_id" reference="images" allowEmpty>
        <ImageField source="pictures" src="src" title="title" />
      </ReferenceField>
    </SimpleForm>
  </Edit>
);

const SlidesFilter = (props) => (
    <Filter {...props}>
      <ReferenceInput
        label="Select presentation"
        source="presentation_id"
        reference="presentations"
        alwaysOn
      >
        <AutocompleteInput optionText="title" />
      </ReferenceInput>
    </Filter>
);



const cardStyle = {
  width: "70%",
  margin: "1em",
  display: "inline-block",
  verticalAlign: "top"
};

const SlideGrid = ({ ids, data, basePath }) => (
  <div style={{ margin: "3em", paddingTop: "3em" }}>
    {ids.map(id => (
      <Card key={id} style={cardStyle}>
        <CardMedia
          style={{ minHeight: 150 }}
          overlay={
            <CardTitle
              title={<TextField record={data[id]} source="title" allowEmpty />}
              subtitle={
                <TextField record={data[id]} source="caption" allowEmpty />
              }
            />
          }
        >
          <ReferenceField
            record={data[id]}
            source="image_id"
            reference="images"
            basePath={basePath}
            allowEmpty
          >
            <ImageField
              record={data[id]}
              source="pictures"
              src="src"
              title="title"
              allowEmpty
            />
          </ReferenceField>
        </CardMedia>
        <CardText>
          <ReferenceField
            label="Presentation"
            resource="presentations"
            record={data[id]}
            source="presentation_id"
            reference="presentations"
            basePath={basePath}
          >
            <TextField source="title" allowEmpty />
          </ReferenceField>
        </CardText>
        <CardActions style={{ textAlign: "right" }}>
          <EditButton resource="slides" basePath={basePath} record={data[id]} />
        </CardActions>
      </Card>
    ))}
  </div>
);
SlideGrid.defaultProps = {
  data: {},
  ids: []
};

export const SlidesList = props => (
    <List title="Slides" {...props}  filters={<SlidesFilter />} sort={{ field: 'order', order: 'ASC' }}>
    <SlideGrid />
  </List>
);
