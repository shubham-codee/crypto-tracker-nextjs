const BitcoinSpinner = ({ size = 40 }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative">
        <div
          className="animate-spin rounded-full border-4 border-orange-200 dark:border-orange-300 border-t-orange-500 dark:border-t-orange-400"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center text-orange-500 dark:text-orange-400 font-bold"
          style={{ fontSize: `${size * 0.3}px` }}
        >
          ₿
        </div>
      </div>
    </div>
  );
};

export default BitcoinSpinner;
