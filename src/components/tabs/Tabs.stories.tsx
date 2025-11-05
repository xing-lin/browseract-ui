import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';
import { IconChain } from '../icons/solos/chain/IconChain';
import { IconDuoLog } from '../icons/duos/log/IconDuoLog';
import { IconToolPreview } from '../icons/solos/tool/IconToolPreview';
import { IconQuestionCircle } from '../icons/solos/question/IconQuestionCircle';
import { IconApiAutomation } from '../icons/solos/api/IconApiAutomation';
import { IconMcp } from '../icons/solos/mcp/IconMcp';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primitive', 'card', 'underline'],
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

export const Underline: Story = {
  args: {
    options: [
      {
        label: (
          <>
            Exposed
            <span className="text-(--color-text-tertiary)">(3)</span>
            <IconQuestionCircle className="text-(--color-text-tertiary)" />
          </>
        ),
        value: 'tab1',
        children: 'Tab 1',
      },
      {
        label: (
          <>
            Not Exposed
            <IconQuestionCircle className="text-(--color-text-tertiary)" />
          </>
        ),
        value: 'tab2',
        children: 'Tab 2',
      },
    ],
    type: 'underline',
  },
};

export const Card: Story = {
  args: {
    options: [
      {
        label: (
          <>
            <IconApiAutomation />
            API & Automation
          </>
        ),
        value: 'tab1',
        children: 'Tab 1',
      },
      {
        label: (
          <>
            <IconMcp />
            Connect to MCP Clients
          </>
        ),
        value: 'tab2',
        children: 'Tab 2',
      },
    ],
    type: 'card',
  },
};
