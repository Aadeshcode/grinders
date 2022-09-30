import {
  Carousel,
  Barista,
  Menu,
  FewWords,
  Services,
  Gallery,
  GridBlurredBackdrop,
} from "../components";

export default function Home() {
  return (
    <>
      <Carousel />
      <FewWords />
      <Barista />
      <Menu />
      <Services />
      <Gallery />
      <GridBlurredBackdrop />
    </>
  );
}
