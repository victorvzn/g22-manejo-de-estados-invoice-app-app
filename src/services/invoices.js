const url = 'https://raw.githubusercontent.com/victorvzn/g22-manejo-de-estados-invoice-app-app/main/src/invoices.json'

export const fetchInvoices = async () => {
  const response = await fetch(url)
  const data = await response.json()

  console.log(response)
  console.log(data.invoices)
  
  return data.invoices
}

export const getInvoice = async (id) => {
  const response = await fetch(url)
  const data = await response.json()

  const invoiceFound = data.invoices.find(invoice => invoice.id === id)

  return invoiceFound
}