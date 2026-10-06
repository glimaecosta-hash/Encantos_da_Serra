export const Badge = ({ 
    children, 
    icon, 
    variant = 'default', // Variante padrão caso não seja informada
  className = '', 
  ...rest 
}) => {
  // 1. Estilos estruturais compartilhados (formato, espaçamento, tipografia)
  const baseStyles = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-colors';

  // 2. Mapeamento de cores para cada necessidade do sistema
  const variantStyles = {
    // Amarelo suave (o da imagem: ideal para selos de queijo e prêmios)
    award: 'bg-amber-100/90 border border-amber-300 text-amber-900',
    
    // Verde (ideal para "Aprovado", "Disponível", "Orgânico")
    success: 'bg-emerald-100 border border-emerald-300 text-emerald-900',
    
    // Azul (ideal para "Em trânsito", "Processando")
    info: 'bg-blue-100 border border-blue-300 text-blue-900',
    
    // Vermelho (ideal para "Esgotado", "Atenção")
    danger: 'bg-red-100 border border-red-300 text-red-900',
    
    // Neutro / Cinza (o padrão genérico)
    default: 'bg-stone-100 border border-stone-300 text-stone-800',
  };


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

