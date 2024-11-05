# homepage

## Requirements

* nodejs and npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Quick Start

```
git clone https://github.com/TheoBrigitte/homepage.git
cd homepage
npx next build
```

## Develop

Run hugo in server mode and start editing the files.

```
npm run dev
```

## Build

Build the website in the `out` directory.

```
npx next build
```

It can then easily be deployed with rsync for instance

```
rsync -avP --delete out/ destination/
```
