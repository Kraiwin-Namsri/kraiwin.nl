---
title: "Migrating Your Site to the Internet Computer (IC)"
date: 2025-02-20T12:42:00+01:00
draft: false
---

## Internet Computer?
Recently, I got interested in the Internet Computer Protocol (ICP) a cool blockchain technology that goes beyond traditional decentralized applications. Unlike most blockchains that only handle backend smart contracts, the Internet Computer allows developers to host both the frontend and backend on-chain. This means your entire application can run in a decentralized manner, rather than the common setup of a decentralized backend with a centralized frontend. Since the IC is directly connected to the internet and accessible via HTTP, it offers a more seamless way to build and deploy fully decentralized applications.

To explore this technology, I migrated my site from GitHub Pages to the Internet Computer. My domain, <a href="https://kraiwin.nl/">kraiwin.nl</a>, now redirects to this canister URL:
<a href="https://koesu-7iaaa-aaaae-qcswa-cai.icp0.io/">
https://koesu-7iaaa-aaaae-qcswa-cai.icp0.io/
</a>

*Of course this is not an explicit 301 redirect, but instead a CNAME 'redirect'.*

Because this migration was quite easy, I decided to create a rough guide on how to migrate your site to the IC.

You can check out the source code on <a href="https://github.com/Kraiwin-Namsri/kraiwin.nl">GitHub</a>.

---
## How to Migrate Your Site to the IC

Before getting started, make sure you have:
- A [set up](https://internetcomputer.org/docs/current/developer-docs/getting-started/install) **IC development environment**.
- Access to the [Network Nervous System (NNS)](https://nns.ic0.app/).
- Some **ICP tokens**.
- A **static website** ready for deployment.

---
## Steps to Deploy Your Site on the IC
### 1. Create a Canister
Go to the [NNS](https://nns.ic0.app/) and create a **new canister** to host your website.

### 2. Assign Controllers
Add your **principal ID** as a controller to ensure you have full management access over the canister.

### 3. Configure `dfx.json`
Create a `dfx.json` file to define your project settings. You can refer to the [dfx.json documentation](https://internetcomputer.org/docs/current/developer-docs/developer-tools/cli-tools/dfx-json) for more details.

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
To make your site more user-friendly, you can set up a custom domain. Detailed instructions are available in the [official IC documentation](https://internetcomputer.org/docs/current/developer-docs/web-apps/custom-domains/using-custom-domains).

---
## Setting up Continous Deployment (CD)
Because I use GitHub, I like to use GitHub workflows for my CD.
To set this up I took a look at how DFINITY setup <a href="https://github.com/dfinity/portal/blob/master/.github/workflows/cd.yml">their</a> CD workflow. I basically copied theirs, removed all the unnecessary Contentfull and Slack stuff, and kept the deploying part.
After this I got my identity's private key in base64 using:
```sh
dfx identity export <identity-name> | base64
```
and added that to my repository as a secret. That way it can be accessed using:
```sh
echo "$DFX_IDENTITY" | base64 -d > ~/.config/dfx/identity/default/identity.pem
```

---
## Future?
This site does not have any backend, and is just a staticly served site. Thus not fully utilizing the technology behind the IC. To address this, I am learning Motoko, which is the official language of IC canisters (Smart Contracts). Motoko offers some abstractions for a more seamless approach working with canisters, and I hope will give me a clearer understanding of how the Internet Computer Protocol works.