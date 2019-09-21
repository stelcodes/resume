.PHONY : start lint

lint:
		npx standard --fix

start:
		parcel serve src/index.pug