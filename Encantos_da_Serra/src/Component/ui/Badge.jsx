export const Badge = ({ 
    children, 
    icon, 
    variant ='default',
    className = '', ...rest }) => {
        

        return (
            <span 
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 ${className}`}
                {...rest}
            >
                {icon && <span className="w-4 h-4">{icon}</span>}
                {children}
            </span>
        );
    }

