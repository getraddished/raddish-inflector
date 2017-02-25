'use strict';

var Inflector = require('../inflector');
require('should');

describe('Pluralize tests', function() {
    it('Should return a correctly pluralized string', function(done) {
        Inflector.pluralize('houses').should.equal('houses');
        Inflector.pluralize('house').should.equal('houses');
        Inflector.pluralize('fish').should.equal('fish');

        done();
    });
});

describe('Singularize tests', function() {
    it('Should return a correcly singularized string', function(done) {
        Inflector.singularize('house').should.equal('house');
        Inflector.singularize('houses').should.equal('house');
        Inflector.singularize('theses').should.equal('thesis');

        done();
    });
});