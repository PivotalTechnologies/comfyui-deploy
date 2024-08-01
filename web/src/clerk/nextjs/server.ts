export const clerkClient = {
  users: {
    getUser: async (userId: string) => {
      return {
        id: userId,
        privateMetadata: {
          accessType: "admin",
        },
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

export const auth = () => {
  return {
    userId: "admin",
    orgId: "org",
  };
};
