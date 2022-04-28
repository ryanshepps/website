# [ryansheppard.tech](https://ryansheppard.tech)

Welcome! This is the remote repository that holds my personal website.

# Features

- Automatic deployment to Google Cloud.
- Fully customized lint configuration.
- Automatic lint checks through GitHub workflow.

# Setup

Install Dependencies

```
yarn install --frozen-lockfile
```

# Running

## Local

```
yarn dev
```

## Deployment

```
docker build . -t ryansheppard.tech
docker run ryansheppard.tech
```

