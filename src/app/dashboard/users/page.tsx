"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import stores from "../../../store/stores";
import type { UserRole } from "@/lib/types";

const initialValues = {
  name: "",
  email: "",
  password: "",
  role: "editor" as UserRole,
  isActive: true,
};

const DashboardUsersPage = observer(() => {
  const {
    userStore: { users, getUsers, createUser, updateUser, deleteUser },
  } = stores;
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getUsers()
      .catch((err: any) => setError(err?.message || "Unable to load users"))
      .finally(() => setLoading(false));
  }, [getUsers]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const resetForm = () => {
    setFormData(initialValues);
    setEditingId("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      if (editingId) {
        await updateUser(editingId, formData);
      } else {
        await createUser(formData);
      }
      await getUsers();
      resetForm();
    } catch (err: any) {
      setError(err?.message || "Unable to save user");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box p={{ base: 4, md: 8 }} bg="gray.50" borderRadius="lg" boxShadow="lg" minH="100vh">
      <Heading as="h1" size="lg" color="teal.700" mb={2}>
        Users
      </Heading>
      <Text color="gray.600" mb={6}>
        Manage the people who can access the dashboard.
      </Text>

      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={6}>
        <Box p={6} bg="white" borderRadius="2xl" boxShadow="sm">
          <Heading as="h2" size="md" mb={4}>
            {editingId ? "Edit User" : "Add User"}
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={formData.name} onChange={handleInputChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" value={formData.password} onChange={handleInputChange} required={!editingId} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Role</FormLabel>
              <Select name="role" value={formData.role} onChange={handleInputChange}>
                <option value="admin">admin</option>
                <option value="editor">editor</option>
                <option value="viewer">viewer</option>
              </Select>
            </FormControl>
            <Checkbox name="isActive" colorScheme="teal" isChecked={formData.isActive} onChange={handleInputChange} mb={4}>
              Active user
            </Checkbox>

            {error ? (
              <Box mb={4} p={3} borderRadius="lg" bg="red.50" color="red.700">
                {error}
              </Box>
            ) : null}

            <Flex gap={3}>
              <Button colorScheme="teal" type="submit" isLoading={saving} loadingText="Saving">
                {editingId ? "Update User" : "Create User"}
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </Flex>
          </form>
        </Box>

        <Box p={6} bg="white" borderRadius="2xl" boxShadow="sm">
          <Heading as="h2" size="md" mb={4}>
            Users List
          </Heading>
          {loading ? (
            <Flex justify="center" py={10}>
              <Spinner size="lg" />
            </Flex>
          ) : (
            <SimpleGrid columns={1} spacing={4}>
              {users.data.map((user: any) => (
                <Box key={user._id} borderWidth="1px" borderRadius="2xl" p={4}>
                  <Flex justify="space-between" align="start" gap={4}>
                    <Box flex="1">
                      <Heading size="sm">{user.name}</Heading>
                      <Text mt={1} fontSize="sm" color="gray.500">
                        {user.email}
                      </Text>
                      <Text mt={2} fontSize="sm" color="gray.600">
                        Role: {user.role}
                      </Text>
                    </Box>
                    <Checkbox isChecked={user.isActive} readOnly colorScheme="teal">
                      Active
                    </Checkbox>
                  </Flex>

                  <Flex mt={4} gap={3}>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="teal"
                      onClick={() => {
                        setEditingId(user._id);
                        setFormData({
                          name: user.name || "",
                          email: user.email || "",
                          password: "",
                          role: (user.role as UserRole) || "editor",
                          isActive: !!user.isActive,
                        });
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="red"
                      onClick={async () => {
                        await deleteUser(user._id);
                        await getUsers();
                      }}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </SimpleGrid>
    </Box>
  );
});

export default DashboardUsersPage;
