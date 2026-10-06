//
export const Title = ({  //escrevemos o inicio do nosso componente, que é uma função que recebe props (propriedades) como argumento. Essas props são passadas para o componente quando ele é usado em outro lugar do aplicativo.

  children, // 'children' é uma prop especial do React que representa o conteúdo que será renderizado dentro do componente. Pode ser texto, elementos JSX ou outros componentes.
  as = "h2", // 'as' define qual tag HTML vai ser renderizada (padrão: h2), pode ser h1, h2, h3, h4, h5 ou h6
  className = "", //
  ...rest  // 'rest' é um operador de espalhamento que captura todas as outras props que não foram explicitamente listadas. Isso permite que você passe qualquer número de props adicionais para o componente, como atributos HTML padrão (por exemplo, id, style, onClick, etc.).
}) => {

    // Nessa parte do código, estamos definindo a tag HTML que será usada para renderizar o título. A variável 'Tag' recebe o valor da prop 'as', que pode ser h1, h2, h3, h4, h5 ou h6. Isso permite que o componente seja flexível e reutilizável em diferentes contextos, dependendo da necessidade de hierarquia de títulos na página.

  const Tag = as; // A tag HTML será determinada pelo valor de 'as'

  const baseStyles =
    "font-serif font-bold tracking-tight leading-tight text-stone-900";
  const sizeStyles = {
    h1: "text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4",
    h2: "text-2xl md:text-3xl font-bold mb-3",
    h3: "text-xl md:text-2xl font-bold mb-2",
    h4: "text-lg md:text-xl font-semibold mb-2",
    h5: "text-base font-semibold mb-1",
  };

  return (

    // Aqui estamos retornando o elemento JSX que será renderizado. O elemento <Tag> é criado com base no valor da prop 'as', e recebe as classes CSS definidas em 'baseStyles' e 'sizeStyles', além da prop 'className' e de todas as outras props passadas através de 'rest'.
    <Tag
      className={`${baseStyles} ${sizeStyles[as] || sizeStyles.h2} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};
