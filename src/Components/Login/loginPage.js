import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/Slices/authSlice";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../Utils/firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize reCAPTCHA verifier on component mount
  useEffect(() => {
    if (step === "phone" && !window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("reCAPTCHA verified:", response);
            },
            "expired-callback": () => {
              console.log("reCAPTCHA expired");
            },
            "error-callback": () => {
              console.error("reCAPTCHA error");
            },
          },
        );
        console.log("reCAPTCHA verifier initialized");
      } catch (err) {
        console.error("reCAPTCHA initialization error:", err);
      }
    }
  }, [step]);

  // Send OTP via Firebase
  const sendOtp = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate phone number
    const cleaned = phone.replace(/[^0-9]/g, "");
    if (cleaned.length < 10) {
      setError("Please enter a valid phone number (at least 10 digits)");
      return;
    }

    setLoading(true);

    try {
      const phoneWithCountry = phone.startsWith("+") ? phone : `+91${cleaned}`;

      // Call Firebase signInWithPhoneNumber
      const result = await signInWithPhoneNumber(
        auth,
        phoneWithCountry,
        window.recaptchaVerifier,
      );

      setConfirmationResult(result);
      setStep("otp");
      setError(null);
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError(err.message || "Failed to send OTP. Please try again.");

      // Dispose and reinitialize reCAPTCHA on error
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = null;
        } catch (resetErr) {
          console.warn("reCAPTCHA clear failed:", resetErr);
          window.recaptchaVerifier = null;
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and sign in user
  const verifyOtp = async (e) => {
    e.preventDefault();
    setError(null);

    if (!/^[0-9]{4,6}$/.test(otp)) {
      setError("Please enter a valid 4-6 digit OTP");
      return;
    }

    if (!confirmationResult) {
      setError("Verification session expired. Please try again.");
      return;
    }

    setLoading(true);

    try {
      // Confirm the OTP
      const result = await confirmationResult.confirm(otp);
      const user = result.user;

      // Dispatch user data to Redux store
      dispatch(
        addUser({
          id: user.uid,
          name: user.displayName || "User",
          address: "",
          email: user.email || "",
          phone: user.phoneNumber || "",
        }),
      );

      // Navigate to home page on successful login
      console.log("User signed in:", user);
      navigate("/");
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError(err.message || "Invalid OTP. Please check and try again.");
    } finally {
      setLoading(false);
    }
  };

  const backToPhone = () => {
    setOtp("");
    setStep("phone");
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-80 h-96 bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h2 className="text-center text-xl font-semibold mb-4">
          Sign in with Phone
        </h2>

        {step === "phone" && (
          <form onSubmit={sendOtp} className="flex flex-col gap-3 mt-2">
            <label className="text-sm font-medium">Phone number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +1 555 555 5555"
              className="border rounded px-3 py-2 focus:outline-none focus:ring"
              disabled={loading}
            />

            {error && <div className="text-sm text-red-600">{error}</div>}

            {/* reCAPTCHA container */}
            <div id="recaptcha-container" />

            <button
              type="submit"
              disabled={loading}
              className="mt-auto w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Standard SMS rates may apply
            </p>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={verifyOtp} className="flex flex-col gap-3 mt-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Enter OTP</label>
              <button
                type="button"
                onClick={backToPhone}
                className="text-xs text-gray-500 hover:underline"
              >
                Change number
              </button>
            </div>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              className="border rounded px-3 py-2 focus:outline-none focus:ring"
              disabled={loading}
            />

            {error && <div className="text-sm text-red-600">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="mt-auto w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
