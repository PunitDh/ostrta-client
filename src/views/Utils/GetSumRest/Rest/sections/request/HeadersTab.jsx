import React from "react";
import CustomTabPanel from "../../components/CustomTabPanel";
import { Bold } from "src/components/shared/styles";
import KeyValueComponent from "../../components/KeyValueComponent";
import { deleteHeaders, setHeaders } from "../../actions";

export default function HeadersTab({ state, dispatch, value }) {
  const handleChange = (e) => dispatch(setHeaders(e));
  const handleDelete = (e) => dispatch(deleteHeaders(e));

  return (
    <CustomTabPanel value={value} index={2}>
      <Bold>Headers</Bold>
      <KeyValueComponent
        property={state.request.headers}
        onChange={handleChange}
        onDelete={handleDelete}
      />
    </CustomTabPanel>
  );
}
