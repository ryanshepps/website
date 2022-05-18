# [ryansheppard.tech](https://ryansheppard.tech)

Welcome! This is the remote repository that holds my personal website.

# Features

- Continuous integration through GitHub Actions.
- Fully customized lint configuration.
- Continuous deployment from GitHub Actions to Google Cloud.

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

