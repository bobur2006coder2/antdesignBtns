import { func, string } from "prop-types";
import DefaultBtn from "./DefaultBtn";
import PrimaryBtn from "./PrimaryBtn";
import DashedBtn from "./DashedBtn";
import TextBtn from "./TextBtn";
import LinkBtn from "./LinkBtn";
import SearchBtnAndDownloadBtn from "./DownloadBtnAndSearchBtn";

const IndexButtons = (props) => {
  const {
    type,
    text,
    handleClick,
    onMouseMove,
    onMouseDown,
    onMouseLeave,
    onMouseOut,
    hrefUrl,
    tooltipText
  } = props;

  switch (type) {
    case "default":
      return (
        <>
          <DefaultBtn
            handleClick={handleClick}
            text={text}
            onMouseMove={onMouseMove ? onMouseMove : () => {}}
            onMouseDown={onMouseDown ? onMouseDown : () => {}}
            onMouseLeave={onMouseLeave ? onMouseLeave : () => {}}
            onMouseOut={onMouseOut ? onMouseOut : () => {}}
          />
        </>
      );
    case "primary":
      return (
        <>
          <PrimaryBtn
            handleClick={handleClick}
            text={text}
            onMouseMove={onMouseMove ? onMouseMove : () => {}}
            onMouseDown={onMouseDown ? onMouseDown : () => {}}
            onMouseLeave={onMouseLeave ? onMouseLeave : () => {}}
            onMouseOut={onMouseOut ? onMouseOut : () => {}}
          />
        </>
      );
    case "dashed": {
      return (
        <>
          <DashedBtn
            handleClick={handleClick}
            text={text}
            onMouseMove={onMouseMove ? onMouseMove : () => {}}
            onMouseDown={onMouseDown ? onMouseDown : () => {}}
            onMouseLeave={onMouseLeave ? onMouseLeave : () => {}}
            onMouseOut={onMouseOut ? onMouseOut : () => {}}
          />
        </>
      );
    }
    case "textButton": {
      return (
        <>
          <TextBtn
            handleClick={handleClick}
            text={text}
            onMouseMove={onMouseMove ? onMouseMove : () => {}}
            onMouseDown={onMouseDown ? onMouseDown : () => {}}
            onMouseLeave={onMouseLeave ? onMouseLeave : () => {}}
            onMouseOut={onMouseOut ? onMouseOut : () => {}}
          />
        </>
      );
    }
    case "linkButton": {
      return (
        <>
          <LinkBtn
            hrefUrl={hrefUrl}
            handleClick={handleClick}
            text={text}
            onMouseMove={onMouseMove ? onMouseMove : () => {}}
            onMouseDown={onMouseDown ? onMouseDown : () => {}}
            onMouseLeave={onMouseLeave ? onMouseLeave : () => {}}
            onMouseOut={onMouseOut ? onMouseOut : () => {}}
          />
        </>
      );
    }
    case "search":{
      return(
        <>
        <SearchBtnAndDownloadBtn
         handleClick={handleClick}
         text={text||type+" Button"}
         tooltipText={tooltipText||type}
         onMouseMove={onMouseMove ? onMouseMove : () => {}}
         onMouseDown={onMouseDown ? onMouseDown : () => {}}
         onMouseLeave={onMouseLeave ? onMouseLeave : () => {}}
         onMouseOut={onMouseOut ? onMouseOut : () => {}}
         type={type}
        />
        </>
      )
    }
    case "download":{
      return(
        <>
        <SearchBtnAndDownloadBtn
         handleClick={handleClick}
         text={text||type+" Button"}
         tooltipText={tooltipText||type}
         onMouseMove={onMouseMove ? onMouseMove : () => {}}
         onMouseDown={onMouseDown ? onMouseDown : () => {}}
         onMouseLeave={onMouseLeave ? onMouseLeave : () => {}}
         onMouseOut={onMouseOut ? onMouseOut : () => {}}
         type={type}
        />
        </>
      )
    }
    default:
      return <>Bunday button type mavjud emas</>;
  }
};

IndexButtons.propTypes = {
  handleClick: func,
  text: string,
  type: string,
  onMouseMove: func,
  onMouseDown: func,
  onMouseLeave: func,
  onMouseOut: func,
  hrefUrl: string,
  tooltipText:string
};
export default IndexButtons;
