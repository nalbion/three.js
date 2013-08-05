/**
 * @author alteredq / http://alteredqualia.com/
 *
 * @param {number} left
 * @param {number} right
 * @param {number} top
 * @param {number} bottom
 * @param {number=} near
 * @param {number=} far
 *
 * @constructor
 * @extends THREE.Camera
 */
THREE.OrthographicCamera = function ( left, right, top, bottom, near, far ) {

	THREE.Camera.call( this );

	this.left = left;
	this.right = right;
	this.top = top;
	this.bottom = bottom;

	this.near = ( near !== undefined ) ? near : 0.1;
	this.far = ( far !== undefined ) ? far : 2000;

	this.updateProjectionMatrix();

};

THREE.OrthographicCamera.prototype = Object.create( THREE.Camera.prototype );

THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {

	this.projectionMatrix.makeOrthographic( this.left, this.right, this.top, this.bottom, this.near, this.far );

};
