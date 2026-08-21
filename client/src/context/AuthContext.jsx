import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

import {
  loginWithEmail,
  registerWithEmail,
  loginWithGoogle,
  logoutUser,
  syncUser,
} from "../services/authService";

import { updateProfile } from "../services/userService";

import {
    getProfile,
    updateProfile as updateProfileServices
} from "../services/userService";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState(null);
const [profile, setProfile] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {

    const unsubscribe = onAuthStateChanged(

        auth,

        async (user) => {

            if (!user) {

                setFirebaseUser(null);
                setProfile(null);
                setLoading(false);
                return;

            }

            try {

                setFirebaseUser(user);

                await syncUser();

                const mongoProfile =
                    await getProfile();

                setProfile(mongoProfile.data);

            }

            catch (error) {

                console.log(error);

            }

            setLoading(false);

        }

    );

    return unsubscribe;

}, []);

  // Email Login
async function login(email, password) {
    try {
        console.log("1️⃣ LOGIN START");

        const firebaseUser = await loginWithEmail(email, password);

        const token = await firebaseUser.getIdToken();
        

        setFirebaseUser(firebaseUser);

       

        const syncResult = await syncUser({
            name: firebaseUser.displayName || "",
            phone: firebaseUser.phoneNumber || "",
            accountType: "user"
        });

       

        const mongoProfile = await getProfile();

       

        setProfile(mongoProfile.data);

        return {
            success: true
        };

    } catch (error) {

        console.error("❌ LOGIN FAILED:", error);

        return {
            success: false,
            message: error.message
        };
    }

}

  // Register
async function register(formData) {

    try {

        const firebaseUser =
            await registerWithEmail(
                formData.email,
                formData.password
            );

        await syncUser({

            name:
                `${formData.firstName} ${formData.lastName}`,

            phone:
                formData.phone,

            accountType:
                "user"

        });

        setFirebaseUser(firebaseUser);

        const mongoProfile =
            await getProfile();

        setProfile(mongoProfile.data);

        return {

            success: true

        };

    }

    catch (error) {

        return {

            success: false,
            message: error.message

        };

    }

}

  // Google Login
async function googleLogin() {

    try {

        const firebaseUser =
            await loginWithGoogle();

        await syncUser({

            name:
                firebaseUser.displayName,

            phone:
                firebaseUser.phoneNumber,

            accountType:
                "user"

        });

        setFirebaseUser(firebaseUser);

        const mongoProfile =
            await getProfile();

        setProfile(mongoProfile.data);

        return {

            success: true

        };

    }

    catch (error) {

        return {

            success: false,
            message: error.message

        };

    }

}



  // Logout
async function logout() {

    await logoutUser();

    setFirebaseUser(null);

    setProfile(null);

}

//Update profile 
async function updateUser(data) {

    try {

        const updated =
            await updateProfileServices(data);

        setProfile(updated.data);

        return {

            success: true

        };

    }

    catch (error) {

        return {

            success: false,
            message: error.message

        };

    }

}
  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        profile,
        loading,
        login,
        register,
        googleLogin,
        logout,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}