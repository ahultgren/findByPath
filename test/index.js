"use strict";

/*global it:true, describe:true*/
/*jshint expr:true*/
var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    findByPath = require('../.');

describe('findByPath tests', function () {
  var data = { 
        yep: "first level",
        foo: { 
          yep: "second level",
          bar: { 
            yep: "third level",
            baz: { 
              yep: "fourth level" 
            }
          }
        }
      };

  it('finds first level', function () {
    findByPath(data, 'yep').should.be.eql("first level");
  });

  it('finds second level', function () {
    findByPath(data, 'foo.yep').should.be.eql("second level");
  });

  it('finds third level', function () {
    findByPath(data, 'foo.bar.yep').should.be.eql("third level");
  });

  it('returns undefined for unknown deep reference', function () {
    expect(findByPath(data, 'foo.bam.yep')).to.be.undefined;
  });

  it('returns undefined for first level reference', function () {
    expect(findByPath(data, 'bam')).to.be.undefined;
  });

  it('returns undefined for empty reference', function () {
    expect(findByPath(data, '')).to.be.undefined;
  });

  it('works with custom separator', function () {
    expect(findByPath(data, 'foo/bar/yep', '/')).to.eq(data.foo.bar.yep);
  });
});
