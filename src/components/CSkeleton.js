import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function CSkeleton() {

  return (
    
        <div className="employee">
            <div className="pic">
                <Skeleton variant="rectangular" width={146} height={146} />
            </div>
            <div className="info skeletonInfo">
                <Skeleton width="70%" />
                <Skeleton width="50%" />
            </div>
        </div>
  );
}