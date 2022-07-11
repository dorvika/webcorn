import "./clientForm.scss";
import React from "react";
import { object, string } from "yup";
import "yup-phone";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Button from "../Button";

const validate = object({
  firstName: string()
    .matches(/^[aA-яЯ-іІ-єЄ\s]+$/, "Поле должно содержать только буквы")
    .required("Обязательное поле"),
  phone: string()
    .required("Обязательное поле")
    .phone(null, true, "Номер должен начинаться с +380 и содержать 12 цифр"),
});

const ClientForm = ({ toggleModalContent, toggleFormContent, classes }) => {
  const handleSubmit = (values) => {
    console.log("Информация о клиенте", values);
    if (!classes) {
      toggleModalContent();
    } else {
      toggleFormContent();
    }
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        phone: "",
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <Form className={classes}>
            <div className={classes ? "questions__field-container" : null}>
              <Field
                className={
                  !formik.errors.firstName
                    ? classes
                      ? "questions__form-input"
                      : "form__input"
                    : classes
                    ? "questions__form-input questions-invalid"
                    : "form__input invalid"
                }
                id="firstName"
                name="firstName"
                placeholder="Имя"
                autoComplete="off"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className={classes ? "questions__error" : "error"}
              />
            </div>
            <div className={classes ? "questions__field-container" : null}>
              <Field
                className={
                  !formik.errors.phone
                    ? classes
                      ? "questions__form-input"
                      : "form__input"
                    : classes
                    ? "questions__form-input questions-invalid"
                    : "form__input invalid"
                }
                id="phone"
                name="phone"
                placeholder="+380 (99) 999-99-99"
                autoComplete="off"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={classes ? "questions__error" : "error"}
              />
            </div>
            <Button
              type="submit"
              classes={
                classes === "questions__form" ? "questions__btn" : "form__btn"
              }
            >
              Отправить
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

ClientForm.defaultProps = {
  classes: null,
};

export default ClientForm;
