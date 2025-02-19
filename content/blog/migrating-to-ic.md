---
title: "Migrating your site to the Internet Computer (IC)"
date: 2025-02-19T12:42:00+01:00
draft: false
---
Recently, This site migrated from Github pages to the Internet Computer.
See <a href="https://github.com/Kraiwin-Namsri/kraiwin.nl">Github</a> for the sourcecode.

## What is the Internet Computer (IC)?
The **Internet Computer (IC)** is a blockchain that goes beyond simple ledger transactions, offering a decentralized computing platform. It provides an alternative to traditional cloud services like AWS and Azure by:

- Reducing **vendor lock-in** risks.
- Simplifying **deployment** and **scaling**.
- Enabling **decentralized AI** applications.
- Potential for mainstream adoption if there is support for hosting **PHP or WordPress** sites.

## How to migrate your site?

Before migrating your static website, ensure you have:
- A [set up](https://internetcomputer.org/docs/current/developer-docs/getting-started/install) **IC development environment**.
- Access to the [Network Nervous System (NNS)](https://nns.ic0.app/).
- Some **ICP tokens**.
- A **static website** ready for deployment.

---
## Steps to Deploy Your Website
### 1. Create a Canister
Go to the [NNS](https://nns.ic0.app/) and create a **new canister** to host your website.

### 2. Assign Controllers
Add your **principal ID** as a controller for the canister, ensuring you have the necessary permissions.

### 3. Configure `dfx.json`
Create a `dfx.json` file to define your project settings. Refer to the [dfx.json documentation](https://internetcomputer.org/docs/current/developer-docs/developer-tools/cli-tools/dfx-json) for configuration details.

### 4. Define `canister_ids.json`
Generate and configure `canister_ids.json` to track the canister ID assigned to your project. More details can be found in the [dfx canister docs](https://internetcomputer.org/docs/current/developer-docs/developer-tools/cli-tools/cli-reference/dfx-canister).

### 5. Deploy the Website
Run the following command to deploy your site to the Internet Computer:
```sh
 dfx deploy --ic
```
Once completed, your website will be accessible at a URL like:
<a href="https://koesu-7iaaa-aaaae-qcswa-cai.icp0.io/">
https://koesu-7iaaa-aaaae-qcswa-cai.icp0.io/
</a>

---
## Setting Up a Custom Domain
To make your website more user-friendly, set up a custom domain. Detailed instructions can be found in the [official IC documentation](https://internetcomputer.org/docs/current/developer-docs/web-apps/custom-domains/using-custom-domains).

With these steps, your website is now fully deployed on the Internet Computer!