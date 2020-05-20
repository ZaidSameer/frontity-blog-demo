import { css, Global } from "frontity";
import Arvo from "../../common/font/Arvo/Arvo-Bold.woff";
import ArvoReg from "../../common/font/Arvo/Arvo-Regular.woff";
import WorkSans from "../../common/font/WorkSans/work-sans.woff2";
const globalStyle = css `
  @font-face {
    font-family: "Arvo";
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url(${Arvo}) format("truetype");
  }

  @font-face {
    font-family: "Arvo-Regular";
    font-style: normal;
    font-display: swap;
    font-weight: normal;
    src: url(${ArvoReg}) format("truetype");
  }

  @font-face {
    font-family: "WorkSans";
    font-display: swap;
    font-style: normal;
    font-weight: normal;
    src: url(${WorkSans}) format("truetype");
  }

  ::-webkit-scrollbar {
    display: none;
  }

  * {
    -ms-overflow-style: none;
    margin: 0;
  }

  .sc-AxiKw {
    display: none !important;
  }

  .jbrkUT {
    display: none !important;
  }

  .bFGDdq {
    display: none !important;
  }

  .fgaKDy {
    display: none !important;
  }

  @media screen and (max-width: 600px) {
    .css-8o9kcw {
      display: none !important;
    }
    .css-kqdelo {
      display: none !important;
    }
    .css-1dx4ro0 {
      display: flex;
      justify-content: center;
    }
    .css-7hqaeo {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      /* optional */
      -webkit-box-align: start;
      -moz-box-align: start;
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
    }
    .swap {
      -webkit-box-ordinal-group: 2;
      -moz-box-ordinal-group: 2;
      -ms-flex-order: 2;
      -webkit-order: 2;
      order: 2;
    }
    .swap1 {
      -webkit-box-ordinal-group: 1;
      -moz-box-ordinal-group: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      order: 1;
    }
  }

  .slider-igeeks {
    width: 100vw;
    height: 90vh;
  }

  .slider-igeeks-shadow {
    width: 100%;
    height: 93vh;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 731px) {
    .css-9taffg {
      display: none !important;
    }
    .css-1u9pa42 {
      margin-left: 37% !important;
    }
    .css-kqdelo {
      display: none !important;
    }
    .slider-igeeks {
      height: 37vh;
      width: 100vw;
    }
    .css-15p4e1i {
      height: 245px !important;
    }
    .slider-igeeks-shadow {
      width: 100%;
      height: 37vh;
    }
    .css-detzih-Header {
      display: none !important;
    }
    .css-7hqaeo {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      /* optional */
      -webkit-box-align: start;
      -moz-box-align: start;
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
    }
    .swap {
      -webkit-box-ordinal-group: 2;
      -moz-box-ordinal-group: 2;
      -ms-flex-order: 2;
      -webkit-order: 2;
      order: 2;
    }
    .swap1 {
      -webkit-box-ordinal-group: 1;
      -moz-box-ordinal-group: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      order: 1;
    }
  }

  @media only screen and (min-device-width: 400px) and (max-device-width: 731px) {
    .css-lirv8m {
      margin-left: 33vw !important;
    }
  }

  // @media only screen and (min-device-width: 768px) and (max-device-width: 1024px)
  //IPHONE IPAD
  @media only screen and (min-device-width: 768px) and (max-device-width: 1000px) {
    .css-9taffg {
      display: none !important;
    }
    .css-kqdelo {
      display: none !important;
    }
    .slider-igeeks {
      height: 38vh;
      width: 100vw;
    }
    .slider-igeeks-shadow {
      width: 100%;
      height: 38vh;
    }
    .css-detzih-Header {
      display: none !important;
    }
    .css-7hqaeo {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      /* optional */
      -webkit-box-align: start;
      -moz-box-align: start;
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
    }
    .swap {
      -webkit-box-ordinal-group: 2;
      -moz-box-ordinal-group: 2;
      -ms-flex-order: 2;
      -webkit-order: 2;
      order: 2;
    }
    .swap1 {
      -webkit-box-ordinal-group: 1;
      -moz-box-ordinal-group: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      order: 1;
    }
    .swap-img-container {
      display: contents !important;
    }
    .swap-img-head {
      -webkit-box-ordinal-group: 2;
      -moz-box-ordinal-group: 2;
      -ms-flex-order: 2;
      -webkit-order: 2;
      order: 2;
      margin-left: 7px !important;
    }
    .swap-img-top {
      -webkit-box-ordinal-group: 1;
      -moz-box-ordinal-group: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      order: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
    .swap-img-top img {
      height: 199px !important;
      width: 96% !important;
    }
    .css-15r13jt-List {
      height: auto !important;
    }
  }

  //IPHONE IPAD PRO
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .css-9taffg {
      display: none !important;
    }
    .css-kqdelo {
      display: none !important;
    }
    .slider-igeeks {
      height: 38vh;
      width: 100vw;
    }
    .slider-igeeks-shadow {
      width: 100%;
      height: 38vh;
    }
    .css-detzih-Header {
      display: none !important;
    }
    // .css-7hqaeo {
    //   display: -webkit-box;
    //   display: -moz-box;
    //   display: -ms-flexbox;
    //   display: -webkit-flex;
    //   display: flex;
    //   -webkit-box-orient: vertical;
    //   -moz-box-orient: vertical;
    //   /* optional */
    //   -webkit-box-align: start;
    //   -moz-box-align: start;
    //   -ms-flex-align: start;
    //   -webkit-align-items: flex-start;
    //   align-items: flex-start;
    // }
    // .swap1 {
    //   -webkit-box-ordinal-group: 2;
    //   -moz-box-ordinal-group: 2;
    //   -ms-flex-order: 2;
    //   -webkit-order: 2;
    //   order: 2;
    // }
    // .swap {
    //   -webkit-box-ordinal-group: 1;
    //   -moz-box-ordinal-group: 1;
    //   -ms-flex-order: 1;
    //   -webkit-order: 1;
    //   order: 1;
    // }
  }
  @media only screen and (min-device-width: 700px) and (max-device-width: 1300px) {
    .css-9taffg {
      display: none !important;
    }
  }
`;

const GlobalStyle = () => {
    return <Global styles={globalStyle} />;
};
export default GlobalStyle;
