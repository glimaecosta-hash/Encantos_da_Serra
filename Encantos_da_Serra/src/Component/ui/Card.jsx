

// 1. Declaramos o componente recebendo 'children', 'className' e o resto (...rest)
export const Card = ({ children, className = '', ...rest }) => {
  return (
    <div

      
      className={`w-full bg-white rounded-2xl border border-stone-200 shadow-sm p-5 transition-shadow hover:shadow-md ${className}`}
      {...rest}
    >
      {/* 3. Renderiza qualquer elemento colocado dentro de <Card>...</Card> */}
      {children}
    </div>
  );
};

      {/*  2. Classes base de estilo:
      //  - w-full: ocupa a largura total do espaço onde for colocado
      //  - bg-white: fundo branco
      //  - rounded-2xl: bordas arredondadas modernas
      //  - border border-stone-200: borda suave
      //  - shadow-sm: elevação sutil
      //  - p-5: espaçamento interno
      // - ${className}: permite concatenar classes extras passadas por fora */}