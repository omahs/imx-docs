---
id: "api-changelog"
title: "API changelog"
slug: "/api-changelog"
sidebar_position: 2
---

# API changelog

This page aims to convey the changes to our API over time. It will include updates on both breaking and non-breaking changes.

Currently, we use resource versioning (URI-based), i.e. `/v1/<endpoint>`. While we aim to ensure that breaking changes (non-[backwards compatible changes](#backwards-compatible-changes-non-breaking)) are versioned, there are occasions where it is necessary for us to introduce a breaking change to an existing endpoint. This will be communicated to you in advance, and information about this will also be made available on this page.

#### Backwards compatible changes (non-breaking):
* Adding new API resources.
* Adding new optional request parameters to existing API methods.
* Adding new properties to existing API responses.
* Changing the order of properties in existing API responses.
* Changing the length or format of opaque strings, such as object IDs, error messages, and other human-readable strings. This includes adding or removing fixed prefixes.

## Changelog

<table>
  <tbody>
    <tr>
      <th>Date</th>
      <th>Non-breaking changes</th>
      <th>Breaking changes</th>
    </tr>
    <tr>
      <td>9 Aug 2022</td>
      <td>
        <ul>
          <li>Description of change 1</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Description of change 1</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>