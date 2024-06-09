import { motion } from 'framer-motion';

export default function Card({ title, skillsSet }) {
  return (
    <motion.div
      className="border border-blue-100 bg-slate-800 rounded-lg shadow-lg p-6 w-80 md:w-[400px] m-auto mb-10 transition-transform transform-gpu hover:scale-110"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(0, 123, 255, 0.6)' }}
    >
      <h1 className="text-center text-2xl font-semibold mb-8">{title}</h1>
      <div className="grid grid-cols-3 gap-4">
        {skillsSet.map((skill, index) => (
          <button
            key={index}
            className="border border-blue-100 bg-transparent text-white py-2 px-4 rounded-lg cursor-text md:textlg text-xs"
          >
            {skill}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
