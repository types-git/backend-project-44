install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-games:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint