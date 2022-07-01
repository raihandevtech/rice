import Link from "next/link";
import {FC} from "react";

type PropsType = {
    href: string;
    size?: string;
    color?: string;
    text: string;
    
}

const Button: FC<PropsType> = (props) => { 

  const size = props.size ? "_btn_" + props.size : "_btn_large";
  const color = props.color ? "_btn_" + props.color : "_btn_trans";

  return (
    <div className="_rice_btn">
      <Link href={props.href}>
      <a className={`_rice_btn_main ${size} ${color} `}><span className="_rice_btn_txt">{props.text}</span></a>
      </Link>
    </div>
  )
}

export default Button;