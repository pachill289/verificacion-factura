import React from "react";

export default function InvoiceVerification() {
  const invoice = {
    emitter: {
      nit: "1020367024",
      razonSocial: "CORPORACION DE AQUINO BOLIVIA S.A.",
      direccion: "Teléfono: 2441044, LA PAZ",
      sucursal: "SUCURSAL N. 8",
      puntoVenta: "No. Punto de Venta 1",
    },
    factura: {
      numero: "694",
      codigoAutorizacion:
        "45D0FBFB22D1A31DDDC4027E1A707904D6264CE3AA1299C14E54A8E74",
      fechaEmision: "08/09/2025 17:01:21",
      montoTotal: 1600.0,
    },
    cliente: {
      nombreRazon: "AMPUERO",
      nombreEstudiante: "AMPUERO AMPUERO JUAN ALBERTO",
      nitCliente: "478378",
      codigoCliente: "200100598",
    },
    items: [
      {
        codigo: "UD-2",
        cantidad: 1,
        unidad: "UNIDAD (SERVICIOS)",
        descripcion: "CUOTA",
        precioUnitario: 1600.0,
        subtotal: 1600.0,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <header className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-md bg-green-700 flex items-center justify-center text-white font-bold">
              UD
            </div>
            <div>
              <div className="text-sm text-gray-500">
                {invoice.emitter.razonSocial}
              </div>
              <div className="text-xs text-gray-400">
                {invoice.emitter.direccion}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">
              NIT <span className="font-medium">{invoice.emitter.nit}</span>
            </div>
            <div className="text-sm text-gray-600">
              FACTURA N°{" "}
              <span className="font-semibold">{invoice.factura.numero}</span>
            </div>
            <div className="text-sm text-gray-600">CÓD. AUTORIZACIÓN</div>
            <div className="text-xs text-gray-500 break-all w-64">
              {invoice.factura.codigoAutorizacion}
            </div>
          </div>
        </header>

        <main className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            VERIFICACIÓN DE FACTURA ELECTRÓNICA
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500">Número de Factura</div>
                <div className="font-medium">{invoice.factura.numero}</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Fecha Emisión</div>
                <div className="font-medium">
                  {invoice.factura.fechaEmision}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500">
                  Estado de la Factura
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                  VÁLIDA
                </div>
              </div>
            </div>

            <div className="space-y-3 text-right">
              <div>
                <div className="text-xs text-gray-500">CUF</div>
                <div className="font-mono text-xs break-all">
                  (código de verificación oculto)
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Monto Total</div>
                <div className="font-medium">
                  {invoice.factura.montoTotal.toFixed(2)} Bs.
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6 border-t pt-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Datos del Emisor
              </h3>
              <div className="text-sm text-gray-700 mt-2">
                NIT Emisor:{" "}
                <span className="font-medium">{invoice.emitter.nit}</span>
              </div>
              <div className="text-sm text-gray-700">
                Razón Social:{" "}
                <span className="font-medium">
                  {invoice.emitter.razonSocial}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Sucursal:{" "}
                <span className="font-medium">{invoice.emitter.sucursal}</span>
              </div>
              <div className="text-sm text-gray-600">
                {invoice.emitter.puntoVenta}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Datos del Cliente
              </h3>
              <div className="text-sm text-gray-700 mt-2">
                Nombre / Razón Social:{" "}
                <span className="font-medium">
                  {invoice.cliente.nombreRazon}
                </span>
              </div>
              <div className="text-sm text-gray-700">
                Nombre Estudiante:{" "}
                <span className="font-medium">
                  {invoice.cliente.nombreEstudiante}
                </span>
              </div>
              <div className="text-sm text-gray-700">
                NIT/CI/CEX:{" "}
                <span className="font-medium">
                  {invoice.cliente.nitCliente}
                </span>
              </div>
              <div className="text-sm text-gray-700">
                Cód. Cliente:{" "}
                <span className="font-medium">
                  {invoice.cliente.codigoCliente}
                </span>
              </div>
            </div>
          </div>

          <section className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Detalle de Productos</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-gray-500">
                    <th className="py-2">Código</th>
                    <th className="py-2">Descripción</th>
                    <th className="py-2">Cantidad</th>
                    <th className="py-2">Precio Unitario</th>
                    <th className="py-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((it, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="py-3">{it.codigo}</td>
                      <td className="py-3">
                        {it.descripcion}{" "}
                        <div className="text-xs text-gray-400">{it.unidad}</div>
                      </td>
                      <td className="py-3">{it.cantidad}</td>
                      <td className="py-3">
                        {it.precioUnitario.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}{" "}
                        Bs.
                      </td>
                      <td className="py-3 text-right font-medium">
                        {it.subtotal.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}{" "}
                        Bs.
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t">
                    <td
                      colSpan={4}
                      className="py-3 text-right text-sm text-gray-600"
                    >
                      TOTAL Bs
                    </td>
                    <td className="py-3 text-right font-bold">
                      {invoice.factura.montoTotal.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}{" "}
                      Bs.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        </main>

        <footer className="p-6 border-t flex items-center justify-between">
          <div className="text-sm text-gray-600">
            SON: MIL SEISCIENTOS CON 00/100 BOLIVIANOS
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm">
              Descargar Factura ▼
            </button>
            <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">
              QR
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
