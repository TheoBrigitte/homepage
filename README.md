# homepage

## Requirements

* Hugo: https://gohugo.io/installation/

## Quick Start

```
git clone https://github.com/TheoBrigitte/homepage.git
cd homepage
hugo server --buildDrafts
```

## Develop

Run hugo in server mode and start editing the files.

```
hugo server --buildDrafts --cleanDestinationDir
```

## Build

Build the website in the `public` directory.

```
hugo --cleanDestinationDir --destination public
```

It can then easily be deployed with rsync for instance

```
rsync -avP --delete public/ destination/
```
