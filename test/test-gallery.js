'use strict';

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../gallery');

describe('Gallery component', function() {
    it('Renders the Gallery of images',  function() {
        var images = [
            {
                url: "http://www.example.com/image.png",
                description: "Example description"
            },
            {
                url: "http://www.example.com/image.png",
                description: "Example description"
            }
        ];

        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);

        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
        console.log(result.props.children[0].type);
        var img1 = result.props.children[0];
        img1.type.should.be.a('function');
        img1.props.url.should.equal(images[0].url);
        img1.props.description.should.equal(images[0].description);

        var img2 = result.props.children[1];
        img2.type.should.be.a('function');
        img2.props.url.should.equal(images[1].url);
        img2.props.description.should.equal(images[1].description);
    });
});