import { Wrapper } from "@/libs/components/wrapper/Wrapper";
import { MeMoNovaPost } from "@/libs/components/nova-post-api/NovaPostA";
import { Liqpay } from "@/libs/components/liqpay/Liqpay";

export default async function Dev() {
  return (
    <Wrapper>
      <Liqpay />
      <MeMoNovaPost />
    </Wrapper>
  );
}
