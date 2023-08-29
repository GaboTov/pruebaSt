import { thTableClientesType } from "../../../types";

export default function ThTablaClientes({ children }: thTableClientesType) {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
}
