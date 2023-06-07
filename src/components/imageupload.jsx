import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { RiCloseCircleFill, RiUpload2Fill } from "react-icons/ri";

function Imageupload({ className, label }) {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    // maxSize: 1024 * 1024,
  });

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <form>
      {label && <label className="font-semibold mb-2 block">{label}</label>}
      <div
        {...getRootProps({
          className: className,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className="w-full flex flex-col justify-center">
            <span className="flex justify-center">
              <RiUpload2Fill className="text-lg flex justify-center" />
            </span>
            <p className="mt-2 text-sm text-center">
              Drag & drop some files here, or click to select files
            </p>
          </div>
        )}
      </div>

      {/* preview section */}

      <ul className="mt-4 flex flex-wrap gap-2">
        {files.map((file) => (
          <li
            key={file.name}
            className="relative flex flex-col justify-center p-1 border rounded-lg"
          >
            <img
              src={file.preview}
              alt={file.name}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
              className="w-full h-12 object-contain"
            />
            <button
              type="button"
              className="absolute -right-2.5 -top-2.5 text-red-500 hover:text-secondary"
              onClick={() => removeFile(file.name)}
            >
              <RiCloseCircleFill className="text-xl" />
            </button>
            <p className="text-center mt-2 text-xs">{file.name}</p>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Imageupload;
