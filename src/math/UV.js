/**
 * @author mrdoob / http://mrdoob.com/
 */

/**
 * @deprecated Use THREE.Vector2 instead
 */
THREE.UV = function ( u, v ) {

	console.warn( 'THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.')
	return new THREE.Vector2( u, v );

};
