import React from 'react';
import { List, Edit, Create, Datagrid, NumberField, ReferenceManyField, TextField, CreateButton, EditButton, DisabledInput, Link, TextInput, SimpleForm, ReferenceField, ReferenceInput, SelectInput } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';



export const PresentationsList = (props) => (
    <label>You can either create new presentations or edit existing ones.</label>,
    <List {...props}>
        <Datagrid>
            <TextField label= "_id" source="_id" />
            <ReferenceField label="User" source="userID" reference="users" >
                <TextField source="name" />
            </ReferenceField>
            <TextField label= "Title" source="title" />
            <EditButton />
        </Datagrid>
    </List>
);


const CreateSlideButton = props => (
    <CreateButton
        {...props}
        resource="slides"
        basePath="/slides"
        presentation_id={props.record["id"]}
        label="Add a new slide"

    />
);



export const PresentationsEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <label>You can change the owner of the presentation, change the title, edit slides, or create new ones.</label>
            <ReferenceInput label="User" source="userID" reference="users" >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label="Title" source="title" />
            <ReferenceManyField sort={{ field: 'order', order: 'ASC' }} label="Slides" reference="slides" target="presentation_id">
                <Datagrid>
                    <NumberField label="Order" source="order" />
                    <TextField label="Slide Title" source="title" />
                    <TextField label="Slide Caption" source="caption" />
                    <TextField label="Image" source="image" />
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
            <label>Select a User and enter a title for your presentation.</label>
            <ReferenceInput label="User"  source="userID" reference="users"  defaultValue="" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput label="Title" source="title"/>
        </SimpleForm>
   </Create>
);
