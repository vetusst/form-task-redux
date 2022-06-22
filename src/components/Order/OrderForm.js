import classes from "./OrderForm.module.css";

import { TextField, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";

import { connect } from "react-redux";
import { Field, Form, formValueSelector, reduxForm } from "redux-form";

import dishes from "../../app/dishesData";

const renderTextField = ({ input, label, meta: { touched, error }, type, ...custom }) => (
  <TextField
    required
    label={label}
    errorText={touched && error}
    type={type}
    onChange={(event, index, value) => input.onChange(value)}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <Select
    required
    label={label}
    errorText={touched && error}
    children={children}
    {...input}
    {...custom}
    sx={{
      textAlign: "start",
    }}
  />
);

const renderTimeField = ({ label, onChange, renderInput, meta: { touched, error }, InputProps, input, ...custom }) => (
  <TimePicker
    ampm={false}
    required
    openTo="hours"
    views={["hours", "minutes", "seconds"]}
    inputFormat="hh:mm:ss"
    errorText={touched && error}
    mask="__:__:__"
    label={label}
    onChange={(value) => input.onChange(value)}
    {...input}
    renderInput={(params) => <TextField {...params} required />}
    value={input.value === "" ? null : input.value}
  />
);

let OrderForm = ({ handleSubmit, selectedDish, error }) => {
  return (
    <div className={classes.formContainer}>
      <h2>Delecious Food, Deliveried To You</h2>

      <Form onSubmit={handleSubmit}>
        <Field name="name" component={renderTextField} label="Dish Name" />
        <Field name="preparation_time" component={renderTimeField} label="Time" />
        <FormControl>
          <InputLabel id="custom-select-label">Type</InputLabel>
          <Field name="type" component={renderSelectField} label="Type">
            {dishes &&
              dishes.map(({ name: dishName }, ind) => (
                <MenuItem value={dishName} key={`dish-${dishName}-${ind}`}>
                  {dishName.charAt(0).toUpperCase() + dishName.slice(1)}
                </MenuItem>
              ))}
          </Field>
        </FormControl>
        {dishes &&
          dishes.map((dish) =>
            dish.fields.map(
              (field) =>
                dish.name === selectedDish && (
                  <Field component={renderTextField} name={field.name} label={field.label} type={field.type} />
                )
            )
          )}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const selector = formValueSelector("order");
OrderForm = connect((state) => {
  return {
    selectedDish: selector(state, "type"),
  };
})(OrderForm);

OrderForm = reduxForm({
  form: "order",
})(OrderForm);

export default OrderForm;
