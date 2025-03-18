import { IoChatbubbleEllipses } from "react-icons/io5";
import { motion } from 'framer-motion';

const Chat = () => {
  return (
    <motion.a
      href="https://www.instagram.com/direct/t/121545575902881" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
      initial={{ scale: 0, opacity: 0, y: 50 }} 
      animate={{ scale: 1, opacity: 1, y: 0 }} 
      transition={{
        delay: 1, 
        type: "spring",
        stiffness: 200,
        damping: 10,
      }} 
      whileHover={{ scale: 1.1, rotate: 10 }} 
      whileTap={{ scale: 0.9 }} 
    >
      <IoChatbubbleEllipses size={28} />

    </motion.a>
  );
};

export default Chat;
