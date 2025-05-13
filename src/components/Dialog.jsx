import { useState } from 'react';
import ColorPicker from '@/components/ColorPicker.jsx'
import SelectLine from '@/components/SelectLine.jsx'
import Input from '@/components/Input.jsx'

export const Dialog = ({ isOpen, onClose, title, content, onConfirm, button}) => {
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
          {button.func == "select" && <SelectLine />}
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
