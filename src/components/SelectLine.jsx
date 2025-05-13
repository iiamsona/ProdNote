import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import linesIcon from '@/assets/lines/lines.svg';
import mathLinesIcon from '@/assets/lines/math_lines.svg';
import dottedlLinesIcon from '@/assets/lines/dotted_lines.svg';
import pointedLinesIcon from '@/assets/lines/pointed_lines.svg';

export default function SelectLine() {
  return (
    <Select.Root>
      <Select.Trigger className="inline-flex items-center justify-between border px-4 py-2 rounded bg-white w-48">
        <Select.Value placeholder="Choose a line type" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content className="bg-white border rounded shadow-md">
        <Select.Viewport className="p-2">
          <Select.Item
            value="line"
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
          >
            <img src={linesIcon} alt="Line" className="w-5 h-5" />
            <Select.ItemText>Line</Select.ItemText>
            <Select.ItemIndicator className="ml-auto">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>

          <Select.Item
            value="mathLine"
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
          >
            <img src={mathLinesIcon} alt="Math Line" className="w-5 h-5" />
            <Select.ItemText>Math Line</Select.ItemText>
            <Select.ItemIndicator className="ml-auto">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>

          <Select.Item
            value="dottedLine"
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
          >
            <img src={dottedlLinesIcon} alt="Dotted Line" className="w-5 h-5" />
            <Select.ItemText>Dotted Line</Select.ItemText>
            <Select.ItemIndicator className="ml-auto">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>

          <Select.Item
            value="pointLine"
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
          >
            <img src={pointedLinesIcon} alt="Pointed Line" className="w-5 h-5" />
            <Select.ItemText>Pointed Line</Select.ItemText>
            <Select.ItemIndicator className="ml-auto">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>

        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
}
