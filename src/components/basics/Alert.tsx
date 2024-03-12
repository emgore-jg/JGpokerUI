import ErrorIcon from "../../svgs/error";
import InfoIcon from "../../svgs/info";
import SuccessIcon from "../../svgs/success";
import WarningIcon from "../../svgs/warning";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  type?: "success" | "warning" | "error";
  message: string;
}

function Alert({ type, message }: Props) {
  const renderIcon = () => {
    switch (type) {
      case "success":
        return <SuccessIcon />;
      case "warning":
        return <WarningIcon />;
      case "error":
        return <ErrorIcon />;
      default:
        return <InfoIcon />;
    }
  };

  return (
    <div
      role="alert"
      className={`alert ${type ? "alert-" + type : "alert-info"}`}
    >
      {renderIcon()}
      <span>
        {type ? type.charAt(0).toUpperCase() + type.slice(1) + ": " : ""}
        {message}
      </span>
    </div>
  );
}

export default Alert;
