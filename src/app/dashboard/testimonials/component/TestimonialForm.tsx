'use client';
import {  Button, Flex, VStack, Card, SimpleGrid, Box } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { useState } from "react";
 import testimonialValidation from "../utils/validation";
 import ShowFileUploadFile from "@/app/components/ShowFileUploadFile/ShowFileUploadFile";
import { removeDataByIndex } from "@/app/config/utils/util";
import CustomInput from "@/app/component copy/config/component/customInput/CustomInput";
import stores from "@/app/store/stores";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
 
interface TestimonialFormProps {
  initialValues: { name: string; profession: string; description: string; image?: any };
  onSubmit: any;
  close: () => void;
  isEdit?:boolean
}

const TestimonialForm: React.FC<TestimonialFormProps> = observer(({ initialValues, onSubmit, close, isEdit }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    stores.websiteStore.getWebsites();
  }, []);

  return (
    <Card p={8} borderRadius={10} bg="white" boxShadow="lg">
      <Formik
        initialValues={initialValues}
        validationSchema={testimonialValidation}
        onSubmit={(values, actions) => {
          onSubmit({ ...values }, actions);
        }}
      >
        {({ handleChange, values, errors, isSubmitting, setFieldValue } : any) => (
          <Form>
            <VStack spacing={4} align="center">
              {/* Image Upload Section */}
              <Box width="100%">
                  {values?.image?.file?.length === 0 ? (
                    <CustomInput
                      type="file-drag"
                      name="image"
                      value={values.image}
                      isMulti={true}
                      accept="image/*"
                      onChange={(e: any) => {
                        setFieldValue("image", {
                          ...values.image,
                          file: e.target.files[0],
                          isAdd: 1,
                        });
                      }}
                      showError={showError}
                      error={errors.image}
                    />
                  ) : (
                    <Box mt={-5} width="100%">
                      <ShowFileUploadFile
                        files={values.image?.file}
                        removeFile={() => {
                          setFieldValue("image", {
                            ...values.image,
                            file: removeDataByIndex(values.image, 0),
                            isDeleted: 1,
                          });
                        }}
                        edit={isEdit}
                      />
                    </Box>
                  )}
                </Box>

              {/* Form Fields */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <CustomInput
                  name="websites"
                  label="Select Websites"
                  type="select"
                  isMulti={true}
                  options={stores.websiteStore.websites.data.map((w: any) => ({ label: w.name, value: w.key }))}
                  onChange={(selected: any) => {
                    setFieldValue("websites", selected ? selected.map((s: any) => s.value) : []);
                  }}
                  value={
                    values.websites
                      ? stores.websiteStore.websites.data.filter((w: any) => values.websites.includes(w.key)).map((w: any) => ({ label: w.name, value: w.key }))
                      : []
                  }
                  error={errors.websites as string}
                  showError={showError}
                />
                <CustomInput
                  name="name"
                  placeholder="Enter the Name"
                  label="Name"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name}
                  showError={showError}
                />
                <CustomInput
                  name="profession"
                  placeholder="Write Your Profession"
                  label="Profession"
                  onChange={handleChange}
                  value={values.profession}
                  error={errors.profession}
                  showError={showError}
                />
                <CustomInput
                  name="rating"
                  placeholder="Enter the Rating"
                  label="Rating"
                  type="number"
                  onChange={handleChange}
                  value={values.rating}
                  error={errors.rating}
                  showError={showError}
                />
              </SimpleGrid>

              {/* Description Field */}
              <CustomInput
                name="description"
                placeholder="Description"
                label="Description"
                type="textarea"
                error={errors.description}
                onChange={handleChange}
                value={values.description}
                rows={4}
                showError={showError}
              />

              {/* Action Buttons */}
              <Flex justifyContent="end" w="full" mt={4}>
                <Button leftIcon={<FaTimes />} mr={3} onClick={close} variant="outline" colorScheme="red">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  leftIcon={<FaCheck />}
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  onClick={() => setShowError(true)}
                >
                  Save
                </Button>
              </Flex>
            </VStack>
          </Form>
        )}
      </Formik>
    </Card>
  );
});

export default TestimonialForm;