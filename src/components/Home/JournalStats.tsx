import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const JournalStats: React.FC = () => {
  const stats = [
    {
      icon: <BookOpen className="h-10 w-10 text-accent-500" />,
      value: '1,100+',
      label: 'Published Papers',
      description: 'High-quality research articles across disciplines'
    },
    {
      icon: <Users className="h-10 w-10 text-accent-500" />,
      value: '3,500+',
      label: 'Contributing Authors',
      description: 'Scholars from over 80 countries'
    },
    {
      icon: <Award className="h-10 w-10 text-accent-500" />,
      value: '6.2',
      label: 'Impact Factor',
      description: 'Growing academic influence'
    },
    {
      icon: <Clock className="h-10 w-10 text-accent-500" />,
      value: '4-5',
      label: 'Days to Decision',
      description: 'Efficient review process'
    }
  ];

  return (
    <section className="relative py-16 bg-primary-900 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div 
              key={i} 
              className="absolute bg-white"
              initial={{ 
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0.3,
                rotate: 0
              }}
              animate={{ 
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%"
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%"
                ],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Journal Metrics</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our commitment to academic excellence and efficient publishing processes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-primary-700/50 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-700/10 to-transparent opacity-50" />
              
              <motion.div 
                className="relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold mb-2 text-accent-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>

              {/* Animated corner accent */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalStats;