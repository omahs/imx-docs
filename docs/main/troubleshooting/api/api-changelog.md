---
title: "Changelog"
slug: "/api-changelog"
sidebar_position: 2
---

# API changelog

This page is to provide information on:
- [API changelog](#api-changelog)
    - [Backwards compatible changes (non-breaking):](#backwards-compatible-changes-non-breaking)
  - [Upcoming breaking changes](#upcoming-breaking-changes)
  - [Changelog](#changelog)


Currently, we use resource versioning (URI-based), i.e. `/v1/<endpoint>`. While we aim to ensure that breaking changes (non-[backwards compatible changes](#backwards-compatible-changes-non-breaking)) are versioned, there are occasions where it is necessary for us to introduce a breaking change to an existing endpoint. This will be communicated to you in advance, and information about this will also be made available on this page.

### Backwards compatible changes (non-breaking):
* Adding new API resources.
* Adding new optional request parameters to existing API methods.
* Adding new properties to existing API responses.
* Changing the order of properties in existing API responses.
* Changing the length or format of opaque strings, such as object IDs, error messages, and other human-readable strings. This includes adding or removing fixed prefixes.

## Upcoming breaking changes

| Anticipated date of change | Description of change |
| -------------------------- | --------------------- |
|                            |                       |

## Changelog

| Date       | Non-breaking changes | Breaking changes                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2022-12-16 |                      | - Release of [Immutable Developer Hub](https://hub.immutable.com).<br/>- The [Create Project API](https://docs.x.immutable.com/reference/#/operations/createProject) requires your email to be verified and you are fully<br/> onboarded via the Developer Hub.<br/>- Onboarding requires [sign-up to Developer Hub](https://docs.x.immutable.com//docs/launch-collection/register-project#1-signup-to-the-immutable-developer-hub) to create projects. |
