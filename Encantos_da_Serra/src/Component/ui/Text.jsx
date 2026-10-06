export const Text = ({
  children,
  variant = "default",
  className = "",
  as = "p",
  ...rest
}) => {
  const Tag = as;

  const baseStyles = "font-sans leading-relaxed";

  const variantStyles = {
    // Para frases institucionais / manifesto:
    quote: "font-serif text-xl md:text-2xl text-stone-200",
    // Para títulos de colunas no rodapé:
    overline: "text-xs font-bold uppercase tracking-wider text-amber-400",
    // Texto comum de parágrafo:
    body: "text-base text-stone-700",
    // Legendas, prazos e notas menores:
    caption: "text-sm text-stone-400",
  };

  return (
    <Tag
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.body} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};
