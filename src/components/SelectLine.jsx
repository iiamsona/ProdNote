import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';

export default function SelectLine({ options, placeholder, value, onChange }) {
  return (
    <Select.Root value={value ?? ""} onValueChange={onChange}>
      <Select.Trigger className="inline-flex items-center justify-between border px-4 py-2 rounded bg-white w-48">
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content className="bg-white border rounded shadow-md">
        <Select.Viewport className="p-2">
          {options.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
            >
              <img src={option.icon} alt={option.label} className="w-5 h-5" />
              <Select.ItemText>{option.label}</Select.ItemText>
              <Select.ItemIndicator className="ml-auto">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
}
