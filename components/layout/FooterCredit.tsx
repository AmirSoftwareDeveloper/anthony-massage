import Link from "next/link";

const FooterCredit = () => {
  return (
    <span className="text-xs">
      Developed by{" "}
      <Link
        href="https://truesocialmarketing.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        TSM
      </Link>
    </span>
  );
};

export default FooterCredit;
