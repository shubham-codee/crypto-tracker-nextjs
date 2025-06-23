import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function BackToHomeButton() {
  return (
    <Link href="/" aria-label="Back to Home">
      <button
        className="
          fixed top-0 left-0 z-50
          flex items-center gap-3
          p-3 lg:p-5
          rounded-br-full
          bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400
          text-white text-lg font-semibold shadow-xl
          transition-all duration-300
          hover:scale-105 hover:shadow-2xl
          group
          cursor-pointer
        "
      >
        <FiArrowLeft className="w-6 h-6 mr-1 transition-transform duration-400 ease-linear group-hover:-translate-x-2" />
      </button>
    </Link>
  );
}
