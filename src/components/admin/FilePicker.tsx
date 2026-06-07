"use client";

export default function FilePicker({
  label,
  onSelect,
}: {
  label: string;
  onSelect: (value: string) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-600 transition hover:border-cyan-600 hover:text-cyan-700">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = () => {
            if (typeof reader.result === "string") {
              onSelect(reader.result);
            }
          };
          reader.readAsDataURL(file);
        }}
      />
      {label}
    </label>
  );
}

