import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NewsMediaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="type" source="typeField" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
