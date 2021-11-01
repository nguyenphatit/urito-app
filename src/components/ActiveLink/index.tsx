import React, { FC, Children } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  children: React.ReactNode | any;
  activeClassName: string;
  href: string;
  as?: string;
}

/**
 * The Component generate a link with active class name if the current path is the same as the href
 * @param {ReactNode} children - The children of the component
 * @param {string} activeClassName - The class name to add to the link if the current path is the same as the href
 * @returns {JSX.Element}
 */
const ActiveLink: FC<Props> = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
