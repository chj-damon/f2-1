import React, { useState } from 'react';
import { Chart, Geometry, Tooltip } from '@alitajs/f2';

const ChartDemo = () => {
  const [state, setstate] = useState([
    { year: '1951', sales: 38 },
    { year: '1952', sales: 52 },
    { year: '1956', sales: 61 },
    { year: '1957', sales: 145 },
    { year: '1958', sales: 48 },
    { year: '1959', sales: 38 },
    { year: '1960', sales: 38 },
    { year: '1962', sales: 38 },
  ]);
  return (
    <>
      <Chart
        width={750}
        height={400}
        data={state}
        pixelRatio={window.devicePixelRatio}
        animate
      >
        <Geometry type="interval" position="year*sales" />
        <Tooltip showTitle={true} />
      </Chart>
    </>
  );
};

export default ChartDemo;
