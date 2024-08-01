export const auth = () => {
  return {
    userId: "admin",
    orgId: "org",
  };
};

export const clerkClient = {
  users: {
    getUser: async (userId: string) => {
      return {
        id: userId,
        privateMetadata: {
          accessType: "admin",
        },
        username: "admin",
        firstName: "",
        lastName: "",
      };
    },
  },
  organizations: {
    getOrganization: async function ({
      organizationId,
    }: {
      organizationId: string;
    }) {
      return { name: "name" };
    },
  },
};

// write useAuth and useClerk
export const useAuth = () => {
  return {
    isSignedIn: true,
  };
};

export const useClerk = () => {
  return {
    openSignIn: (params: any) => {
      console.log("openSignIn");
    },
  };
};
