/* eslint-disable react/prop-types */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const BreadCrum = ({ path = [] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.map((link, i) => (
          <Fragment key={link.path}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link className="tw-capitalize" to={link.path}>
                  {link.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {i < path.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrum;
