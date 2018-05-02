import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton,
    DisabledInput, TextInput, SimpleForm } from 'admin-on-rest';
import TextFields from 'material-ui/TextField';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label= "_id" source="_id" />
            <TextField label= "Name" source="name" />
            <TextField label="E-mail" source="email" />
            <TextField label="Role" source="roles" />
            <EditButton />
        </Datagrid>
    </List>
);


export const UsersEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <TextInput label= "Enter the name of the user" source="name" />
            <TextInput label="Enter the email of the user" source="email" />
            <TextInput label="Enter the role(admin/user)" source="roles" />
            <TextInput label="Enter the password" source="password" />
            <label>Note: Always retype your password when editing!</label>
        </SimpleForm>
    </Edit>
);


export const UsersCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Enter the email of the user" source="email"/>
            <TextInput label="Enter the role(admin/user)" source="roles"/>
            <TextInput label="Enter the password" source="password"/>
        </SimpleForm>
    </Create>
);
/*
<TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
*/
