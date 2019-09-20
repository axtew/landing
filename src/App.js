import React from "react";
import styled, { css } from "styled-components";
import Carousel from "re-carousel";

import Buttons from "./buttons";

import MockImage from "./img/Image.jpg";
import ImageLeft from "./img/ImageLeft.png";
import ImageRight from "./img/ImageRight.png";
import Arrow from "./img/Arrow.svg";

const Container = styled.div``;

const Block = styled.div`
  padding: 60px 20px;
  box-sizing: border-box;

  ${props =>
    props.header &&
    css`
      background: #fbfcff;
      padding: 90px 0;
      overflow: hidden;
    `}

  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${props =>
    props.carousel &&
    css`
      height: 470px;
      padding: 60px 0;
    `}
`;

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 705px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Col = styled.div`
  max-width: 445px;

  :first-child {
    margin-right: 110px;
  }

  ${props =>
    props.img &&
    css`
      max-width: 555px;
      overflow: hidden;
    `}
`;

const ButtonsConteiner = styled.div`
  margin-top: 30px;
`;

const Photo = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
`;

const Slide = styled.div`
  margin: 0 auto;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 56px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -1px;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -1px;
`;

const Button = styled.button`
  background: #0065f2;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  cursor: pointer;

  ${props =>
    props.header &&
    css`
      margin-top: 40px;
    `}

  ${props =>
    props.small &&
    css`
      padding: 6px 15px;
      border-radius: 0px;
      margin-right: 15px;
    `}
`;

const TitleText = styled.p`
  margin: 0;
  margin-top: 24px;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
  margin-top: 20px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const SliderText = styled.p`
  margin: 0;
  margin-top: 35px;
  max-width: 540px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;

const Author = styled.p`
  margin: 0;
  margin-top: 40px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
`;

const AuthorName = styled.span`
  font-weight: bold;
`;

const Link = styled.a`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #0065f2;
  text-decoration: none;

  ::after {
    content '';
    display: inline-block;
    background: url(${Arrow}) center no-repeat;
    width: 8px;
    height: 10px;
    margin-left: 8px;
  }
`;

const Image = styled.img`
  width: 100%;

  ${props =>
    props.photo &&
    css`
      width: auto;
    `}
`;

const HeaderImage = styled.img`
  position: absolute;
  mix-blend-mode: multiply;

  ${props =>
    props.left &&
    css`
      left: -335px;
      top: 0;
    `}

  ${props =>
    props.right &&
    css`
      right: -315px;
      bottom: -95px;
    `}
`;

function App() {
  return (
    <Container>
      <Block header>
        <HeaderContainer>
          <HeaderImage left src={ImageLeft} />

          <Title>Увеличь продажи от 30% с црм Send&Sell</Title>
          <TitleText>
            Контролируй продажи отделов ВК через Send&Sell.
            <br />
            Отравляй сообщения, аудиозаписи или медиа файлы по всем диалогам в
            вашей группе со скоростью до 700 сообщений в секунду.
          </TitleText>
          <Button header>Попробовать бесплатно</Button>

          <HeaderImage right src={ImageRight} />
        </HeaderContainer>
      </Block>

      <Block flex>
        <Col img>
          <Image src={MockImage} />
        </Col>
        <Col>
          <H2>
            Long headline on two lines to turn your visitors into users and
            achieve more
          </H2>
          <Text>
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast
          </Text>
          <ButtonsConteiner>
            <Button small>Action</Button>
            <Link href="#">Action link</Link>
          </ButtonsConteiner>
        </Col>
      </Block>

      <Block flex>
        <Col>
          <H2>
            Long headline on two lines to turn your visitors into users and
            achieve more
          </H2>
          <Text>
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast
          </Text>
          <ButtonsConteiner>
            <Button small>Action</Button>
            <Link href="#">Action link</Link>
          </ButtonsConteiner>
        </Col>
        <Col img>
          <Image src={MockImage} />
        </Col>
      </Block>

      <Block flex>
        <Col img>
          <Image src={MockImage} />
        </Col>
        <Col>
          <H2>
            Long headline on two lines to turn your visitors into users and
            achieve more
          </H2>
          <Text>
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast
          </Text>
          <ButtonsConteiner>
            <Button small>Action</Button>
            <Link href="#">Action link</Link>
          </ButtonsConteiner>
        </Col>
      </Block>

      <Block carousel>
        <Carousel widgets={[Buttons]}>
          <Slide>
            <Photo>
              <Image photo src={MockImage} />
            </Photo>
            <SliderText>
              “All base UI elements are made using Nested Symbols and shared
              styles that are logically connected. Gorgeous, high-quality video
              sharing on desktop, mobile, tablet. All base UI elements are made
              using Nested Symbols”
            </SliderText>
            <Author>
              <AuthorName>Name Surname,</AuthorName> Lead marketing specialist,
              CNN
            </Author>
          </Slide>
          <Slide>
            <Photo>
              <Image photo src={MockImage} />
            </Photo>
            <SliderText>
              “All base UI elements are made using Nested Symbols and shared
              styles that are logically connected. Gorgeous, high-quality video
              sharing on desktop, mobile, tablet. All base UI elements are made
              using Nested Symbols”
            </SliderText>
            <Author>
              <AuthorName>Name Surname,</AuthorName> Lead marketing specialist,
              CNN
            </Author>
          </Slide>
        </Carousel>
      </Block>
    </Container>
  );
}

export default App;
