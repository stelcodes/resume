.PHONY : start lint build pdf

lint:
		npx standard --fix

start:
		npx parcel serve --no-cache --no-source-maps src/index.pug

build:
		npx parcel build src/index.pug