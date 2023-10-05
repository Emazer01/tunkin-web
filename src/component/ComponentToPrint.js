import * as React from 'react';

export const ComponentToPrint = React.forwardRef((props, ref) => {
    React.useEffect(() => {
        
    },[])
    return (
        <div ref={ref} className='w-100 py-1 d-none d-md-block' id='recent'>
            
        </div>
    );
});