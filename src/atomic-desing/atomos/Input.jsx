export default function Input({ type = "text", name, placeholder, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="border p-2 w-full rounded"
    />
  );
}
