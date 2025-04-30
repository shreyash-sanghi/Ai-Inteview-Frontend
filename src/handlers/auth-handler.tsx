import { LoaderPage } from "@/routes/loader-page";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {getUser,createUser} from "../api/mainApi/user-api.js"

const AuthHanlder = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        setLoading(true);
       const email = user.emailAddresses[0].emailAddress;
        const data = {
          name:(user.fullName||user.firstName ),
          email:email ,
          number:user.phoneNumbers[0],
          userId:user.id,
          profile:user.imageUrl
        }

        try {
          const chechUser = await getUser(user.id);
          const account = chechUser?.data?.data;
          console.log(account)
          if(account == false){
            await createUser(data);
          }
        } catch (error) {
          console.log(error);
          alert(error);

        }finally{
          setLoading(false);
        }
      }
    };

    storeUserData();
  }, [isSignedIn, user, pathname, navigate]);

  if (loading) {
    return <LoaderPage />;
  }

  return null;
};

export default AuthHanlder;
