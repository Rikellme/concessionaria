import { Content } from "./style";

export default function Video() {
  return (
    <Content>
        <video controls autoPlay muted loop controlslist="nodownload">
            <source src="/videos/yer_final.mp4" type="video/mp4" />
        </video>
    </Content>
  );
}