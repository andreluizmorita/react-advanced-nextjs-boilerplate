import * as S from './styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e StyledComponents
      </S.Description>
      <S.Illustration
        src="/images/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela de computador"
      />
    </S.Wrapper>
  );
};

export default Main;
