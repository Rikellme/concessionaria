import { Content } from "./style";

export default function Button({ children, color, onClick, ...props }) {
  return (
    <Content color={color} onClick={onClick} {...props}>
      {children}
    </Content>
  );
}
