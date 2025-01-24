import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Protected = async ({ children }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return children;
  } else {
    redirect("/api/auth/login");
  }
};

export default Protected;
