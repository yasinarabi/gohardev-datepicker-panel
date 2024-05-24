import React from 'react';
import { Button } from '@grafana/ui';
import { css } from '@emotion/css';
import { ExtraButtonProps } from 'types';

const ExtraButton: React.FC<ExtraButtonProps> = ({children, onClick, options, toolTip}) => {
    return ( 
    <Button
        size={options.buttonsSize}
        variant={options.buttonsVariant}
        fill={options.buttonsFill}
        tooltip={options.buttonsTooltip ? toolTip : undefined}
        className={css`margin: 0px 4px 4px 0px;`}
        onClick={onClick}
    >
        {children}
    </Button> );
}
 
export default ExtraButton ;
