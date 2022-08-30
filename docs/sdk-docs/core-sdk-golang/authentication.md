---
description: Authorised SDK requests
id: authentication
slug: /authentication
tags: [core-sdk-golang, auth]
keywords: [imx-dx]
---

# Authentication

## Authorised project owner requests

Some methods require authorisation by the project owner, which consists of a Unix epoch timestamp signed with your ETH key and included in the request header.

On project and collection methods that require authorisation, this signed timestamp string can typically be passed as the `IMXSignature` and `IMXTimestamp` parameters.
See [here](quickstart.md#how-to-generate-the-required-signers) for how to generate the signers required.

```go
// Example method to generate authorisation headers
func GetProjectOwnerAuthorisationHeaders(l1signer signers.L1Signer) (timestamp, signature string, err error) {
    timestamp = strconv.FormatInt(time.Now().Unix(), 10)
    signedTimestamp, err := l1signer.SignMessage(timestamp)
    if err != nil {
        return "", "", err
    }
    signature = hexutil.Encode(signedTimestamp)
    return timestamp, signature, nil
}

func CreateProject(l1signer signers.L1Signer, name, companyName, contactEmail string) (*api.CreateProjectResponse, error) {
    configuration := api.NewConfiguration()
    apiClient := api.NewAPIClient(configuration)
    ctx := context.WithValue(context.Background(), api.ContextServerIndex, config.Sandbox)

    timestamp, signature, err := GetProjectOwnerAuthorisationHeaders(l1signer)
    if err != nil {
        return nil, err
    }

    createProjectRequest := api.NewCreateProjectRequest(companyName, contactEmail, name)
    createProjectResponse, httpResp, err := apiClient.ProjectsApi.CreateProject(ctx).
        CreateProjectRequest(*createProjectRequest).
        IMXTimestamp(timestamp).
        IMXSignature(signature).
        Execute()
    if err != nil {
        return nil, fmt.Errorf("error when calling `CreateProject`: %v, HTTP response body: %v", err, httpResp.Body)
    }

    return createProjectResponse, nil
}
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
