import { useState } from "react";
import ColorPicker from "@/components/ColorPicker.jsx";
import SelectLine from "@/components/SelectLine.jsx";
import Input from "@/components/Input.jsx";
import linesIcon from "@/assets/lines/lines.svg";
import mathLinesIcon from "@/assets/lines/math_lines.svg";
import dottedLinesIcon from "@/assets/lines/dotted_lines.svg";
import pointedLinesIcon from "@/assets/lines/pointed_lines.svg";
import { sizeImages } from '@/assets/sizes';
import photo from "@/assets/materials/photo.svg";
import photoSpark from "@/assets/materials/photo-spark.svg";

export const Dialog = ({
  isOpen,
  onClose,
  title,
  content,
  onConfirm,
  button,
}) => {
  const [selectedLine, setSelectedLine] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const lineOptions = [
    { value: "line", label: "Line", icon: linesIcon },
    { value: "mathLine", label: "Math Line", icon: mathLinesIcon },
    { value: "dottedLine", label: "Dotted Line", icon: dottedLinesIcon },
    { value: "pointLine", label: "Pointed Line", icon: pointedLinesIcon },
  ];

  const materialOptions = [
    { value: "matte", label: "Matte", icon: photo },
    { value: "glossy", label: "Glossy", icon: photoSpark },
  ];
  

  const sizeOptions = [
    { value: "A0", label: "A0", icon: sizeImages['A0'] },
    { value: "A1", label: "A1", icon: sizeImages['A1'] },
    { value: "A2", label: "A2", icon: sizeImages['A2'] },
    { value: "A3", label: "A3", icon: sizeImages['A3'] },
    { value: "A4", label: "A4", icon: sizeImages['A4'] },
    { value: "A5", label: "A5", icon: sizeImages['A5'] },
    { value: "A6", label: "A6", icon: sizeImages['A6'] },
    { value: "A7", label: "A7", icon: sizeImages['A7'] },
    { value: "A8", label: "A8", icon: sizeImages['A8'] },
    { value: "A9", label: "A9", icon: sizeImages['A9'] },
    { value: "A10", label: "A10", icon: sizeImages['A10'] },
  ];

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    if (onClose) {
      onClose();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pointer-events-auto">
      <div className="bg-black bg-opacity-80 rounded-lg p-6 w-full max-w-md mx-auto shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-thin text-white">{title}</h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-white-700"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="mb-6">
          <p className=" text-white">{content}</p>
          {button.func == "color" && <ColorPicker />}
          {button.func == "number" && <Input />}
          {button.func === "select" && button.id === "lineStyle" && (
            <div>
              <SelectLine
                options={lineOptions}
                placeholder="Select a line style"
                value={selectedLine}
                onChange={setSelectedLine}
              />
            </div>
          )}
          {button.func === "select" && button.id === "pageMaterial" && (
            <div>
              <SelectLine
                options={materialOptions}
                placeholder="Select a material"
                value={selectedMaterial}
                onChange={setSelectedMaterial}
              />
            </div>
          )}
          {button.func === "select" && button.id === "notebookSize" && (
            <div>
              <SelectLine
                options={sizeOptions}
                placeholder="Select a size"
                value={selectedSize}
                onChange={setSelectedSize}
              />
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={handleClose}
            className="px-4 text-white py-2 border border-gray-300 rounded hover:bg-zinc-950 hover:border-zinc-950"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 text-white py-2 border border-gray-300 rounded hover:bg-zinc-950 hover:border-zinc-950"
            type="button"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
