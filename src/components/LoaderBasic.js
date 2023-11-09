import React from 'react';
import resturantDataLoader from '../assets/images/resturant-data-loader.gif';

function LoaderBasic() {
	return (
		<div className='loader-wrapper d-flex align-items-center justify-content-center'>
			<img src={resturantDataLoader} alt='logo' />
		</div>
	);
}

export default LoaderBasic;
