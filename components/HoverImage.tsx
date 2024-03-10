import { useRef } from "react";

function getRelativeCoordinates(event: any, referenceElement: any) {
    const position = {
      x: event.pageX,
      y: event.pageY
    };
  
    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight
    };
  
    let reference = referenceElement.offsetParent;
  
    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }
  
    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
      width: offset.width,
      height: offset.height,
      centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
      centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
    };
  }

/* eslint-disable @next/next/no-img-element */
function HoverImage({ title, image }: { title: string; image: string }) {
  const imageRef = useRef<HTMLImageElement>(null);
  const boxRef = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const pos = getRelativeCoordinates(e, imageRef.current)
    if (imageRef.current) {
      imageRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }
  };

  return (
    <a href="" onMouseMove={onMouseMove} ref={boxRef}>
      {title} <img className="img" src={image} alt="" ref={imageRef} />
    </a>
  );
}

export default HoverImage;
