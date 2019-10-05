.PHONY : start lint build pdf

lint:
		npx standard --fix

start:
		npx parcel serve --no-cache --no-source-maps --public-url . src/index.pug

build:
		npx parcel build --public-url . src/index.pug