.PHONY : start lint build pdf

lint:
		npx standard --fix

start:
		parcel serve --no-hmr --no-cache --no-source-maps --public-url . src/index.pug