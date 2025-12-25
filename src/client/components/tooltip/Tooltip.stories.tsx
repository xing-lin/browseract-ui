import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Client/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip 显示的内容',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip 相对于触发器的位置',
    },
    sideOffset: {
      control: 'number',
      description: 'Tooltip 与触发器的距离（像素）',
    },
    delayDuration: {
      control: 'number',
      description: '延迟显示时间（毫秒）',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用 Tooltip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    side: 'top',
  },
  render: (args) => (
    <div className="flex items-center justify-center p-20">
      <Tooltip {...args}>
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-20 p-20">
      <div className="flex items-center gap-8">
        <Tooltip
          content="Top tooltip"
          side="top"
        >
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Top
          </button>
        </Tooltip>
        <Tooltip
          content="Right tooltip"
          side="right"
        >
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Right
          </button>
        </Tooltip>
        <Tooltip
          content="Bottom tooltip"
          side="bottom"
        >
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Bottom
          </button>
        </Tooltip>
        <Tooltip
          content="Left tooltip"
          side="left"
        >
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Left
          </button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-20">
      <Tooltip
        content={
          <div className="flex flex-col gap-1">
            <strong className="text-sm">User Information</strong>
            <p className="text-xs">Name: John Doe</p>
            <p className="text-xs">Email: john@example.com</p>
          </div>
        }
      >
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Rich Content
        </button>
      </Tooltip>

      <Tooltip
        content={
          <div className="flex items-center gap-2">
            <span className="text-xl">🎉</span>
            <span>With Emoji!</span>
          </div>
        }
      >
        <button className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
          Emoji Tooltip
        </button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-20">
      <Tooltip
        content="No delay"
        delayDuration={0}
      >
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          No Delay
        </button>
      </Tooltip>
      <Tooltip
        content="500ms delay"
        delayDuration={500}
      >
        <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          500ms Delay
        </button>
      </Tooltip>
      <Tooltip
        content="1000ms delay"
        delayDuration={1000}
      >
        <button className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
          1000ms Delay
        </button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-20">
      <Tooltip content="This tooltip is enabled">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Enabled Tooltip
        </button>
      </Tooltip>
      <Tooltip
        content="This tooltip is disabled"
        disabled
      >
        <button className="rounded bg-gray-400 px-4 py-2 text-white">
          Disabled Tooltip
        </button>
      </Tooltip>
      <Tooltip content="">
        <button className="rounded bg-gray-400 px-4 py-2 text-white">
          Empty Content (no tooltip)
        </button>
      </Tooltip>
      <Tooltip content={null}>
        <button className="rounded bg-gray-400 px-4 py-2 text-white">
          Null Content (no tooltip)
        </button>
      </Tooltip>
    </div>
  ),
};

export const OnDisabledElements: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-20">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600">
          Wrap disabled element in a span to show tooltip:
        </p>
        <Tooltip content="Button is disabled">
          <span className="inline-block">
            <button
              className="rounded bg-gray-400 px-4 py-2 text-white"
              disabled
            >
              Disabled Button
            </button>
          </span>
        </Tooltip>
      </div>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="flex items-center justify-center p-20">
      <Tooltip
        content="This is a very long tooltip content that demonstrates how the tooltip handles longer text. It should wrap nicely and remain readable."
        contentClassName="max-w-xs"
      >
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Long Content Tooltip
        </button>
      </Tooltip>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const handleClick = () => {
      alert('Button clicked!');
    };

    return (
      <div className="flex flex-col items-center gap-8 p-20">
        <Tooltip content="Click to trigger action">
          <button
            onClick={handleClick}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Click Me
          </button>
        </Tooltip>

        <Tooltip
          content="This is a link"
          side="bottom"
        >
          <a
            href="#"
            className="text-blue-500 underline hover:text-blue-700"
            onClick={(e) => {
              e.preventDefault();
              alert('Link clicked!');
            }}
          >
            Hover over this link
          </a>
        </Tooltip>

        <Tooltip
          content="Custom element"
          side="right"
        >
          <div className="cursor-pointer rounded border-2 border-dashed border-gray-300 p-4 hover:border-blue-500">
            Custom Div Element
          </div>
        </Tooltip>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-20">
      <Tooltip content="Information icon">
        <button className="flex size-8 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600">
          ℹ️
        </button>
      </Tooltip>

      <Tooltip
        content="Help icon"
        side="right"
      >
        <button className="flex size-8 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600">
          ❓
        </button>
      </Tooltip>

      <Tooltip
        content="Warning icon"
        side="bottom"
      >
        <button className="flex size-8 items-center justify-center rounded-full bg-yellow-500 text-white hover:bg-yellow-600">
          ⚠️
        </button>
      </Tooltip>

      <Tooltip
        content="Error icon"
        side="left"
      >
        <button className="flex size-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600">
          ❌
        </button>
      </Tooltip>
    </div>
  ),
};

export const AlwaysVisible: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-20">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600">
          使用 open=true 让 Tooltip 一直显示:
        </p>
        <Tooltip
          content="This tooltip is always visible"
          open={true}
        >
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Always Visible
          </button>
        </Tooltip>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600">
          使用 open=false 让 Tooltip 一直隐藏:
        </p>
        <Tooltip
          content="This tooltip is always hidden"
          open={false}
        >
          <button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
            Always Hidden (hover won't show)
          </button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledTooltip() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-8 p-20">
        <div className="flex gap-4">
          <button
            onClick={() => setOpen(true)}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Show Tooltip
          </button>
          <button
            onClick={() => setOpen(false)}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Hide Tooltip
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Toggle Tooltip
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600">
            当前状态: {open ? '显示' : '隐藏'}
          </p>
          <Tooltip
            content="This is a controlled tooltip"
            open={open}
            onOpenChange={setOpen}
          >
            <button className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
              Controlled Tooltip Target
            </button>
          </Tooltip>
        </div>
      </div>
    );
  },
};

export const DefaultOpen: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-20">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600">
          使用 defaultOpen=true 让 Tooltip 初始显示（非受控）:
        </p>
        <Tooltip
          content="This tooltip shows by default"
          open={true}
        >
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Default Open (you can still hover to hide/show)
          </button>
        </Tooltip>
      </div>
    </div>
  ),
};
