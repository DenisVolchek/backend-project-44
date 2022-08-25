install: # Install dependencies;
	npm ci

brain-games: # Start brain-games;
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
