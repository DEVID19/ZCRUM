import { getOrganization } from "@/actions/organizations";
import React from "react";

const Organization = async ({ params }) => {
  const { orgId } = params;
  const organization = await getOrganization(orgId);

  if (!organization) {
    return <div>Organization not found </div>;
  }

  return (
    <div>
      <h1>{organization.name}'s project</h1>
    </div>
  );
};

export default Organization;
