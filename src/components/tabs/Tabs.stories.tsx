import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';
import { IconChain } from '../icons/solos/chain/IconChain';
import { IconDuoLog } from '../icons/duos/log/IconDuoLog';
import { IconToolPreview } from '../icons/solos/tool/IconToolPreview';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primitive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        label: (
          <>
            <IconToolPreview />
            Exposed Tools
          </>
        ),
        value: 'tab1',
        children: 'Tab 1',
      },
      {
        label: (
          <>
            <IconChain />
            Connect to Clients
          </>
        ),
        value: 'tab2',
        children: 'Tab 2',
      },
      {
        label: (
          <>
            <IconDuoLog />
            Log
          </>
        ),
        value: 'tab3',
        children: 'Tab 3',
      },
    ],
    type: 'default',
  },
};
