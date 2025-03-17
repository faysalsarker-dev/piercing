import { FaFacebookMessenger } from "react-icons/fa";
import { motion } from 'framer-motion';

const Chat = () => {
  return (
    <motion.a
      href="https://m.me/yourPageUsername" // Replace with your Messenger link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
      initial={{ scale: 0, opacity: 0, y: 50 }} // Initial animation
      animate={{ scale: 1, opacity: 1, y: 0 }} // Smooth entry
      transition={{
        delay: 1, // 1-second delay before animation starts
        type: "spring",
        stiffness: 200,
        damping: 10,
      }} // Natural spring effect
      whileHover={{ scale: 1.1, rotate: 10 }} // Hover animation
      whileTap={{ scale: 0.9 }} // Click animation
    >
      <FaFacebookMessenger size={28} />
    </motion.a>
  );
};

export default Chat;
