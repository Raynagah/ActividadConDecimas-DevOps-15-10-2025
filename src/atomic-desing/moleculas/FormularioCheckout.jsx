import Input from "../atomos/Input";

export default function FormularioCheckout({ buyer, onChange }) {
  return (
    <div className="space-y-2">
      <Input name="name" placeholder="Nombre completo" onChange={onChange} />
      <Input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        onChange={onChange}
      />
      <Input
        name="address"
        placeholder="Dirección"
        onChange={onChange}
      />
    </div>
  );
}
