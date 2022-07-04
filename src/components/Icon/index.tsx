import React, {forwardRef, FunctionComponent, MouseEvent, SVGProps} from 'react';

import {IconContainer} from './styled';

interface Props {
    className?: string;
    width?: number | string;
    height?: number | string;
    source: FunctionComponent<SVGProps<SVGSVGElement>>;
    onClick?: (event: MouseEvent) => void;
    fillColor?: string;
    strokeColor?: string;
}

export const Icon = forwardRef<HTMLSpanElement, Props>(
    (
        {
            className,
            width = 30,
            height = 30,
            onClick,
            source: Source,
            fillColor,
            strokeColor,
        },
        ref,
    ) => (
        <IconContainer
            ref={ref}
            className={className}
            onClick={onClick}
            fillColor={fillColor}
            strokeColor={strokeColor}
        >
            <Source width={width} height={height} />
        </IconContainer>
    ),
);
