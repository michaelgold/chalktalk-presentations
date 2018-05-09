import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  RadioButtonGroupInput,
  required,
  TextInput,
  SimpleForm
} from "admin-on-rest";

export const UsersList = props => (
  <List {...props} title={
    <div>
      <div>Users List</div>
      <div style={{ fontSize: "14px" }}>You can either create new Users or edit existing ones</div>
    </div>
  }>
    <Datagrid>
      <TextField label="Name" source="name" />
      <TextField label="E-mail" source="email" />
      <TextField label="Role" source="roles" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UsersEdit = props => (
  <Edit {...props} title={
    <div>
      <div>Edit User</div>
      <div style={{ fontSize: "14px" }}>You can modify any of the fields for this User</div>
    </div>
  }>
    <SimpleForm>
      <TextInput label="Name" source="name" validate={required} />
      <TextInput
        label="E-mail"
        source="email"
        type="email"
        validate={required}
      />
      <RadioButtonGroupInput
        label="Role"
        source="roles"
        choices={[{ id: "user", name: "User" }, { id: "admin", name: "Admin" }]}
      />

      <TextInput
        label="Password"
        source="password"
        type="password"
        validate={required}
      />
      <label>Note: Always retype your password when editing!</label>
    </SimpleForm>
  </Edit>
);

export const UsersCreate = props => (
  <Create {...props} title={
    <div>
      <div>Create User</div>
      <div style={{ fontSize: "14px" }}>Fill out the required fields and select a role</div>
    </div>
  }>
    <SimpleForm>
      <TextInput label="Name" source="name" validate={required} />
      <TextInput
        label="E-mail"
        source="email"
        type="email"
        validate={required}
      />
      <RadioButtonGroupInput
        label="Role"
        validate={required}
        source="roles"
        choices={[{ id: "user", name: "User" }, { id: "admin", name: "Admin" }]}
      />
      <TextInput
        label="Password"
        source="password"
        type="password"
        validate={required}
      />
    </SimpleForm>
  </Create>
);
