import { Meta } from '@storybook/react-vite/*';
import { SVGProps } from 'react';

export const baseIconConfigs: SVGProps<SVGSVGElement> = Object.freeze({
  xmlns: 'http://www.w3.org/2000/svg',
  width: '1em',
  height: '1em',
  focusable: false,
  'aria-hidden': true,
  fill: 'currentColor',
});

export const commonIconArgTypes: Meta['argTypes'] = {
  color: {
    control: 'color',
  },
  fontSize: {
    control: 'number',
  },
};

export const commonIconActiveArgTypes: Meta['argTypes'] = {
  ...commonIconArgTypes,
  active: {
    control: 'boolean',
  },
};
