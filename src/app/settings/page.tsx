"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChainTubeService } from "@/hooks/chainTubeCall";

const chainTubeService = new ChainTubeService();

export default function ProfileForm({
  initialValues,
  profileId,
  profileCapId,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // Form validation function
  const validate = (values: { username: any }) => {
    const errors: { username?: string } = {};
    if (!values.username) {
      errors.username = "Username Required";
    }
    return errors;
  };

  // Function to handle creating profile
  const handleCreateProfile = async (values: { username: any; bio?: any }) => {
    setIsLoading(true);
    setError("");
    try {
      await chainTubeService.create_profile({
        Arg0: values.username,
        Arg1: values.bio,
        Arg2: "additionalArg2", // Replace with actual value if needed
        Arg3: "additionalArg3", // Replace with actual value if needed
      });
      alert("Profile created successfully");
    } catch (err) {
      setError("Failed to create profile");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle setting username
  const handleSetUsername = async (username: any) => {
    setIsLoading(true);
    setError("");
    try {
      await chainTubeService.set_username({
        profileId,
        profileCapId,
        username,
      });
      alert("Username updated successfully");
    } catch (err) {
      setError("Failed to update username");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle setting profile picture
  const handleSetPfp = async (pfp: any) => {
    setIsLoading(true);
    setError("");
    try {
      await chainTubeService.set_pfp({
        profileId,
        profileCapId,
        pfp,
      });
      alert("Profile picture updated successfully");
    } catch (err) {
      setError("Failed to update profile picture");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle setting bio
  const handleSetBio = async (bio: any) => {
    setIsLoading(true);
    setError("");
    try {
      await chainTubeService.set_bio({
        profileId,
        profileCapId,
        bio,
      });
      alert("Bio updated successfully");
    } catch (err) {
      setError("Failed to update bio");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle deleting profile
  const handleDeleteProfile = async () => {
    setIsLoading(true);
    setError("");
    try {
      await chainTubeService.delete_profile(profileId, profileCapId);
      alert("Profile deleted successfully");
      // Clear form values
      setFormValues(initialValues);
    } catch (err) {
      setError("Failed to delete profile");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 5000); // Clear error after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        handleCreateProfile(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          {error && (
            <div className="absolute top-24 right-4 z-50">
              <div className="bg-red-600 py-4 px-6 rounded-l-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="fill-current text-white"
                  width="20"
                  height="20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  ></path>
                </svg>
              </div>
              <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-96 border border-l-transparent border-gray-200 text-black">
                <div>{error}</div>
                <button
                  onClick={() => setError("")}
                  className="focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-gray-700"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
          <div className="flex space-x-16 p-8 m-24 dark:bg-customPurple-foreground justify-center items-center rounded-md">
            <div className="space-y-6 flex flex-col">
              <div>
                <Avatar className="h-24 w-24 object-cover rounded-full">
                  <AvatarImage src="/images/user.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <label htmlFor="username" className="block text-xl text-white">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="ABCD"
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  onBlur={() => handleSetUsername(values.username)}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 mt-1"
                />
                <p className="text-gray-500 text-sm">
                  This is your public display name.
                </p>
              </div>
              <div>
                <label htmlFor="bio" className="block text-xl text-white">
                  Bio
                </label>
                <Field
                  type="text"
                  name="bio"
                  placeholder="I'm a software engineer"
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  onBlur={() => handleSetBio(values.bio)}
                />
                <ErrorMessage
                  name="bio"
                  component="div"
                  className="text-red-500 mt-1"
                />
                <p className="text-gray-500 text-sm">
                  You can @mention other users and organizations to link to
                  them.
                </p>
              </div>
              <div>
                <label htmlFor="pfp" className="block text-xl text-white">
                  Profile URL
                </label>
                <Field
                  type="text"
                  name="pfp"
                  placeholder="Profile picture URL"
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  onBlur={() => handleSetPfp(values.pfp)}
                />
                <ErrorMessage
                  name="pfp"
                  component="div"
                  className="text-red-500 mt-1"
                />
                <p className="text-gray-500 text-sm">
                  Enter the URL of your profile picture.
                </p>
              </div>
              <div className="flex space-x-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="dark:bg-black dark:text-white border border-gray-100"
                >
                  Create/Edit Profile
                </Button>
                <Button
                  type="button"
                  onClick={handleDeleteProfile}
                  className="dark:bg-black dark:text-white border border-gray-100"
                >
                  Delete Profile
                </Button>
              </div>
            </div>

            {/* Following and Followers List */}
            <div className="flex flex-col space-y-12">
              <div className="card flex flex-col justify-center items-center space-y-4">
                <h2 className="text-xl font-bold mb-2">Following</h2>
                <div className="flex space-x-4">
                  <div className="dark:bg-customPurple card-item p-2 border rounded shadow flex items-center space-x-2">
                    <Avatar className="h-12 w-12 object-cover rounded-full">
                      <AvatarImage src="/images/user1.svg" />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <p>Username 1</p>
                  </div>
                  <div className="dark:bg-customPurple card-item p-2 border rounded shadow flex items-center space-x-2">
                    <Avatar className="h-12 w-12 object-cover rounded-full">
                      <AvatarImage src="/images/user2.svg" />
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <p>Username 2</p>
                  </div>
                  {/* Add more following items as needed */}
                </div>
              </div>
              <div className="card flex flex-col justify-center items-center space-y-4">
                <h2 className="text-xl font-bold mb-2">Followers</h2>
                <div className="flex space-x-4">
                  <div className="dark:bg-customPurple card-item p-2 border rounded shadow flex items-center space-x-2">
                    <Avatar className="h-12 w-12 object-cover rounded-full">
                      <AvatarImage src="/images/user3.svg" />
                      <AvatarFallback>EF</AvatarFallback>
                    </Avatar>
                    <p>Username 3</p>
                  </div>
                  <div className="dark:bg-customPurple card-item p-2 border rounded shadow flex items-center space-x-2">
                    <Avatar className="h-12 w-12 object-cover rounded-full">
                      <AvatarImage src="/images/user4.svg" />
                      <AvatarFallback>GH</AvatarFallback>
                    </Avatar>
                    <p>Username 4</p>
                  </div>
                  {/* Add more followers items as needed */}
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
function setFormValues(initialValues: any) {
  throw new Error("Function not implemented.");
}
