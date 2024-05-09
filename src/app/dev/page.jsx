import { Wrapper } from "@/libs/components/wrapper/Wrapper";
import { NovaPostA } from "@/libs/components/nova-post-api/NovaPostA";
import { Liqpay } from "@/libs/components/liqpay/LiqpayComponent";

export default async function Dev() {
  return (
    <Wrapper>
      <Liqpay>awdawd</Liqpay>;
      <NovaPostA />
    </Wrapper>
  );
}
