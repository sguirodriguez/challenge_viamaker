export const moneyMask = (value: string) => {
  let valueMod = '';

  valueMod = value.replace('.', '').replace(',', '').replace(/\D/g, '');

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat('pt-BR', options).format(
    parseFloat(valueMod) / 100
  );

  return `R$ ${result === 'NaN' ? 0 : result}`;
};

export const removeMoneyMask = (value: string, brFormat?: boolean) => {
  if (brFormat) {
    const clearString = Number(
      value.replace('.', '').replace(',', '.').replace('R$ ', '')
    );

    return Number.isNaN(clearString) ? String(0) : String(clearString);
  }
  const clearString = Number(value.replace(',', ''));

  return Number.isNaN(clearString) ? 0 : clearString;
};
