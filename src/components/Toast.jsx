import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Toast({ status, message, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);
  if (!visible) return null;

  const bgColor = status === "error" ? "bg-red-500" : "bg-green-500";

  return (
    <div
      className={`fixed inset-x-0 bottom-4 mx-auto w-max px-8 py-3 rounded-md text-white ${bgColor} transition-all duration-500 shadow-l`}
    >
      {message}
    </div>
  );
}
Toast.propTypes = {
  status: PropTypes.oneOf(["error", "success"]).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
