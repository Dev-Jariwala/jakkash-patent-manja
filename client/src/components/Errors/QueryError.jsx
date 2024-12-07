/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { MdError } from "react-icons/md";

const QueryError = ({ error, className }) => {
  return (
    <div
      className={cn(" tw-text-xs lg:tw-text-sm tw-text-red-500 ", className)}
    >
      <div className="tw-flex tw-items-center tw-space-x-2">
        <MdError />

        <div className="tw-flex tw-items-center tw-space-x-2">
          <div>{error?.response?.data?.message} - </div>
          <div>{error?.message}</div>
        </div>
      </div>
    </div>
  );
};

export default QueryError;
