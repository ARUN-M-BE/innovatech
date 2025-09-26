// components/Testimonials.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    quote: "Innovatech's custom software streamlined our entire workflow, saving us countless hours and boosting our productivity significantly. Their team was professional, responsive, and a pleasure to work with.",
    author: "Jane Doe",
    position: "CEO, TechCorp"
  },
  {
    id: 2,
    quote: "Migrating to the cloud was a daunting task, but innovatech made it seamless. Their expertise and support were invaluable, and we've seen a massive improvement in our system's performance and scalability.",
    author: "John Smith",
    position: "CTO, NextGen"
  },
  {
    id: 3,
    quote: "The IT consulting from Innovatech has been a game-changer for us. Their strategic insights helped us optimize our IT infrastructure and align our technology with our business goals. Highly recommended!",
    author: "Samuel Green",
    position: "IT Director, HealthFirst"
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Hear from businesses who have transformed with Innovatech Solutions.</p>
          {/* <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-blue-600">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;