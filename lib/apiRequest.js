import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset = () => {}, // Default to no-op if not provided
  redirect = () => {} // Default to no-op if not provided
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json(); // Parse JSON response if necessary
      setLoading(false);
      toast.success(`New ${resourceName} created successfully!`);
      reset();
      redirect();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("The given warehouse is not sufficient.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  } catch (error) {
    setLoading(false);
    console.error("Error in POST request:", error);
    toast.error("An unexpected error occurred. Please try again later.");
  }
}

export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset = () => {}, // Default to no-op if not provided
  redirect = () => {} // Default to no-op if not provided
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json(); // Parse JSON response if necessary
      setLoading(false);
      toast.success(`New ${resourceName} updated successfully!`);
      reset();
      redirect();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("The given warehouse is not sufficient.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  } catch (error) {
    setLoading(false);
    console.error("Error in PUT request:", error);
    toast.error("An unexpected error occurred. Please try again later.");
  }
}
