import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <h3 className="line-clamp-2 text-sm font-medium leading-tight text-black dark:text-white">
        {title}
      </h3>
      <Price
        className="text-sm font-semibold text-black dark:text-white"
        amount={amount}
        currencyCode={currencyCode}
      />
    </div>
  );
};

export default Label;
