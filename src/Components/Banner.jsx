import React from 'react';

function Banner() {
  return (
    <div className='h-[20vh] md:h-[77vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CD23BFF8AB733DC687DC58A26D99693E00FFF1D151BD13DAE97A9C528801E54F/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp)`}}>
      <div className='text-yellow-500 text-xl w-full text-center bg-black p-2'>Iron man</div>
    </div>
  );
}

export default Banner;

