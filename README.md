# Payment Flow Test
A demonstration website for LINE Pay API.


## Environment Variables

`SITE_URL`: website URL

`LINE_PAY_CHANNEL_ID`: LINE Pay Channel ID for LINE Pay API Client

`LINE_PAY_CHANNEL_KEY`: LINE Pay Channel key fro LINE Pay API Client

`LINE_PAY_CLIENT_MODE`: 'development' or 'production'


## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
