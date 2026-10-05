
export const Button = ({
    children,
    variant = 'primary', 

    className = '',
    ...rest
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors px-6 py-2.5 rounded-full';

    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        success: 'bg-green-500 text-white hover:bg-green-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    return (
        <button
           className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
