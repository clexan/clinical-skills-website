import { Navigate } from "react-router-dom";

export function CreditsPage() {
  return <Navigate replace to={{ hash: "#credits", pathname: "/" }} />;
}
