/* eslint-disable react/prop-types */

const MutationError = ({ mutation }) => {
  const { error } = mutation;

  if (!error) return null;

  const errorMessage = error.message || "An unexpected error occurred";

  return (
    <div
      className="tw-bg-red-100 tw-border tw-border-red-400 tw-text-red-700 tw-px-4 tw-py-3 tw-rounded"
      role="alert"
    >
      <strong className="tw-font-bold">Error: </strong>
      <span className="tw-block tw-sm:inline">{errorMessage}</span>
    </div>
  );
};

export default MutationError;
