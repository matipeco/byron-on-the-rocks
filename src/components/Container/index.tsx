import { FunctionComponent, PropsWithChildren } from "react";
import './style.scss'

export const Container:FunctionComponent<PropsWithChildren> = ({children})=>{
  return(
    <main className="container">
      {children}
    </main>
  )
}