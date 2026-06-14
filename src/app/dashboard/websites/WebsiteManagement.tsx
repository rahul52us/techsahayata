"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  useDisclosure,
  useToast,
  Badge,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import CustomTable from "@/app/component copy/config/component/CustomTable/CustomTable";
import FormModel from "@/app/component copy/common/FormModel/FormModel";
import stores from "@/app/store/stores";
import WebsiteForm from "./WebsiteForm";
import DeleteWebsite from "./DeleteWebsite";

const WebsiteManagement = observer(() => {
  const {
    websiteStore: { getWebsites, createWebsite, updateWebsite, deleteWebsite, websites },
    auth: { openNotification },
  } = stores;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentWebsite, setCurrentWebsite] = useState<any>(null);

  useEffect(() => {
    getWebsites();
  }, [getWebsites]);

  const handleAddWebsite = () => {
    setCurrentWebsite(null);
    setIsEditModalOpen(true);
  };

  const handleEditWebsite = (website: any) => {
    setCurrentWebsite(website);
    setIsEditModalOpen(true);
  };

  const handleDeleteWebsite = (website: any) => {
    setCurrentWebsite(website);
    setIsDeleteModalOpen(true);
  };

  const handleFormSubmit = async (values: any, actions: any) => {
    try {
      if (currentWebsite) {
        await updateWebsite(currentWebsite._id, values);
        openNotification({ title: "Success", message: "Website updated successfully", type: "success" });
      } else {
        await createWebsite(values);
        openNotification({ title: "Success", message: "Website added successfully", type: "success" });
      }
      setIsEditModalOpen(false);
      getWebsites();
    } catch (error: any) {
      openNotification({
        title: "Error",
        message: error?.response?.data?.message || "Failed to save website",
        type: "error",
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const confirmDelete = async (id: string) => {
    try {
      await deleteWebsite(id);
      openNotification({ title: "Success", message: "Website deleted successfully", type: "success" });
      setIsDeleteModalOpen(false);
      getWebsites();
    } catch (error: any) {
      openNotification({
        title: "Error",
        message: "Failed to delete website",
        type: "error",
      });
    }
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Key", accessor: "key" },
    { 
      header: "Domain", 
      accessor: "domain",
      cell: (row: any) => (
        <a href={row.domain} target="_blank" rel="noreferrer" style={{ color: "teal", textDecoration: "underline" }}>
          {row.domain}
        </a>
      )
    },
    {
      header: "Status",
      accessor: "isActive",
      cell: (row: any) => (
        <Badge colorScheme={row.isActive ? "green" : "red"}>
          {row.isActive ? "Active" : "Inactive"}
        </Badge>
      ),
    },
  ];

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg">Manage Websites</Heading>
        <Button
          leftIcon={<FaPlus />}
          colorScheme="teal"
          onClick={handleAddWebsite}
        >
          Add Website
        </Button>
      </Flex>

      <CustomTable
        data={websites.data}
        columns={columns}
        onEdit={handleEditWebsite}
        onDelete={handleDeleteWebsite}
        loading={websites.loading}
      />

      <FormModel
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={currentWebsite ? "Edit Website" : "Add Website"}
      >
        <WebsiteForm
          initialValues={currentWebsite}
          onSubmit={handleFormSubmit}
          close={() => setIsEditModalOpen(false)}
        />
      </FormModel>

      <FormModel
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Website"
      >
        <DeleteWebsite
          deleteData={currentWebsite}
          submitForm={confirmDelete}
          close={() => setIsDeleteModalOpen(false)}
        />
      </FormModel>
    </Box>
  );
});

export default WebsiteManagement;
