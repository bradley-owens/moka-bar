import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.4,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "circle(70.7% at 50% 50%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "circle(70.7% at 50% 50%)",
          },
          exitState: {
            clipPath: "circle(0.0% at 50% 50%)",
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
