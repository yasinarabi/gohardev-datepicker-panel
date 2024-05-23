import React from 'react';
import { Button } from '@grafana/ui';
import { css } from '@emotion/css';
import { SimpleOptions } from 'types';


interface ExtraButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    options: SimpleOptions;
    toolTip: string;
}

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