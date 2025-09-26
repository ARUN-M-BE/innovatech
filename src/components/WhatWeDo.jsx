// components/WhatWeDo.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatWeDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          {/* <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div> */}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        >
          <p className="text-center text-xl">
            At Innovatech Solutions, we specialize in developing custom software, providing IT consulting, and implementing cloud solutions. Our goal is to help businesses streamline their operations, enhance productivity, and achieve their strategic objectives through technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;