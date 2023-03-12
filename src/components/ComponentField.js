export default function ComponentField({ field }) {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">
        {field.name}
      </label>
    </div>
  );
}
