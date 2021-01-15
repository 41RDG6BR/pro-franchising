import React from 'react';
import {
  TextField,
} from '@material-ui/core';

const AddIngredients = (params) => {
  const {
    touched, errors, values, handleBlur, handleChange
  } = params.ud;
  return (
    <>
      <TextField
        error={Boolean(touched.name && errors.name)}
        fullWidth
        helperText={touched.name && errors.name}
        label="Nome"
        margin="normal"
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.name}
        variant="outlined"
      />
      <TextField
        error={Boolean(touched.cost && errors.cost)}
        fullWidth
        helperText={touched.cost && errors.cost}
        label="Cost"
        margin="normal"
        name="price"
        onBlur={handleBlur}
        onChange={handleChange}
        type="number"
        value={values.cost}
        variant="outlined"
      />
      <TextField
        error={Boolean(touched.quantity && errors.quantity)}
        fullWidth
        helperText={touched.quantity && errors.quantity}
        label="Quantity"
        margin="normal"
        name="image"
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        value={values.quantity}
        variant="outlined"
      />
    </>
  );
};

export default AddIngredients;
