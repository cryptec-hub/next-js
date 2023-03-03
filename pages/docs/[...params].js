// Import the useRouter hook from the Next.js router
import { useRouter } from "next/router";

// Define a functional component called "Docs"
export default function Docs() {
  // Use the useRouter hook to get the current route information
  const router = useRouter();
  // Extract the "params" query parameter from the URL and default to an empty array if it's undefined
  const { params = [] } = router.query;

  // Log the value of the "params" array to the console for debugging purposes
  console.log(params);

  // Check the length of the "params" array and render different content based on its value
  if (params.length === 3) {
    return (
      <h1>
        Viewing {params[0]} for {params[1]} with {params[2]}
      </h1>
    );
  } else if (params.length === 2) {
    return (
      <h1>
        Viewing {params[0]} for {params[1]}
      </h1>
    );
  }
}

// If the "params" array has a different length, then render a message indicating that the user is on the root page
