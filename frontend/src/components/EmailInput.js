import React, { useEffect } from 'react';
import { TextField, Box, Button } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

const EmailInput = ({ onSubmitCallback, initialValue = '' }) => {
  const formik = useFormik({
    initialValues: {
      email: initialValue,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      onSubmitCallback(values);
      setSubmitting(false);
    },
  });

  useEffect(() => {
    formik.setFieldValue('email', initialValue);
  }, [initialValue]);

  return (
    <Box
      component={'form'}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      sx={{
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <Box flex={'1 1 auto'} marginTop={2}>
          <TextField
            name="email"
            label="Enter your email"
            variant="outlined"
            color="primary"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EmailInput;
