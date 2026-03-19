import Price from "./price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div className="flex w-full flex-col gap-0.5 sm:gap-1">
      <h3 className="line-clamp-2 text-[10px] leading-[1.2] font-semibold text-black sm:text-xs dark:text-white">
        {title}
      </h3>
      <Price
        className="text-[10px] leading-[1.2] font-normal text-black/95 sm:text-xs dark:text-white/95"
        currencyCodeClassName="text-black/70 dark:text-white/70"
        amount={amount}
        currencyCode={currencyCode}
      />
    </div>
  );
};

export default Label;
