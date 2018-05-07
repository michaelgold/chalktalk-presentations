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
  required,
  ReferenceField,
  ReferenceInput,
  NumberInput,
  SelectInput,
  minValue
} from "admin-on-rest";

import {
  Card,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  CardActions
} from "material-ui/Card";

import { UserID, ChalktalkButton } from "./presentations";

import FlatButton from "material-ui/FlatButton";
import UploadImageIcon from "material-ui/svg-icons/file/file-upload";

import PropTypes from "prop-types";
import get from "lodash.get";

const positiveNumber = [minValue(1)];

const styles = {
  list: {
    display: "flex",
    listStyleType: "none",
    margin: "0",
    padding: "0"
  }
};

export const CardImageField = ({
  elStyle = {},
  record,
  source,
  src,
  title,
  imageStyle
}) => {
  const sourceValue = get(record, source);
  if (!sourceValue) {
    return <div />;
  }

  if (Array.isArray(sourceValue)) {
    const style = {
      ...styles.list,
      ...elStyle
    };
    return (
      <ul style={style}>
        {sourceValue.map((file, index) => {
          const titleValue = get(file, title) || title;
          const srcValue = get(file, src) || title;

          return (
            <li key={index}>
                <img
                  alt={titleValue}
                  title={titleValue}
                  src={srcValue}
                  style={imageStyle}
                />
            </li>
          );
        })}
      </ul>
    );
  }




  const titleValue = get(record, title) || title;

  return (
    <div style={elStyle}>
      <img
        title={titleValue}
        alt={titleValue}
        src={sourceValue}
        style={styles.image}
      />
    </div>
  );
};

CardImageField.propTypes = {
  elStyle: PropTypes.object,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
  title: PropTypes.string
};




export const SelectImageField = ({
    elStyle = {},
    record,
    source,
    src,
    title,
    imageStyle
  }) => {
    const sourceValue = get(record, source);
    if (!sourceValue) {
      return <div />;
    }

    if (Array.isArray(sourceValue)) {
      const style = {
        ...styles.list,
        ...elStyle
      };
      return (
        <ul style={style}>
          {sourceValue.map((file, index) => {
            const titleValue = get(file, title) || title;
            const srcValue = get(file, src) || title;

            return (
              <li key={index}>
                <div>
                  <div>
                  {titleValue}
                  </div>
                  <img
                    alt={titleValue}
                    title={titleValue}
                    src={srcValue}
                    style={imageStyle}
                  />
              </div>
              </li>
            );
          })}
        </ul>
      );
    }

  const titleValue = get(record, title) || title;

  return (
    <div style={elStyle}>
      <img
        title={titleValue}
        alt={titleValue}
        src={sourceValue}
        style={styles.image}
      />
    </div>
  );
};

SelectImageField.propTypes = {
  elStyle: PropTypes.object,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
  title: PropTypes.string
};






const UploadImageButton = props => (
  <FlatButton
    {...props}
    label="upload new image"
    href={`/#/images/create`}
    primary="true"
    icon={<UploadImageIcon />}
  />
);

export const SlidesCreate = props => (
  <Create {...props} title={
    <div>
      <div>Create Slide</div>
      <div style={{ fontSize: "14px" }}>Select the presentation and set the order in which the slide will be displayed</div>
    </div>
  }>
    <SimpleForm>
      <ReferenceInput
        label="Presentation"
        source="presentation_id"
        reference="presentations"
        allowEmpty
        validate={required}
      >
        <SelectInput optionText="title" validate={required}/>
      </ReferenceInput>
      <NumberInput label="Order" source="order" validate={positiveNumber}/>
      <TextInput label="Title" source="title"/>
      <TextInput label="Slide Caption" source="caption" />
      <ReferenceInput
        label="Select Background Image"
        source="image_id"
        reference="images"
        sort={{ field: "title", order: "ASC" }}
        allowEmpty
      >
        <SelectInput
          options={{
            style: {
              height: "110px"
            },
            menuStyle: {
              marginTop: "40px"
            }
          }}
          optionText={
            <SelectImageField
              source="pictures"
              title="title"
              imageStyle={{ height: "120px", paddingBottom:"10px"}}
              src="src"
            />
          }
          sort={{ field: "title", order: "ASC" }}
        />
      </ReferenceInput>
      <UploadImageButton />
    </SimpleForm>
  </Create>
);
const optionRenderer = props => `mike ${props}`;

export const SlidesEdit = props => (
  <Edit {...props} title={
    <div>
      <div>Edit Slide</div>
      <div style={{ fontSize: "14px" }}>You can edit any of the fields or move the slide to another presentation</div>
    </div>
  }>
    <SimpleForm>
      <ReferenceInput
        label="Presentation"
        source="presentation_id"
        reference="presentations"
        allowEmpty
        validate={required}
      >
        <SelectInput optionText="title" validate={required} />
      </ReferenceInput>
      <NumberInput label="Order" source="order" validate={positiveNumber}/>
      <LongTextInput label="Title" source="title" />
      <LongTextInput label="Slide Caption" source="caption" />
      <ReferenceInput
        label="Select Background Image"
        source="image_id"
        reference="images"
        sort={{ field: "title", order: "ASC" }}
        allowEmpty
      >
        <SelectInput
          options={{
            style: {
              height: "110px"
            },
            menuStyle: {
              marginTop: "40px"
            }
          }}
          optionText={
            <SelectImageField
              source="pictures"
              title="title"
              imageStyle={{ height: "120px", paddingBottom:"10px"}}
              src="src"
            />
          }
          sort={{ field: "title", order: "ASC" }}
        />
      </ReferenceInput>
      <UploadImageButton />
    </SimpleForm>
  </Edit>
);

const SlidesFilter = props => (
  <Filter {...props}>
    <ReferenceInput
      label="Select presentation"
      source="presentation_id"
      reference="presentations"
      alwaysOn
    >
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);

const cardStyle = {
  margin: "1em",
  display: "inline-block",
  verticalAlign: "top",
  width: "750px"
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
            <CardImageField
              record={data[id]}
              source="pictures"
              src="src"
              title="title"
              imageStyle={{
                margin: "0",
                padding: "0",
                width: "750px"
              }}
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
          <ChalktalkButton source="presentation_id" record={data[id]} />
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
  <List
    title={
      <div>
        <div>Slides</div>
        <div style={{ fontSize: "14px" }}>You can either create new slides or edit existing ones</div>
      </div>
    }
    {...props}
    filters={<SlidesFilter />}
    sort={{ field: "order", order: "ASC" }}
  >
    <SlideGrid />
  </List>
);
