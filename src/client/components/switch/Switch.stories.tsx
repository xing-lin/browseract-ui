import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Client/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Switch 的选中状态',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    children: {
      control: 'text',
      description: 'Switch 的标签内容',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: 'Enable notifications',
  },
  render: (args) => (
    <div className="flex items-center justify-center p-20">
      <Switch {...args} />
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-20">
      <Switch />
      <Switch defaultChecked />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-20">
      <Switch>Airplane mode</Switch>
      <Switch>Enable notifications</Switch>
      <Switch>Marketing emails</Switch>
      <Switch>Security alerts</Switch>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-20">
      <Switch defaultChecked={false}>Unchecked</Switch>
      <Switch defaultChecked={true}>Checked</Switch>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4 p-20">
      <Switch disabled>Disabled unchecked</Switch>
      <Switch
        disabled
        defaultChecked
      >
        Disabled checked
      </Switch>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledSwitch() {
    const [airplaneMode, setAirplaneMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [marketing, setMarketing] = useState(false);

    return (
      <div className="flex flex-col gap-6 p-20">
        <div className="flex flex-col gap-4">
          <Switch
            checked={airplaneMode}
            onCheckedChange={setAirplaneMode}
          >
            Airplane mode
          </Switch>
          <Switch
            checked={notifications}
            onCheckedChange={setNotifications}
          >
            Push notifications
          </Switch>
          <Switch
            checked={marketing}
            onCheckedChange={setMarketing}
          >
            Marketing emails
          </Switch>
        </div>

        <div className="rounded border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium">Current state:</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>Airplane mode: {airplaneMode ? '✓ On' : '✗ Off'}</li>
            <li>Notifications: {notifications ? '✓ On' : '✗ Off'}</li>
            <li>Marketing: {marketing ? '✓ On' : '✗ Off'}</li>
          </ul>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: function FormExample() {
    const [formData, setFormData] = useState({
      marketing: false,
      newsletter: true,
      updates: false,
      security: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(JSON.stringify(formData, null, 2));
    };

    return (
      <div className="w-full max-w-md p-20">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Email Preferences</h3>
            <div className="space-y-3">
              <Switch
                checked={formData.marketing}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, marketing: checked }))
                }
              >
                Marketing emails
              </Switch>
              <Switch
                checked={formData.newsletter}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, newsletter: checked }))
                }
              >
                Weekly newsletter
              </Switch>
              <Switch
                checked={formData.updates}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, updates: checked }))
                }
              >
                Product updates
              </Switch>
            </div>
          </div>

          <div className="space-y-4 border-t pt-4">
            <h3 className="text-lg font-medium">Security</h3>
            <div className="space-y-3">
              <Switch
                checked={formData.security}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, security: checked }))
                }
              >
                Security alerts
              </Switch>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Save Preferences
          </button>
        </form>
      </div>
    );
  },
};

export const CustomStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-20">
      <Switch className="scale-125">Large switch</Switch>
      <Switch className="scale-75">Small switch</Switch>
      <Switch containerClassName="rounded border border-gray-200 bg-gray-50 p-3">
        Switch with custom container
      </Switch>
      <Switch containerClassName="justify-between rounded border border-blue-200 bg-blue-50 p-4">
        Switch aligned to opposite sides
      </Switch>
    </div>
  ),
};

export const LongLabels: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4 p-20">
      <Switch>
        Enable two-factor authentication for enhanced security and account
        protection
      </Switch>
      <Switch containerClassName="items-start">
        Allow this application to send you notifications about important
        updates, security alerts, and promotional offers
      </Switch>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const handleChange = (checked: boolean) => {
      console.log('Switch changed:', checked);
      alert(`Switch is now ${checked ? 'ON' : 'OFF'}`);
    };

    return (
      <div className="flex flex-col items-start gap-4 p-20">
        <Switch onCheckedChange={handleChange}>
          Toggle me (check console)
        </Switch>
        <Switch
          onCheckedChange={(checked) => {
            if (checked) {
              alert('Feature enabled!');
            }
          }}
        >
          Enable feature (shows alert when turned on)
        </Switch>
      </div>
    );
  },
};

export const SettingsPanel: Story = {
  render: function SettingsPanel() {
    const [settings, setSettings] = useState({
      darkMode: false,
      autoSave: true,
      notifications: true,
      soundEffects: false,
      animations: true,
    });

    return (
      <div className="w-full max-w-lg p-20">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold">Settings</h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-4">
              <Switch
                checked={settings.darkMode}
                onCheckedChange={(checked) =>
                  setSettings((prev) => ({ ...prev, darkMode: checked }))
                }
                containerClassName="justify-between"
              >
                <div>
                  <div className="font-medium">Dark mode</div>
                  <div className="text-sm text-gray-500">
                    Use dark theme across the app
                  </div>
                </div>
              </Switch>
            </div>
            <div className="p-4">
              <Switch
                checked={settings.autoSave}
                onCheckedChange={(checked) =>
                  setSettings((prev) => ({ ...prev, autoSave: checked }))
                }
                containerClassName="justify-between"
              >
                <div>
                  <div className="font-medium">Auto-save</div>
                  <div className="text-sm text-gray-500">
                    Automatically save changes
                  </div>
                </div>
              </Switch>
            </div>
            <div className="p-4">
              <Switch
                checked={settings.notifications}
                onCheckedChange={(checked) =>
                  setSettings((prev) => ({ ...prev, notifications: checked }))
                }
                containerClassName="justify-between"
              >
                <div>
                  <div className="font-medium">Notifications</div>
                  <div className="text-sm text-gray-500">
                    Receive push notifications
                  </div>
                </div>
              </Switch>
            </div>
            <div className="p-4">
              <Switch
                checked={settings.soundEffects}
                onCheckedChange={(checked) =>
                  setSettings((prev) => ({ ...prev, soundEffects: checked }))
                }
                containerClassName="justify-between"
              >
                <div>
                  <div className="font-medium">Sound effects</div>
                  <div className="text-sm text-gray-500">
                    Play sounds for actions
                  </div>
                </div>
              </Switch>
            </div>
            <div className="p-4">
              <Switch
                checked={settings.animations}
                onCheckedChange={(checked) =>
                  setSettings((prev) => ({ ...prev, animations: checked }))
                }
                containerClassName="justify-between"
              >
                <div>
                  <div className="font-medium">Animations</div>
                  <div className="text-sm text-gray-500">
                    Enable interface animations
                  </div>
                </div>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
