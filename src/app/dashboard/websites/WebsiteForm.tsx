"use client";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Flex, VStack } from "@chakra-ui/react";
import CustomInput from "@/app/component copy/config/component/customInput/CustomInput";

const websiteValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  domain: Yup.string().url("Must be a valid URL").required("Domain is required"),
});

interface WebsiteFormProps {
  initialValues?: any;
  onSubmit: (values: any, actions: any) => void;
  close: () => void;
}

export default function WebsiteForm({ initialValues, onSubmit, close }: WebsiteFormProps) {
  const defaultValues = {
    name: "",
    domain: "",
    ...initialValues,
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={websiteValidation}
      onSubmit={(values, actions) => {
        // Auto-generate key from name if not provided
        const payload = {
          ...values,
          key: values.key || values.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
        };
        onSubmit(payload, actions);
      }}
    >
      {({ handleChange, values, errors, isSubmitting }) => (
        <Form>
          <VStack spacing={4} align="stretch">
            <CustomInput
              name="name"
              label="Website Name"
              placeholder="e.g. TechSahayata"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              showError={true}
            />
            <CustomInput
              name="domain"
              label="Website Domain URL"
              placeholder="e.g. https://techsahayata.com"
              value={values.domain}
              onChange={handleChange}
              error={errors.domain}
              showError={true}
            />

            <Flex justify="flex-end" gap={3} mt={4}>
              <Button variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>
                Save
              </Button>
            </Flex>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}
