import { ClipLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <ClipLoader color="#0069ff" loading={true} size={50} />
      Loading...
    </div>
  );
}
