import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Accept terms',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    'aria-label': 'Accept terms',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Accept terms',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    'aria-label': 'Accept terms',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithLabelChecked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
  },
};

export const WithLabelDisabled: Story = {
  args: {
    label: 'Accept terms and conditions',
    disabled: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive emails about new products, features, and more.',
  },
};

export const OnlyDescription: Story = {
  args: {
    description: 'This checkbox has only a description without a label.',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: true,
    helperText: 'You must accept the terms and conditions.',
  },
};

export const Indeterminate: Story = {
  render: () => {
    const IndeterminateExample = () => {
      const [checked, setChecked] = useState<boolean | 'indeterminate'>(
        'indeterminate',
      );

      return (
        <Checkbox
          label="Select all items"
          description="3 of 5 items selected"
          checked={checked}
          onCheckedChange={setChecked}
        />
      );
    };

    return <IndeterminateExample />;
  },
};

export const Group: Story = {
  render: () => {
    const GroupExample = () => {
      const [selectedItems, setSelectedItems] = useState<string[]>(['item1']);

      const items = [
        { id: 'item1', label: 'Item 1', description: 'First item' },
        { id: 'item2', label: 'Item 2', description: 'Second item' },
        { id: 'item3', label: 'Item 3', description: 'Third item' },
      ];

      return (
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Select items</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <Checkbox
                key={item.id}
                label={item.label}
                description={item.description}
                checked={selectedItems.includes(item.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedItems([...selectedItems, item.id]);
                  } else {
                    setSelectedItems(
                      selectedItems.filter((id) => id !== item.id),
                    );
                  }
                }}
              />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            Selected: {selectedItems.length} of {items.length}
          </p>
        </div>
      );
    };

    return <GroupExample />;
  },
};

export const WithSelectAll: Story = {
  render: () => {
    const WithSelectAllExample = () => {
      const [selectedItems, setSelectedItems] = useState<string[]>(['item2']);

      const items = [
        { id: 'item1', label: 'Notifications' },
        { id: 'item2', label: 'Marketing emails' },
        { id: 'item3', label: 'Security alerts' },
      ];

      const allSelected = selectedItems.length === items.length;
      const someSelected = selectedItems.length > 0 && !allSelected;

      return (
        <div className="space-y-4">
          <Checkbox
            label="Select all"
            checked={
              allSelected ? true : someSelected ? 'indeterminate' : false
            }
            onCheckedChange={(checked) => {
              if (checked) {
                setSelectedItems(items.map((item) => item.id));
              } else {
                setSelectedItems([]);
              }
            }}
          />
          <div className="border-t pt-4">
            <div className="space-y-3 pl-6">
              {items.map((item) => (
                <Checkbox
                  key={item.id}
                  label={item.label}
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedItems([...selectedItems, item.id]);
                    } else {
                      setSelectedItems(
                        selectedItems.filter((id) => id !== item.id),
                      );
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      );
    };

    return <WithSelectAllExample />;
  },
};

export const InForm: Story = {
  render: function InFormRender() {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      updates: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      console.log('Form submitted:', formData);
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg border p-6"
      >
        <div>
          <h3 className="mb-4 text-base font-semibold">Preferences</h3>
          <div className="space-y-4">
            <Checkbox
              label="I accept the terms and conditions"
              checked={formData.terms}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, terms: checked as boolean })
              }
              error={submitted && !formData.terms}
              helperText={
                submitted && !formData.terms
                  ? 'You must accept the terms'
                  : undefined
              }
            />
            <Checkbox
              label="Subscribe to newsletter"
              description="Get weekly updates about new features"
              checked={formData.newsletter}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, newsletter: checked as boolean })
              }
            />
            <Checkbox
              label="Product updates"
              description="Receive notifications about product changes"
              checked={formData.updates}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, updates: checked as boolean })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
        >
          Submit
        </button>
      </form>
    );
  },
};
