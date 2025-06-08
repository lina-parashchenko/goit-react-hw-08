import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import { TextField, Button, Box } from "@mui/material";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Short").max(50, "Long").required("Required"),
  number: Yup.string()
    .phone("UA", "Please enter a valid phone number")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(addContact(values)).unwrap();
      toast.success(`Контакт "${values.name}" успішно додано!`);
      actions.resetForm();
    } catch (error) {
      toast.error("Не вдалося додати контакт. Спробуйте ще раз.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
              margin: "0 auto",
              padding: 2,
            }}
          >
            <TextField
              id={nameFieldId}
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
            />

            <TextField
              id={numberFieldId}
              label="Phone Number"
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
