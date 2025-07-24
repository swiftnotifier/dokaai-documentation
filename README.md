# Dokkai Docs

This repository contains the documentation for the Dokkai project, built using [Docusaurus](https://docusaurus.io/) and integrated with [TinaCMS](https://tina.io/) for content editing. Below are the instructions on how to set up, run, and build the project locally.

## Prerequisites

Make sure you have the following installed before proceeding:

- **Node.js**: Version 18 or above.
- **npm**: Comes with Node.js.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/swiftnotifier/dokaai-documentation.git
cd dokaai-documentation
```

## install all dependency

```
npm i
```

## run locally

```
npm run tina
```

## for build use

```
npm run build

make sure to add .env file

TINA_TOKEN=<your_tina_token_here>
NEXT_PUBLIC_TINA_CLIENT_ID=<your_tina_client_id_here>
SEARCH_TOKEN=<your_search_token_here>
```


// test