import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { IconDelete } from '../icons/solos/delete/IconDelete';
import { IconPlus } from '../icons/solos/plus/IconPlus';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'round'],
    },
    danger: {
      control: 'boolean',
    },
    ghost: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    block: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
  },
};

export const PrimaryLoading: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    loading: true,
  },
};

export const PrimaryIcon: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    icon: <IconPlus />,
  },
};

export const PrimaryIconLoading: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    icon: <IconPlus />,
    loading: true,
  },
};

export const PrimaryIconOnly: Story = {
  args: {
    type: 'primary',
    size: 'middle',
    icon: <IconPlus />,
    'aria-label': 'Primary Icon Only',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    disabled: true,
    icon: <IconPlus />,
  },
};

export const PrimaryDanger: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    danger: true,
    icon: <IconDelete />,
  },
};

export const PrimaryGhost: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    size: 'middle',
    ghost: true,
    icon: <IconPlus />,
  },
};

export const Default: Story = {
  args: {
    children: 'Button',
    type: 'default',
  },
};

export const DefaultLoading: Story = {
  args: {
    children: 'Button',
    type: 'default',
    loading: true,
  },
};

export const DefaultIcon: Story = {
  args: {
    children: 'Button',
    type: 'default',
    icon: <IconPlus />,
  },
};

export const DefaultIconLoading: Story = {
  args: {
    children: 'Button',
    type: 'default',
    icon: <IconPlus />,
    loading: true,
  },
};

export const DefaultIconOnly: Story = {
  args: {
    type: 'default',
    icon: <IconPlus />,
    'aria-label': 'Default Icon Only',
  },
};

export const DefaultDisabled: Story = {
  args: {
    children: 'Button',
    type: 'default',
    disabled: true,
    icon: <IconPlus />,
  },
};

export const DefaultDanger: Story = {
  args: {
    children: 'Button',
    type: 'default',
    danger: true,
    icon: <IconDelete />,
  },
};

export const DefaultGhost: Story = {
  args: {
    children: 'Button',
    type: 'default',
    ghost: true,
    icon: <IconPlus />,
  },
  render: (args) => (
    <div className="bg-[#bec8c8] p-4">
      <Button {...args} />
    </div>
  ),
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
  },
};

export const DashedLoading: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    loading: true,
  },
};

export const DashedIcon: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    icon: <IconPlus />,
  },
};

export const DashedIconLoading: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    icon: <IconPlus />,
    loading: true,
  },
};

export const DashedIconOnly: Story = {
  args: {
    type: 'dashed',
    icon: <IconPlus />,
    'aria-label': 'Dashed Icon Only',
  },
};

export const DashedDisabled: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    disabled: true,
    icon: <IconPlus />,
  },
};

export const DashedDanger: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
    danger: true,
    icon: <IconDelete />,
  },
};

export const DashedGhost: Story = {
  args: {
    children: 'Dashed Button',
    type: 'dashed',
    ghost: true,
    icon: <IconPlus />,
  },
  render: (args) => (
    <div className="bg-[#bec8c8] p-4">
      <Button {...args} />
    </div>
  ),
};

export const Text: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
  },
};

export const TextLoading: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
    loading: true,
  },
};

export const TextIcon: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
    icon: <IconPlus />,
  },
};

export const TextIconLoading: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
    icon: <IconPlus />,
    loading: true,
  },
};

export const TextIconOnly: Story = {
  args: {
    type: 'text',
    icon: <IconPlus />,
    'aria-label': 'Text Icon Only',
  },
};

export const TextDisabled: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
    disabled: true,
    icon: <IconPlus />,
  },
};

export const TextDanger: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
    danger: true,
    icon: <IconDelete />,
  },
};

export const Link: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
  },
};

export const LinkLoading: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
    loading: true,
  },
};

export const LinkIcon: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
    icon: <IconPlus />,
  },
};

export const LinkIconLoading: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
    icon: <IconPlus />,
    loading: true,
  },
};

export const LinkIconOnly: Story = {
  args: {
    type: 'link',
    icon: <IconPlus />,
    'aria-label': 'Link Icon Only',
  },
};

export const LinkDisabled: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
    disabled: true,
    icon: <IconPlus />,
  },
};

export const LinkDanger: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
    danger: true,
    icon: <IconDelete />,
  },
};

// Icon Position Tests
export const IconPositionEnd: Story = {
  args: {
    type: 'primary',
    children: 'Icon at End',
    icon: <IconPlus />,
    iconPosition: 'end',
  },
};

export const IconPositionStart: Story = {
  args: {
    type: 'default',
    children: 'Icon at Start',
    icon: <IconPlus />,
    iconPosition: 'start',
  },
};

// Block Tests
export const BlockPrimary: Story = {
  args: {
    type: 'primary',
    children: 'Block Primary Button',
    block: true,
  },
};

export const BlockDefault: Story = {
  args: {
    type: 'default',
    children: 'Block Default Button',
    block: true,
  },
};

export const BlockText: Story = {
  args: {
    type: 'text',
    children: 'Block Text Button (block ignored)',
    block: true,
  },
};

export const BlockLink: Story = {
  args: {
    type: 'link',
    children: 'Block Link Button (block ignored)',
    block: true,
  },
};
