REPORTER = nyan

tests:
			@./node_modules/.bin/mocha \
	      --reporter $(REPORTER) \
		  	--ui bdd \
		   	test/tests.js
