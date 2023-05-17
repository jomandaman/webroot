export const forEach = ( nodelist, callback ) => {
	if ( nodelist && callback ) {
		for ( let i = 0; i < nodelist.length; i++ ) {
			callback( nodelist[ i ], i );
		}
	}
}

export const bindComponents = ( selector, componentClass, isClass = false ) => {
	const components = document.querySelectorAll( selector );
    
	if ( components && components.length ) {
		forEach( components, ( component ) => {
			isClass ? new componentClass(component) : componentClass(component)
		});
	}
}