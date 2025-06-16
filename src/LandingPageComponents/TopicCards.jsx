import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import QuizIcon from "@mui/icons-material/Quiz";

// Sample topic data
const topics = [
  { title: "Science" },
  { title: "History" },
  { title: "Mathematics" },
  { title: "Geography" },
   { title: "Science" },
  { title: "History" },
  { title: "Mathematics" },
  { title: "Geography" },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TopicCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {topics.map((topic, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl bg-gradient-to-br from-blue-900 to-blue-500 p-1 shadow-lg"
        >
          <Card className="rounded-xl" sx={{ backgroundColor: "white", borderRadius: 3 }}>
            <CardContent className="flex flex-col items-center justify-center h-40">
              <QuizIcon sx={{ fontSize: 50, color: "#2563eb" }} className="mb-3" />
              <Typography variant="h6" className="font-bold text-gray-800">
                {topic.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Start quiz on {topic.title}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default TopicCards;
