import React from 'react';
import { List, Edit, Create, Datagrid, ImageField, NumberField, ReferenceManyField, TextField, CreateButton, EditButton, DisabledInput, TextInput, SimpleForm, ReferenceField, ReferenceInput, SelectInput, WithPermission } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';


import decodeJwt from 'jwt-decode';
let UserID = (localStorage.getItem('feathers-jwt') == null) ? "" : decodeJwt(localStorage.getItem('feathers-jwt')).id;

export const PresentationsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label= "_id" source="_id" />
            <WithPermission value="admin">
                <ReferenceField label="User" source="userID" reference="users" >
                    <TextField source="name" />
                </ReferenceField>
            </WithPermission>
            <TextField label= "Title" source="title" />
            <EditButton />
        </Datagrid>
    </List>
);


const CreateSlideButton = (props) => (
    <CreateButton
        {...props}
        resource="slides"
        to="/slides/create"
        presentation_id={props.record["id"]}
        label="Add a new slide"
        basePath ="/slides"
    />
);


export const PresentationsEdit = (props) => (
    <Edit {...props} title="Edit Presentation">
        <SimpleForm>
            <ReferenceInput label="User" source="userID" reference="users" >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label="Title" source="title" />
            <ReferenceManyField sort={{ field: 'order', order: 'ASC' }} label="Slides" reference="slides" target="presentation_id">
                <Datagrid>
                    <NumberField label="Order" source="order" />
                    <TextField label="Slide Title" source="title" />
                    <TextField label="Slide Caption" source="caption" />
                    <ImageField source="image" type="url"/>
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
            <CreateSlideButton />
        </SimpleForm>
    </Edit>
);



export const PresentationsCreate = (props) => (
    <Create {...props}>
         <SimpleForm>
            <ReferenceInput label="User"  source="userID" reference="users"  defaultValue={ UserID } allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label="Title" source="title" />
        </SimpleForm>
   </Create>
);
