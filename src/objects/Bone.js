/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

 
 /**
  * @param {THREE.SkinnedMesh} belongsToSkin
  * @constructor
  * @extends THREE.Object3D
  */
THREE.Bone = function( belongsToSkin ) {

	THREE.Object3D.call( this );

	/** @type {THREE.SkinnedMesh} */
	this.skin = belongsToSkin;
	/** @type {THREE.Matrix4} */
	this.skinMatrix = new THREE.Matrix4();

};

THREE.Bone.prototype = Object.create( THREE.Object3D.prototype );

/**
 * @param {THREE.Matrix4} parentSkinMatrix
 * @param {boolean} forceUpdate
 */
THREE.Bone.prototype.update = function ( parentSkinMatrix, forceUpdate ) {

	// update local

	if ( this.matrixAutoUpdate ) {

		forceUpdate |= this.updateMatrix();

	}

	// update skin matrix

	if ( forceUpdate || this.matrixWorldNeedsUpdate ) {

		if( parentSkinMatrix ) {

			this.skinMatrix.multiplyMatrices( parentSkinMatrix, this.matrix );

		} else {

			this.skinMatrix.copy( this.matrix );

		}

		this.matrixWorldNeedsUpdate = false;
		forceUpdate = true;

	}

	// update children

	var child, i, l = this.children.length;

	for ( i = 0; i < l; i ++ ) {

		this.children[ i ].update( this.skinMatrix, forceUpdate );

	}

};

