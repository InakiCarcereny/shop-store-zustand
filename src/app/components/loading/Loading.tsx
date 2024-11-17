import { ClipLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="flex items-center justify-center">
      <ClipLoader color="#0069ff" loading={true} size={50} />
    </div>
  );
}
