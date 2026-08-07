import ComingSoon from "@/components/coming-soon";

import { Service } from "@/types";

// TEMPORARILY DISABLED alongside the Services index page: the real service
// detail layout lives in ./ServiceDetails and ./ServiceContent. Swap <ComingSoon />
// back out for it once the copy is signed off.
const SingleServicePage = ({ service }: { service: Service }) => {
  return (
    <ComingSoon
      srTitle={`${service.title} | Anthony Massage Works`}
      eyebrow={service.title}
      caption={service.description || "Focused care, one condition at a time."}
      variant="session"
      title={`${service.title} Details Are on the Way.`}
      intro="This page is being written now. Until it's ready, the quickest way to find out whether this is the right fit is to ask."
      note="It isn't chosen from a menu in advance anyway. It's brought in when your body is asking for it."
    />
  );
};

export default SingleServicePage;
