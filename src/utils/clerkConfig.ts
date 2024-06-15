import { createClerkClient } from "@clerk/clerk-sdk-node";

const clerk = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
});

export default clerk;
