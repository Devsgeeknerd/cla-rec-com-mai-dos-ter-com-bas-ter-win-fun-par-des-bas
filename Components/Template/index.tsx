import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export const Template = ({ children }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
