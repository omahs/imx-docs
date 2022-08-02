---
description: Authorised SDK requests
id: authentication
slug: /authentication
tags: [core-sdk-example, auth]
---

# Authentication

### Authorised project owner requests

Some methods require authorisation by the project owner, which consists of a Unix epoch timestamp signed with your ETH key and included in the request header.

On project and collection methods that require authorisation, this signed timestamp string can typically be passed as the `iMXSignature` and `iMXTimestamp` parameters.

```ts
// Example method to generate authorisation headers
const getProjectOwnerAuthorisationHeaders = async (signer: Signer) => {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = await signRaw(timestamp, signer);

  return {
    timestamp,
    signature,
  };
};

// Using generated authorisation headers
const createProject = async (
  name: string,
  company_name: string,
  contact_email: string,
) => {
  const api = new ProjectsApi(this.config.api);
  const { timestamp, signature } = getProjectOwnerAuthorisationHeaders(signer);

  return await api.createProject({
    createProjectRequest: {
      name,
      company_name,
      contact_email,
    },
    iMXSignature: signature,
    iMXTimestamp: timestamp,
  });
};
```

The following methods require project owner authorisation:

**Projects**

- createProject
- getProject
- getProjects

**Collections**

- createCollection
- updateCollection

**Metadata**

- addMetadataSchemaToCollection
- updateMetadataSchemaByName
